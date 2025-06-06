import React from "react";

/**
 * @param {{submitGuess: (guess: string) => void, disabled: boolean}} props
 */
function GuessInput({ submitGuess, disabled }) {
    const [guess, setGuess] = React.useState("");

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                console.log(guess);
                submitGuess(guess);
                setGuess("");
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={disabled}
                id="guess-input"
                type="text"
                value={guess}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
                minLength={5} /* We will learn why this is funky */
                maxLength={5}
                pattern={'[a-zA-Z]{5}'}
            />
        </form>
    );
}

export default GuessInput;
