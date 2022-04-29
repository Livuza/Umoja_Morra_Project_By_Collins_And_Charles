'reach 0.1';

const DEADLINE = 10;
const [isResult, ERIN_WINS, LOLA_WINS, DRAW] = makeEnum(3);

const roundWinner = (fingersErin, guessErin, fingersLola, guessLola) => {
    const playedFingers = fingersErin + fingersLola;

    if (guessErin == playedFingers) {
        if (guessLola == playedFingers) {
            return DRAW;
        } else {
            return ERIN_WINS;
        }
    } else if (guessErin != playedFingers) {
        if (guessLola != playedFingers){
            return DRAW;
        } else {
            return LOLA_WINS;
        }
    } else {
        return DRAW;
    }
};

const gameWinner = (pointsErin, pointsLola) => {
    if (pointsErin > pointsLola) {
        return ERIN_WINS;
    } else if (pointsLola > pointsErin) {
        return LOLA_WINS;
    } else {
        return DRAW;
    }
};

assert(roundWinner(1, 3, 2, 6) == ERIN_WINS);
assert(roundWinner(1, 6, 2, 3) == LOLA_WINS);
assert(roundWinner(1, 6, 2, 6) == DRAW);
assert(roundWinner(1, 3, 1, 3) == DRAW);
assert(gameWinner(2, 0) == ERIN_WINS);
assert(gameWinner(2, 1) == ERIN_WINS);
assert(gameWinner(1, 1) == DRAW); 

forall(UInt, fingersErin => 
    forall(UInt, fingersLola =>
        forall(UInt, guessErin =>
            forall(UInt, guessLola => 
                assert(isResult(roundWinner(fingersErin, guessErin, fingersLola, guessLola)))))));

forall(UInt, (fingersErin) => 
    forall(UInt, (fingersLola) =>
        forall(UInt, (guess) =>
            assert(roundWinner(fingersErin, guess, fingersLola, guess) == DRAW))));

forall(UInt, pointsErin => 
    forall(UInt, pointsLola => 
        assert(isResult(gameWinner(pointsErin, pointsLola)))));

const Player = {
    ...hasRandom,
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeRound: Fun([UInt], Null),
    // seeScore: Fun([Object{}], Null),
    seeRoundWinner: Fun([UInt], Null),
    seeFinalResult: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
    const Erin = Participant('Erin', {
        ...Player,
        wager: UInt,
    });

    const Lola = Participant('Lola', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Erin, Lola], () => {
            interact.informTimeout();
        });
    };

    Erin.only(() => {
        const wager = declassify(interact.wager);
    });
    Erin.publish(wager)
        .pay(wager);
    commit();

    Lola.only(() => {
        interact.acceptWager(wager);
    });
    Lola.pay(wager)
        .timeout(relativeTime(DEADLINE), () => closeTo(Erin, informTimeout));

    var gameVars = {
        round: 1,
        points: {
            pointsErin: 0,
            pointsLola: 0,
        },
    };
    invariant( balance() == 2 * wager);
    while ( gameVars.round < 4 ) {
        commit();

        each([Erin, Lola], () => {
            interact.seeRound(gameVars.round);
        });

        Erin.only(() => {
            const _fingersErin = interact.getFingers();
            const [_commitFingersErin, _saltFingersErin] = makeCommitment(interact, _fingersErin);
            const commitFingersErin = declassify(_commitFingersErin);
    
            const _guessErin = interact.getGuess();
            const guessErin = declassify(_guessErin);
        });
        Erin.publish(commitFingersErin, guessErin)
            .timeout(relativeTime(DEADLINE), () => closeTo(Lola, informTimeout));
        commit();
    
        unknowable(Lola, Erin(_fingersErin, _saltFingersErin));

        Lola.only(() => {
            const _fingersLola = interact.getFingers();
            const fingersLola = declassify(_fingersLola);
    
            const _guessLola = interact.getGuess();
            const guessLola = declassify(_guessLola);
        });
        Lola.publish(fingersLola, guessLola)
            .timeout(relativeTime(DEADLINE), () => closeTo(Erin, informTimeout));
        commit();

        Erin.only(() => {
            const saltFingersErin = declassify(_saltFingersErin);
            const fingersErin = declassify(_fingersErin);
        });
        Erin.publish(saltFingersErin, fingersErin)
            .timeout(relativeTime(DEADLINE), () => closeTo(Lola, informTimeout));
        checkCommitment(commitFingersErin, saltFingersErin, fingersErin);

        const roundResult = roundWinner(fingersErin, guessErin, fingersLola, guessLola);

        each([Erin, Lola], () => {
            interact.seeRoundWinner(roundResult);
        });
        
        if (roundResult == ERIN_WINS) {
            gameVars = {
                round: gameVars.round + 1, 
                points: {
                    pointsErin: gameVars.points.pointsErin + 1,
                    pointsLola: gameVars.points.pointsLola,
                },
            }
            continue;
        } else if (roundResult == LOLA_WINS) {
            gameVars = {
                round: gameVars.round + 1, 
                points: {
                    pointsErin: gameVars.points.pointsErin,
                    pointsLola: gameVars.points.pointsLola + 1,
                },
            }
            continue;
        } else {
            gameVars = {
                round: gameVars.round + 1, 
                points: {
                    pointsErin: gameVars.points.pointsErin,
                    pointsLola: gameVars.points.pointsLola,
                },
            }
            continue;
        }
    };
    
    const finalResult = gameWinner(gameVars.points.pointsErin, gameVars.points.pointsLola);    

    assert(finalResult == ERIN_WINS || finalResult == LOLA_WINS || finalResult == DRAW);
    if (finalResult == DRAW) {
        transfer(1 * wager).to(Erin);
        transfer(1 * wager).to(Lola);
    } else if (finalResult == ERIN_WINS) {
        transfer(2 * wager).to(Erin);
    } else {
        transfer(2 * wager).to(Lola);
    }
    commit();

    each([Erin, Lola], () => {
        interact.seeFinalResult(finalResult);
    });
});
