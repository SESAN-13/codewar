// For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

// An array of numbers representing the judges' scores, called scores
// A number representing the degree of difficulty of the dive, called tariff
// The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.

// https://www.britannica.com/story/how-is-diving-scored

// The answer should be a string, and should always have exactly 2 digits after the decimal point, as this is how diving scores are displayed.

function scoreOfDive(scores, tariff) {
    let sorted = scores.sort((a,b)=>a-b)
     let firstRemove=sorted.splice(0,2)
     let secondRemove= sorted.splice(-2,2)
     let summ= sorted[0]+sorted[1]+sorted[2]
     return (summ * tariff).toFixed(2)
     
     
}
   
function scoreOfDive(scores, tariff) {
    return ([...scores].sort((a,b)=>a-b).slice(2,-2).reduce((s,n)=>s+n,0)*tariff).toFixed(2);
  }