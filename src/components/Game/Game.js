import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

/** @type {string[]} */
const defaultGuesses = Array.from({ length: 5 }, () => "     ");

function Game() {
    const [guesses, setGuesses] = React.useState(defaultGuesses);
    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput
                submitGuess={(guess) => {
                    const newGuesses = [...guesses, guess];
                    setGuesses(newGuesses);
                }}
            />
        </>
    );
}

export default Game;
