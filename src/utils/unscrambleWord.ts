type WordResult = { word: string; scrambled: string } | undefined;

const fetchNewWord = async (): Promise<WordResult> => {
  try {
    const response = await fetch(
      "https://random-word-api.vercel.app/api?words=1"
    );
    const data = await response.json();
    const word = data[0];
    console.log(word);
    const scrambled = shuffleWord(word);
    return { word, scrambled };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const shuffleWord = (word: string): string => {
  let shuffled = word;
  while (shuffled === word) {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    shuffled = letters.join("");
  }
  return shuffled;
};

export default fetchNewWord;
