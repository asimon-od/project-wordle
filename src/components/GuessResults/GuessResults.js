import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

/**
 * @param {{guesses: string[], answer: string}} props
 */
function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
                <Guess
                    key={index}
                    guess={guesses[index]}
                    answer={answer}
                ></Guess>
            ))}
        </div>
    );
}

export default GuessResults;
