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
const POINTS = [0, 0]; // points for erin and lola respectfully 
const RESULT = ['Erin wins', 'Draw', 'Lola wins'];