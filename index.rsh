'reach 0.1';

const [isResult, ERIN_WINS, LOLA_WINS, DRAW] = makeEnum(3);

const roundWinner = (guessErin, guessLola, playedFingers) => {
    if (guessErin == guessLola) { 
        return DRAW;
    } else if (guessErin == playedFingers) {
        return ERIN_WINS;
    } else { 
        return LOLA_WINS;
    };
};

const winner = (pointsErin, pointsLola) => {
    if (pointsErin > pointsLola) {
        return ERIN_WINS;
    } else if (pointsLola > pointsErin) {
        return LOLA_WINS;
    }
};

assert(roundWinner(5, 3, 5) == ERIN_WINS);
assert(roundWinner(1, 2, 2) == LOLA_WINS);
assert(roundWinner(6, 6, 6) == DRAW);
assert(roundWinner(3, 3, 6) == DRAW);
assert(winner(2, 0) == ERIN_WINS);
assert(winner(2, 1) == ERIN_WINS);
assert(winner(1, 1) == DRAW); 

const DEADLINE = 10;

const Points = {
    pointsErin: 0,
    pointsLola: 0,
};

const Player = {
    ...hasRandom,
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeRoundWinner: Fun([UInt], Null),
    seeResult: Fun([UInt, UInt, UInt, UInt], Null),
    informTimeout: Fun([], UInt),
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
    Lola.publish()
        .pay(wager);

    var round = 1;
    invariant( balance() == 2 * wager );
    while (round < 4) {
        commit();

        Erin.only(() => {
            const _fingersErin = interact.getFingers();
            const [_commitFingersErin, _saltFingersErin] = makeCommitment(interact, _fingersErin);
            const commitFingersErin = declassify(_commitFingersErin);
    
            const _guessErin = interact.getGuess();
            const [_commitGuessErin, _saltGuessErin] = makeCommitment(interact, _guessErin);
            const commitGuessErin = declassify(_guessErin);
        });
        Erin.publish(commitFingersErin, commitGuessErin)
            .timeout(relativeTime(DEADLINE), () => closeTo(Lola, informTimeout));
        commit();
    
        unknowable(Lola, Erin(_fingersErin, _saltFingersErin));
        unknowable(Lola, Erin(_guessErin, _saltGuessErin));
    
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

            const saltGuessErin = declassify(_saltGuessErin);
            const guessErin = declassify(_guessErin);
        });
        Erin.publish(saltFingersErin, fingersErin)
            .timeout(relativeTime(DEADLINE), () => closeTo(Lola, informTimeout));
        checkCommitment(commitFingersErin, saltFingersErin, fingersErin);
        commit();

        Erin.publish(saltGuessErin, guessErin)
            .timeout(relativeTime(DEADLINE), () => closeTo(Lola, informTimeout));
        checkCommitment(commitGuessErin, saltGuessErin, guessErin);
        commit();

        const playedFingers = (fingersErin + fingersLola);
        const roundResult = roundWinner(guessErin, guessLola, playedFingers);

        if (roundResult == ERIN_WINS) {
            Points.pointsErin++;
        } else if (roundResult == LOLA_WINS) {
            Points.pointsLola++;
        }

        each([Erin, Lola], () => {
            interact.seeRoundWinner(roundResult, round, Points.pointsErin, Points.pointsLola);
        });

        round++;
        continue;
    };
    
    const finalResult = winner(Points.pointsErin, Points.pointsLola);    

    assert(finalResult == ERIN_WINS || finalResult == LOLA_WINS);
    transfer(2 * wager).to(finalResult == ERIN_WINS ? Erin : Lola);
    commit();

    each([Erin, Lola], () => {
        interact.seeResult(finalResult);
    });
});
