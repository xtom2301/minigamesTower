import { BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 items-center border-y border-gray-500 pb-8">
      <div className="mt-8 text-center flex justify-center items-center gap-12">
        <h1 className="text-gray-700 text-6xl font-bold">Minigames-Tower</h1>
        <BsMoonStarsFill
          onClick={() => console.log("clicked")}
          className="cursor-pointer text-4xl"
        />
      </div>
      <h2 className="text-gray-500 text-2xl">
        Play Games and set new Highscores
      </h2>
    </div>
  );
};

export default Header;
