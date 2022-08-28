'reach 0.1';

const [gameResult, COLLINS_WINS_GAME, CHARLES_WINS_GAME, DRAW] = makeEnum(3);


const winnerOfAnyRound = (fingersThrownByCollins, fingersGuessedByCollins, fingersThrownByCharles, fingersGuessedByCharles) => {
    const totalAmountFingersPlayed = fingersThrownByCollins + fingersThrownByCharles;
    if (totalAmountFingersPlayed == fingersGuessedByCollins && totalAmountFingersPlayed !== fingersGuessedByCharles) {
        return COLLINS_WINS_GAME;
    } else if (totalAmountFingersPlayed == fingersGuessedByCharles && totalAmountFingersPlayed !== fingersGuessedByCollins ) {
        return CHARLES_WINS_GAME;
    } else {
        return DRAW;
    }
};

const winnerOfTheGame = (pointsCollins, pointsCharles) => {
    if (pointsCollins > pointsCharles) {
        return COLLINS_WINS_GAME;
    } else if (pointsCharles > pointsCollins) {
        return CHARLES_WINS_GAME;
    } else {
        return DRAW;
    }
};

assert(winnerOfAnyRound(1, 3, 2, 6) == COLLINS_WINS_GAME);
assert(winnerOfAnyRound(1, 6, 2, 3) == CHARLES_WINS_GAME);
assert(winnerOfAnyRound(1, 6, 2, 6) == DRAW);
assert(winnerOfAnyRound(1, 3, 1, 3) == DRAW);
assert(winnerOfTheGame(2, 0) == COLLINS_WINS_GAME);
assert(winnerOfTheGame(2, 1) == COLLINS_WINS_GAME);
assert(winnerOfTheGame(1, 1) == DRAW); 

forall(UInt, fingersThrownByCollins => 
    forall(UInt, fingersThrownByCharles =>
        forall(UInt, fingersGuessedByCollins =>
            forall(UInt, fingersGuessedByCharles => 
                assert(gameResult(winnerOfAnyRound(fingersThrownByCollins, fingersGuessedByCollins, fingersThrownByCharles, fingersGuessedByCharles)))))));

forall(UInt, (fingersThrownByCollins) => 
    forall(UInt, (fingersThrownByCharles) =>
        forall(UInt, (guess) =>
            assert(winnerOfAnyRound(fingersThrownByCollins, guess, fingersThrownByCharles, guess) == DRAW))));

forall(UInt, pointsCollins => 
    forall(UInt, pointsCharles => 
        assert(gameResult(winnerOfTheGame(pointsCollins, pointsCharles)))));

const Player = {
    ...hasRandom,
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};


const deadline = 100


export const main = Reach.App(() => {
    const Collins = Participant('Collins', {
        ...Player,
        wager: UInt,
    });

    const Charles = Participant('Charles', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Collins, Charles], () => {
            interact.informTimeout();
        });
    };

    Collins.only(() => {
        const wager = declassify(interact.wager);
    });
    Collins.publish(wager)
        .pay(wager);
    commit();

    Charles.only(() => {
        interact.acceptWager(wager);
    });
    Charles.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Collins, informTimeout));

    var result = DRAW;
    invariant( balance() == 2 * wager && gameResult(result) );
    while ( result == DRAW ) {
        commit();

        Collins.only(() => {
            const _fingersThrownByCollins = interact.getFingers();
            const [_commitfingersThrownByCollins, _saltfingersThrownByCollins] = makeCommitment(interact, _fingersThrownByCollins);
            const commitfingersThrownByCollins = declassify(_commitfingersThrownByCollins);

            const _fingersGuessedByCollins = interact.getGuess();
            const [_commitfingersGuessedByCollins, _saltfingersGuessedByCollins] = makeCommitment(interact, _fingersGuessedByCollins);
            const commitfingersGuessedByCollins = declassify(_commitfingersGuessedByCollins);
        });
        Collins.publish(commitfingersThrownByCollins, commitfingersGuessedByCollins)
            .timeout(relativeTime(deadline), () => closeTo(Charles, informTimeout));
        commit();
    
        unknowable(Charles, Collins(_fingersThrownByCollins, _saltfingersThrownByCollins, _fingersGuessedByCollins, _saltfingersGuessedByCollins));

        Charles.only(() => {
            const _fingersThrownByCharles = interact.getFingers();
            const fingersThrownByCharles = declassify(_fingersThrownByCharles);
    
            const _fingersGuessedByCharles = interact.getGuess();
            const fingersGuessedByCharles = declassify(_fingersGuessedByCharles);
        });
        Charles.publish(fingersThrownByCharles, fingersGuessedByCharles)
            .timeout(relativeTime(deadline), () => closeTo(Collins, informTimeout));
        commit();

        Collins.only(() => {
            const saltfingersThrownByCollins = declassify(_saltfingersThrownByCollins);
            const fingersThrownByCollins = declassify(_fingersThrownByCollins);

            const saltfingersGuessedByCollins = declassify(_saltfingersGuessedByCollins);
            const fingersGuessedByCollins = declassify(_fingersGuessedByCollins);
        });
        Collins.publish(saltfingersThrownByCollins, fingersThrownByCollins, saltfingersGuessedByCollins, fingersGuessedByCollins)
            .timeout(relativeTime(deadline), () => closeTo(Charles, informTimeout));
        checkCommitment(commitfingersThrownByCollins, saltfingersThrownByCollins, fingersThrownByCollins);
        checkCommitment(commitfingersGuessedByCollins, saltfingersGuessedByCollins, fingersGuessedByCollins);

        result = winnerOfAnyRound(fingersThrownByCollins, fingersGuessedByCollins, fingersThrownByCharles, fingersGuessedByCharles);
        continue;
    };

    assert(result == COLLINS_WINS_GAME || result == CHARLES_WINS_GAME || result == DRAW);
    if (result == DRAW) {
        transfer(1 * wager).to(Collins);
        transfer(1 * wager).to(Charles);
    } else if (result == COLLINS_WINS_GAME) {
        transfer(2 * wager).to(Collins);
    } else {
        transfer(2 * wager).to(Charles);
    }
    commit();

    each([Collins, Charles], () => {
        interact.seeOutcome(result);
    });
});
