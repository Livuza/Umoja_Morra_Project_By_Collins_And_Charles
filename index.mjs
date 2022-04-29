import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accErin = await stdlib.newTestAccount(startingBalance);
const accLola = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (Who) => fmt(await stdlib.balanceOf(Who));
const startBalanceErin = await getBalance(accErin);
const startBalanceLola = await getBalance(accLola);

const ctcErin = accErin.contract(backend);
const ctcLola = accLola.contract(backend, ctcErin.getInfo());

const FINGERS = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const RESULT = ['Erin wins', 'Lola wins', 'Draw'];

const Player = (Who) => ({
    ...stdlib.hasRandom,
    getFingers: async () => {
        const fingers = Math.floor(Math.random() * 5);
        (fingers === 1) ? 
        console.log(`${Who} played ${FINGERS[fingers]} finger`) :
        console.log(`${Who} played ${FINGERS[fingers]} fingers`);
        if ( Math.random() <= 0.01 ) {
            for ( let i = 0; i < 10; i++ ) {
                console.log(`Still waiting for ${Who}...`);
                await stdlib.await(1);
            }
        }
        return fingers;
    },
    getGuess: () => {
        const guess = Math.floor(Math.random() * 10);
        console.log(`${Who} guessed ${GUESS[guess]} fingers played`);
        return guess;
    },
    seeRound: (round) => {
        round == 1 
        ? console.log(`--- New best-of-three game starting ---`) 
        : console.log(`\nRound ${round} starting...`);
    },
    // seeScore: () => {

    // },
    seeRoundWinner: (roundResult) => {
        console.log(`${Who} saw round result: ${RESULT[roundResult]}`);
    },
    seeFinalResult: (result) => {
        console.log(`${Who} saw FINAL RESULT: ${RESULT[result]}`);
    },
    informTimeout: () => {
        console.log(`${Who} saw a timeout`);
      },
});

await Promise.all([
    ctcErin.p.Erin({
        ...Player('Erin'),
        wager: stdlib.parseCurrency(10),
    }),
    ctcLola.p.Lola({
        ...Player('Lola'),
        acceptWager: (amt) => { 
            console.log(`Lola agrees to pay ${fmt(amt)}\n`);
        },
    }),
]);

const endBalanceErin = await getBalance(accErin);
const endBalanceLola = await getBalance(accLola);
console.log(`Erin started with ${startBalanceErin} and now has ${endBalanceErin}`);
console.log(`Lola started with ${startBalanceLola} and now has ${endBalanceLola}`);
