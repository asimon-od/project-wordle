import React from "react";
/**
 * @param {{ guess: string }} props
 */
function Guess({ guess }) {
    return (
        <p className="guess">
            {[...guess].map((letter, index) => (
                <span key={index} className="cell">
                    {letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
