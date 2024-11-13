import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const scoreAtom = atom(0);
const highscoreAtom = atomWithStorage("highscore", 0);
const unscrambleScoreAtom = atom(0);
const unscrambleHighscoreAtom = atomWithStorage("unscrambleHighscore", 0);
const darkmodeAtom = atomWithStorage("darkmode", false);

export const useScore = () => {
  const [score, setScore] = useAtom(scoreAtom);
  const [highscore, setHighscore] = useAtom(highscoreAtom);

  if (score > highscore) {
    setHighscore(score);
  }

  return { score, setScore, highscore };
};

export const useUnscrambleHighscore = () => {
  const [unscrambleScore, setUnscrambleScore] = useAtom(unscrambleScoreAtom);
  const [unscrambleHighscore, setUnscrambleHighscore] = useAtom(
    unscrambleHighscoreAtom
  );

  if (unscrambleScore > unscrambleHighscore) {
    setUnscrambleHighscore(unscrambleScore);
  }

  return { unscrambleScore, setUnscrambleScore, unscrambleHighscore };
};

export const useDarkmode = () => {
  const [darkmode, setDarkmode] = useAtom(darkmodeAtom);

  if (darkmode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return { darkmode, setDarkmode };
};
