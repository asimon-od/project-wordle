import React from "react";
import {checkGuess} from "../../game-helpers";
/**
 * @param {{ guess: string | undefined, answer: string }} props
 */
function Guess({ guess, answer }) {
    const parsedGuess = checkGuess(guess, answer)
    if (!parsedGuess) {
        return (
            <p className="guess">
                <span className={"cell"} />
                <span className={"cell"} />
                <span className={"cell"} />
                <span className={"cell"} />
                <span className={"cell"} />
            </p>
        );
    }
    return (
        <p className="guess">
            {[...parsedGuess].map((parsedLetter, index) => (
                <span key={index} className={`cell ${parsedLetter.status}`}>
                    {parsedLetter.letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
