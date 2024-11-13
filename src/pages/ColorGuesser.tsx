import { BackButton, Score, StartGame } from "../components";
import { useScore } from "../store/store";
import { useState } from "react";
import { generateColor } from "../utils";

const ColorGuesser = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [gameState, setGameState] = useState(false);
  const [lost, setLost] = useState(false);
  const { setScore } = useScore();

  const generateColors = () => {
    const actualColor = generateColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, generateColor(), generateColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  const startGame = () => {
    generateColors();
    setLost(false);
    setGameState(true);
    setScore(0);
  };

  const handleAnswer = (answer: string) => {
    if (answer === color) {
      setScore((prev) => prev + 1);
      generateColors();
    } else {
      setGameState(false);
      setLost(true);
    }
  };

  if (!gameState)
    return (
      <div>
        <BackButton />
        <StartGame startGame={startGame} lost={lost} />
      </div>
    );

  return (
    <div>
      <BackButton />
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[600px]">
        <Score />
        <div
          className="w-full h-96 rounded-2xl"
          style={{ backgroundColor: color }}
        ></div>
        <div className="flex justify-center space-x-4 mt-10">
          {answers.map((answer) => (
            <button
              className="bg-gray-600 text-white p-4 rounded-md hover:scale-105"
              onClick={() => handleAnswer(answer)}
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorGuesser;
