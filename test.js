// ********** 1. Zadatak **********

let count;

const vowelsBeforeNumberCounter = (testSentence) => {
  const vowels = ["a", "e", "i", "o", "u"];
  count = 0;
  const sentence = [...testSentence];

  for (let i = 0; i < sentence.length - 1; i++) {
    const currentChar = sentence[i];
    const nextChar = sentence[i + 1];
    if (vowels.includes(currentChar.toLowerCase())) {
      if (!isNaN(nextChar) && nextChar.trim() !== "") count++;
    } else {
      count = count;
    }
  }

  const numberOfVowelsBeforeNumber = count;

  return console.log(numberOfVowelsBeforeNumber);
};

// test case
vowelsBeforeNumberCounter("Danas1je2lep333dan44i555sunčano66je11");

// ********** 2. Zadatak **********

const numbers = [12, 555, 437, 23, 87, 690, 222];

numbers.sort((a, b) => {
  const lastDigitA = a % 10;
  const lastDigitB = b % 10;

  return lastDigitA - lastDigitB;
});

console.log(numbers);

// ********** 3. Zadatak **********

const drawFigure = (n) => {
  for (let i = 0; i <= n; i++) {
    const start = "*".repeat(n - i);
    const pluses = "+".repeat(i);

    console.log(start + pluses);
  }
};

// test case

drawFigure(5);
