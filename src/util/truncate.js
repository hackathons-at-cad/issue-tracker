export const truncate = (text, count) => {
  if (text.length <= count) return text;
  const words = text.split(" ");
  let wordsToReturn = [];
  let wordCount = 0;

  words.forEach((word) => {
    if (wordCount >= count) return wordsToReturn.join(" ") + "...";

    wordCount = wordCount + word.length;
    wordsToReturn.push(word);
  });

  return wordsToReturn.join(" ") + "...";
};
