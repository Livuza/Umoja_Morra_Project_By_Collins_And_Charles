'reach 0.1';

const Player = {
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    // seeRoudWinner: Fun([UInt], Null), for best of three
    seeResult: Fun([UInt], Null),
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

    Erin.only(() => {
        const wager = declassify(interact.wager);
        const fingersErin = declassify(interact.getFingers());
    });
    Erin.publish(wager, fingersErin)
        .pay(wager);
    commit();

    Lola.only(() => {
        interact.acceptWager(wager);
        const fingersLola = declassify(interact.getFingers());
    });
    Lola.publish(fingersLola)
        .pay(wager);
    commit();

    Erin.only(() => {
        const guessErin = declassify(interact.getGuess());
    });
    Erin.publish(guessErin);
    commit();

    Lola.only(() => {
        const guessLola = declassify(interact.getGuess());
    });
    Lola.publish(guessLola);

    const playedFingers = (fingersErin + fingersLola);
    const result = guessErin == playedFingers ? 0 :
                   guessLola == playedFingers ? 1 :
                                                2;
    const            [forErin, forLola] =
       result == 0 ? [       2,      0] :
       result == 1 ? [       0,      2] :
                     [       1,      1];
    transfer(forErin * wager).to(Erin);
    transfer(forLola * wager).to(Lola);
    commit();

    // *** This will be used for seeing winner each round ***
    // each([Erin, Lola], () => {
    //     interact.seeRoudWinner(result);
    // });

    each([Erin, Lola], () => {
        interact.seeResult(result);
    });
});
