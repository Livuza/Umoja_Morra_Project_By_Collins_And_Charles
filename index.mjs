import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accErin = await stdlib.newTestAccount(startingBalance);
const accLola = await stdlib.newTestAccount(startingBalance);

const ctcErin = accErin.contract(backend);
const ctcLola = accLola.contract(backend, ctcErin.getInfo());

const FINGERS = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const POINTS = [pointsErin, pointsLola] = [0,0]; 
const RESULT = ['Erin wins', 'Lola wins', 'Draw'];

const Player = (Who) => ({
    getFingers: () => {
        const fingers = Math.floor(Math.random() * 5);
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
    }),
    ctcLola.p.Lola({
        ...Player('Lola'),
    }),
]);
