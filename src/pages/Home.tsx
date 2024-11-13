import { Link } from "react-router-dom";
import { Header } from "../components";
import { games } from "../utils";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col gap-10 items-center w-full max-w-3xl">
          {games.map((game) => (
            <Link
              to={game.path}
              key={game.id}
              className="border border-gray-500 p-4 w-full h-32 flex justify-center items-center md:text-4xl text-2xl rounded-full hover:bg-gray-100  dark:hover:bg-gray-700 dark:text-white"
            >
              {game.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
