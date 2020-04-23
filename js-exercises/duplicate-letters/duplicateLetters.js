const isEmptyString = (argument) => {
  if (typeof argument !== 'string') {
    return true;
  }

  if (argument.trim().length < 1) {
    return true;
  }

  return false;
};

const letterRegex = /^[A-Za-z]+$/;

const isLetter = (letter) => letterRegex.test(letter);

// TODO: This program is time consuming, need to make it more efficient
function duplicateLetters(argument) {
  if (isEmptyString(argument)) {
    return false;
  }

  const letters = [...argument];
  const uniqueLetters = [...new Set(letters)];

  const mostDuplicateLetter = { count: 0, letter: null };

  for (const letter of uniqueLetters) {
    if (!isLetter(letter)) {
      mostDuplicateLetter.count = 0;
      mostDuplicateLetter.letter = null;
      break;
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
