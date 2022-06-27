// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W
// e o
// l r
// l l
// o d


function transposeTwoStrings(arr){
    let max = Math.max(arr[0].length, arr[1].length);
    let newArr = [];
    for (var i = 0; i < max; i++) {
      newArr.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`);
    }
    return newArr.join('\n');
  
  }
  