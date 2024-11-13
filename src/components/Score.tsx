import { useScore, useUnscrambleHighscore } from "../store/store";

const Score = ({ game }: { game: string }) => {
  const { score, highscore } = useScore();
  const { unscrambleScore, unscrambleHighscore } = useUnscrambleHighscore();

  const displayScore = game === "unscramble" ? unscrambleScore : score;

  return (
    <div className="flex justify-between w-full">
      <h1 className="text-xl text-gray-600 sm:text-2xl mb-4 flex items-center justify-center dark:text-white">
        Score:
        <span className="font-bold text-gray-600 text-3xl sm:text-4xl ml-2 dark:text-white">
          {displayScore}
        </span>
      </h1>
      <h1 className="text-xl text-gray-600 sm:text-2xl mb-4 flex items-center justify-center dark:text-white">
        Highscore:
        <span className="font-bold text-gray-600 text-3xl sm:text-4xl ml-2 dark:text-white">
          {game === "unscramble" ? unscrambleHighscore : highscore}
        </span>
      </h1>
    </div>
  );
};

export default Score;
