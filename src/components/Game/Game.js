import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

/** @type {string[]} */
const defaultGuesses = [];

function Game() {
    const [guesses, setGuesses] = React.useState(defaultGuesses);
    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput
                submitGuess={(guess) => {
                    const guessesSoFar = length;
                    if (guessesSoFar >= NUM_OF_GUESSES_ALLOWED) {
                        return;
                    }
                    const newGuesses = [...guesses, guess];
                    setGuesses(newGuesses);
                }}
            />
        </>
    );
}

export default Game;
