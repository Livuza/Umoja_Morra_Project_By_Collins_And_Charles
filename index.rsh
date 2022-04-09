'reach 0.1';

const Player = {
    getFingers: Fun([], UInt),
    // seeFingers: Fun([UInt], Null), 
    getGuess: Fun([], UInt),
    // seeRoudWinner: Fun([UInt], Null),
    seeResult: Fun([UInt], Null),
};

export const main = Reach.App(() => {
    const Erin = Participant('Erin', {
        ...Player,
    });

    const Lola = Participant('Lola', {
        ...Player,
    });

    init();

    Erin.only(() => {
        const fingersErin = declassify(interact.getFingers());
    });
    Erin.publish(fingersErin);
    commit();

    Lola.only(() => {
        const fingersLola = declassify(interact.getFingers());
    });
    Lola.publish(fingersLola);
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
    commit();

    // each([Erin, Lola], () => {
    //     interact.seeRoudWinner(outcome);
    // });

    each([Erin, Lola], () => {
        interact.seeResult(result);
    });
});