const digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const generateColor = () => {
  const randomColor = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${randomColor}`;
};

export default generateColor;
