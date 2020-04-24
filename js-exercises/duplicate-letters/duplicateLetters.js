const isEmptyString = (argument) => {
  if (typeof argument !== 'string') {
    throw TypeError(`expects string input, and input has ${typeof argument}`);
  }

  return argument.trim().length < 1;
};

const letterRegex = /^[A-Za-z]+$/;

const isLetter = (letter) => letterRegex.test(letter);

function duplicateLetters(argument) {
  if (isEmptyString(argument)) {
    return false;
  }

  const letters = [...argument];
  const uniqueLetters = [...new Set(letters)];

  const mostDuplicateLetter = { count: 0, letter: null };

  for (const letter of uniqueLetters) {
    if (!isLetter(letter)) {
      throw Error(`Expects english characters only, and input has ${letter}`);
    }

    const letterCount = letters.filter(
      (filteredLetter) => filteredLetter === letter
    ).length;

    if (letterCount > mostDuplicateLetter.count) {
      mostDuplicateLetter.count = letterCount;
      mostDuplicateLetter.letter = letter;
    }
  }

  if (mostDuplicateLetter.count < 2) {
    return false;
  }

  return mostDuplicateLetter.count;
}

export { duplicateLetters };
