import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isGameCreator = await ask.ask(`Are you creating a new game?`, ask.yesno);
const name = await ask.ask(`Enter your name`, String);

console.log(`What a great name! Welcome to Morra, ${name} :)`);

let acc = null;
const createAcc = await ask.ask(`Would you like to create a new account?`, ask.yesno);
if(createAcc) {
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

const interact = {...stdlib.hasrandom};

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
    }
}
// const startingBalance = stdlib.parseCurrency(100);
// const accErin = await stdlib.newTestAccount(startingBalance);
// const accLola = await stdlib.newTestAccount(startingBalance);

// const fmt = (x) => stdlib.formatCurrency(x, 4);
// const getBalance = async (Who) => fmt(await stdlib.balanceOf(Who));
// const startBalanceErin = await getBalance(accErin);
// const startBalanceLola = await getBalance(accLola);

// const ctcErin = accErin.contract(backend);
// const ctcLola = accLola.contract(backend, ctcErin.getInfo());

// const FINGERS = [0, 1, 2, 3, 4, 5];
// const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// const RESULT = ['Erin wins', 'Lola wins', 'Draw'];

// const Player = (Who) => ({
//     ...stdlib.hasRandom,
//     getFingers: async () => {
//         const fingers = Math.floor(Math.random() * 5);
//         (fingers === 1) ? 
//         console.log(`${Who} played ${FINGERS[fingers]} finger`) :
//         console.log(`${Who} played ${FINGERS[fingers]} fingers`);
//         if ( Math.random() <= 0.01 ) {
//             for ( let i = 0; i < 10; i++ ) {
//                 console.log(`Still waiting for ${Who}...`);
//                 await stdlib.await(1);
//             }
//         }
//         return fingers;
//     },
//     getGuess: () => {
//         const guess = Math.floor(Math.random() * 10);
//         console.log(`${Who} guessed ${GUESS[guess]} fingers played`);
//         return guess;
//     },
//     seeRound: (round) => {
//         round == 1 
//         ? console.log(`--- New best-of-three game starting ---`) 
//         : console.log(`\nRound ${round} starting...`);
//     },
//     // seeScore: () => {

//     // },
//     seeRoundWinner: (roundResult) => {
//         console.log(`${Who} saw round result: ${RESULT[roundResult]}`);
//     },
//     seeFinalResult: (result) => {
//         console.log(`${Who} saw FINAL RESULT: ${RESULT[result]}`);
//     },
//     informTimeout: () => {
//         console.log(`${Who} saw a timeout`);
//       },
// });

// await Promise.all([
//     ctcErin.p.Erin({
//         ...Player('Erin'),
//         wager: stdlib.parseCurrency(10),
//     }),
//     ctcLola.p.Lola({
//         ...Player('Lola'),
//         acceptWager: (amt) => { 
//             console.log(`Lola agrees to pay ${fmt(amt)}\n`);
//         },
//     }),
// ]);

// const endBalanceErin = await getBalance(accErin);
// const endBalanceLola = await getBalance(accLola);
// console.log(`Erin started with ${startBalanceErin} and now has ${endBalanceErin}`);
// console.log(`Lola started with ${startBalanceLola} and now has ${endBalanceLola}`);
