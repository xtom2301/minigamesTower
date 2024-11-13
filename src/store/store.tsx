import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const scoreAtom = atom(0);
const highscoreAtom = atomWithStorage("highscore", 0);

export const useScore = () => {
  const [score, setScore] = useAtom(scoreAtom);
  const [highscore, setHighscore] = useAtom(highscoreAtom);

  if (score > highscore) {
    setHighscore(score);
  }

  return { score, setScore, highscore };
};
