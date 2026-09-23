const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

/** Spells out small counts ("four"); larger ones stay as digits */
export function countWord(count: number): string {
  return NUMBER_WORDS[count] ?? String(count);
}

/** `countWord` with a capital first letter, e.g. "Four" */
export function capitalisedCountWord(count: number): string {
  const word = countWord(count);

  return word.charAt(0).toUpperCase() + word.slice(1);
}
