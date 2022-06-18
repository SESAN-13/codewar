// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
  let sponge = sentence.split("");
  let meme = sponge
    .map((e, i) => (i % 2 !== 0 ? e.toLowerCase() : e.toUpperCase()))
    .join("");
  return meme;
}
