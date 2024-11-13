import { BackButton, Score, StartGame } from "../components";
import { useState } from "react";
import { fetchNewWord } from "../utils";
import { useUnscrambleHighscore } from "../store/store";

const Unscramble = () => {
  const [gameState, setGameState] = useState(false);
  const [lost, setLost] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [originalWord, setOriginalWord] = useState("");
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState(false);
  const { setUnscrambleScore } = useUnscrambleHighscore();

  const getNewWord = async () => {
    const result = await fetchNewWord();
    if (result) {
      const { word, scrambled } = result;
      setCurrentWord(scrambled);
      setOriginalWord(word);
    } else {
      alert("Error fetching new word");
    }
  };

  const checkAnswer = () => {
    if (input.toLowerCase() === originalWord.toLowerCase()) {
      setInput("");
      getNewWord();
      setUnscrambleScore((prev) => prev + 1);
      setAttempts(3);
    } else {
      setAttempts(attempts - 1);
      setInput("");
      if (attempts - 1 === 0) {
        setLost(true);
        setGameState(false);
      }
    }
  };

  const startGame = () => {
    getNewWord();
    setLost(false);
    setGameState(true);
    setAttempts(3);
    setUnscrambleScore(0);
  };

  if (!gameState)
    return (
      <div>
        <BackButton />
        <StartGame startGame={startGame} lost={lost} />
      </div>
    );

  if (currentWord)
    return (
      <div>
        <BackButton />
        <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] flex flex-col items-center">
          <Score game="unscramble" />
          <div className="text-2xl text-gray-600 dark:text-white">
            Attempts left: {attempts}
          </div>
          <div className="text-6xl text-gray-600 my-10 dark:text-white">
            {currentWord}
          </div>
          <input
            className="w-3/4 p-4 rounded-md text-gray-600 text-center border-2 border-gray-600 focus:outline-none focus:border-gray-800 "
            placeholder="Enter your answer"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-gray-600 text-white p-4 rounded-md hover:scale-105 transition-all mt-6"
            onClick={() => {
              if (input.trim() !== "") {
                checkAnswer();
                setError(false);
              } else {
                setError(true);
              }
            }}
          >
            Submit
          </button>
          {error && (
            <div className="text-red-500 text-xl mt-8">
              Please enter an answer
            </div>
          )}
        </div>
      </div>
    );
};

export default Unscramble;
