import { BsMoonStarsFill } from "react-icons/bs";
import { useDarkmode } from "../store/store";
const Header = () => {
  const { darkmode, setDarkmode } = useDarkmode();
  return (
    <div className="flex flex-col gap-4 items-center border-b border-gray-500 pb-8">
      <div className="mt-8 text-center flex justify-center items-center gap-12">
        <h1 className="text-gray-600 md:text-6xl font-bold text-2xl dark:text-white">
          Minigames-Tower
        </h1>
        <BsMoonStarsFill
          onClick={() => setDarkmode(!darkmode)}
          className="cursor-pointer md:text-4xl hover:opacity-80 transition-opacity text-2xl dark:text-white"
        />
      </div>
      <h2 className="text-gray-500 text-xl text-center md:text-2xl dark:text-white">
        Play Games and set new Highscores
      </h2>
    </div>
  );
};

export default Header;
