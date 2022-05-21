// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
    let vowel= 'aeiouAEIOU'
    let answer= []
    word.split('').forEach((letter,idx)=>{
      if(vowel.includes(letter)){
        answer.push(idx+1)
      }
    })
    return answer
  }