// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

function minValue(values){
    //your code here
    
    let sorted = values.sort()
    let unique= []
    for(let i=0;i<sorted.length;i++){
      if(unique.indexOf(sorted[i])==-1){
        unique.push(sorted[i])
        
      }
  
    }
    
    return Number(unique.join(''))
}