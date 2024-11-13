import { useScore } from "../store/store";

const Score = () => {
  const { score, highscore } = useScore();

  return (
    <div className="flex justify-between">
      <h1 className="text-xl text-gray-600 sm:text-2xl mb-4 flex items-center justify-center ">
        Score:
        <span className="font-bold text-gray-600 text-3xl sm:text-4xl ml-2 ">
          {score}
        </span>
      </h1>
      <h1 className="text-xl text-gray-600 sm:text-2xl mb-4 flex items-center justify-center ">
        Highscore:
        <span className="font-bold text-gray-600 text-3xl sm:text-4xl ml-2 ">
          {highscore}
        </span>
      </h1>
    </div>
  );
};

export default Score;
