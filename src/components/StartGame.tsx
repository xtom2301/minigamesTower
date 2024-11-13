import { useScore } from "../store/store";

const StartGame = ({
  startGame,
  lost,
}: {
  startGame: () => void;
  lost: boolean;
}) => {
  const { score } = useScore();

  return (
    <div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[380px] flex flex-col items-center">
        {lost && (
          <h1 className="mb-10 text-xl sm:text-2xl text-gray-600">
            You lost, your score was:
            <span className="font-bold text-black"> {score}</span>
          </h1>
        )}

        <button
          onClick={startGame}
          className="bg-gray-600 p-4 text-white rounded-md hover:scale-105"
        >
          Start a new Game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
