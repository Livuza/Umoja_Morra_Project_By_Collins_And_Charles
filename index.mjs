import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isGameCreator = await ask.ask(`Welcome to Morra! Are you creating a new game?`, ask.yesno);
const who = isGameCreator 
    ? 'Erin' 
    : 'Lola';
console.log(`You are playing as ${who}`);

let acc = null;
const createAcc = await ask.ask(`Would you like to create a new account?`, ask.yesno);
if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(`What is your secret?`, (x => x));
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isGameCreator) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The contract is deployed as: ${JSON.stringify((info))}`);
    });
} else {
    const info = await ask.ask(`Please enter contract info for game you wish to join`, JSON.parse);
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const balanceBefore = await getBalance();
console.log(`Your balance is ${balanceBefore}`);

const interact = {...stdlib.hasRandom};

interact.informTimeout = () => {
    console.log(`There was a timeout`);
    process.exit(1);
}

if (isGameCreator) {
    const amt = await ask.ask(`How much would you like to wager?`, stdlib.parseCurrency);
    interact.wager = amt;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
    interact.acceptWager = async (amt) => {
        const accepted = await ask.ask(`Wager of ${fmt(amt)} to play. Do you accept?`, ask.yesno);
        if (!accepted) {
            process.exit(0);
        }
    };
};

const FINGERS = ['zero', 'one', 'two', 'three', 'four', 'five'];
const PLAYABLE_FINGERS = {
    '0': 0, 'Zero': 0, 'zero': 0, 'none': 0,
    '1': 1, 'One': 1, 'one': 1,
    '2': 2, 'Two': 2, 'two': 2,
    '3': 3, 'Three': 3, 'three': 3,
    '4': 4, 'Four': 4, 'four': 4,
    '5': 5, 'Five': 5, 'five': 5,
};
const GUESS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']; 
const POSSIBLE_GUESSES = {
    '0': 0, 'Zero': 0, 'zero': 0, 'none': 0,
    '1': 1, 'One': 1, 'one': 1,
    '2': 2, 'Two': 2, 'two': 2,
    '3': 3, 'Three': 3, 'three': 3,
    '4': 4, 'Four': 4, 'four': 4,
    '5': 5, 'Five': 5, 'five': 5,
    '6': 6, 'Six': 6, 'six': 6,
    '7': 7, 'Seven': 7, 'seven': 7,
    '8': 8, 'Eight': 8, 'eight': 8,
    '9': 9, 'Nine': 9, 'nine': 9,
    '10': 10, 'Ten': 10, 'ten': 10,
};
const RESULT = ['Erin wins', 'Lola wins', 'Draw'];

interact.getFingers = async () => {
    const fingers = await ask.ask(`How many fingers do you want to throw? (One hand only)`, (x) => {
        const thrownFingers = PLAYABLE_FINGERS[x];
        if ( thrownFingers === undefined ) {
            throw error(`Not a valid amount of fingers`);
        } 
        if ( thrownFingers > 5 ) {
            throw error(`Only one hand playable, silly! Try again.`);
        }
        return thrownFingers;
    });
    (fingers === 1) 
        ? console.log(`You played ${FINGERS[fingers]} finger`) 
        : console.log(`You played ${FINGERS[fingers]} fingers`);
    return fingers;
};

interact.getGuess = async () => {
    const guess = await ask.ask(`Take a guess the total amount of fingers`, (x) => {
        const givenGuess = POSSIBLE_GUESSES[x];
        if ( givenGuess === undefined ) {
            throw error(`Not a valid amount guess`);
        }
        return givenGuess;
    });
    (guess === 1) 
        ? console.log(`You guessed ${GUESS[guess]} finger`) 
        : console.log(`You guessed ${GUESS[guess]} fingers`);
    return guess;
};

interact.seeRound = async (round) => {
    round == 1 
        ? console.log(`\n--- New best-of-three game ---`) 
        : console.log(`\nRound ${round} starting...`);
};

interact.seeRoundWinner = async (roundResult) => {
    if ((RESULT[roundResult] == 'Erin wins' && isGameCreator) || (RESULT[roundResult] == 'Lola wins' && !isGameCreator)) {
        console.log(`You won this round, nice :)`);
    } else if ((RESULT[roundResult] == 'Erinwins' && !isGameCreator) || (RESULT[roundResult] == 'Lola wins' && isGameCreator)) {
        console.log(`You lost this round :(`);
    } else {
        console.log(`This round was a draw!`);
    }
};

interact.seeFinalResult = async (finalResult) => {
    if ((RESULT[finalResult] == 'Erin wins' && isGameCreator) || (RESULT[finalResult] == 'Lola wins' && !isGameCreator)) {
        console.log(`Congratulations! You won the game :)`);
    } else if ((RESULT[finalResult] == 'Erin wins' && !isGameCreator) || (RESULT[finalResult] == 'Lola wins' && isGameCreator)) {
        console.log(`Your opponent won the game! Better luck next time :(`);
    } else {
        console.log(`Game ends in a draw!`);
    }
};

const part = isGameCreator ? ctc.p.Erin : ctc.p.Lola;
await part(interact);

const balanceAfter = await getBalance();
console.log(`Your balance is now ${balanceAfter}`);

ask.done(); 
