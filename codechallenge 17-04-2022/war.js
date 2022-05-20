// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.







function getCount(str) {
    var vowelsCount = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "A" || str[i] === "a" || str[i] === "E" || str[i] === "e" || str[i] === "I" || str[i] === "i" || str[i] === "O" || str[i] === "o" || str[i] === "U" || str[i] === "u") {
        vowelsCount++;
      }
    }
    return vowelsCount;
  }