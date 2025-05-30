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
  const [ gameStatus, setGameStatus ] = React.useState('active');
  return (
    <>
    {gameStatus == 'win' && <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>}

    {gameStatus == 'lose' && <div className="sad banner">
      <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
    </div>
    }
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled = {gameStatus != 'active'}
        submitGuess={(guess) => {
          
          const newGuesses = [...guesses, guess];
          setGuesses(newGuesses);

          if (guess === answer) {
            setGameStatus('win')
          }
          else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lose")  
          }
          
        }}
      />
    </>
  );
}

export default Game;
