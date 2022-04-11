import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accErin = await stdlib.newTestAccount(startingBalance);
const accLola = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (Who) => fmt(await stdlib.balanceOf(Who));
const erinStartBalance = await getBalance(accErin);
const lolaStartBalance = await getBalance(accLola);

const ctcErin = accErin.contract(backend);
const ctcLola = accLola.contract(backend, ctcErin.getInfo());

const FINGERS = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const RESULT = ['Erin wins', 'Lola wins', 'Draw'];
// for best of three
// const POINTS = [pointsErin, pointsLola] = [0,0];
// var round = 1;

const Player = (Who) => ({
    getFingers: () => {
        const fingers = Math.floor(Math.random() * 5);
        (fingers === 1) ? 
        console.log(`${Who} played ${FINGERS[fingers]} finger`) :
        console.log(`${Who} played ${FINGERS[fingers]} fingers`);
        return fingers;
    },
    getGuess: () => {
        const guess = Math.floor(Math.random() * 10);
        console.log(`${Who} guessed ${GUESS[guess]} fingers played`);
        return guess;
    },
    seeResult: (result) => {
        console.log(`${Who} saw outcome ${RESULT[result]}`);
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
            console.log(`Lola agrees to pay ${fmt(amt)}`);
        }
    }),
]);

const erinEndBalance = await getBalance(accErin);
const lolaEndBalance = await getBalance(accLola);
console.log(`Ein started with ${erinStartBalance} and now has ${erinEndBalance}`);
console.log(`Lola started with ${lolaStartBalance} and now has ${lolaEndBalance}`);

// for best of three
// while (round < 4) {
//     await Promise.all([
//         ctcErin.p.Erin({
//             ...Player('Erin'),
//         }),
//         ctcLola.p.Lola({
//             ...Player('Lola'),
//         }),
//     ]);
//     round++;
// }
