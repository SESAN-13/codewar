// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function takesARRnum(arr){
    let sum=0
    let num=arr.map(e=>sum+=e)
    if(arr===[]){
        return 0

    }else{
        return sum
    }
    

}
takesARRnum([20,30,80,10.5,-1])