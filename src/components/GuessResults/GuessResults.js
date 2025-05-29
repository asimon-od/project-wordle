import React from "react";
import Guess from "../Guess";

/**
 * @param {{guesses: string[]}} props
 */
function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map((guess, index) => (
                <Guess key={index} guess={guess}></Guess>
            ))}
        </div>
    );
}

export default GuessResults;
