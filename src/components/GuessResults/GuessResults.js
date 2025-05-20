import React from "react";

/**
 * @param {{guesses: string[]}} props
 */
function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map((guess, index) => (
                <p className="guess" key={index}>
                    {guess}
                </p>
            ))}
        </div>
    );
}

export default GuessResults;
