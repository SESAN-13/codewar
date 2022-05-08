//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function arrRev(arr){
   
    console.log(arr.reverse())
}
arrRev(['boy','girl','man'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function takesTwo(a,b){
    let d=a.reduce((acc,c)=>acc+ c*c, 0) > b.reduce((acc,c)=>acc+ c*c*c,0)
    console.log(d)


}
takesTwo([2,2,2],[3,3,3])
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
function newArr(arr){
    let a = arr.filter((e,i)=> e%i===0)
    console.log(a)


}
newArr([22, -6, 32, 82, 9, 25])
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function nArr(arr){
    return arr.reduce((acc,c)=>acc + Number(c),0)

}
console.log(nArr(['10',5,10,'2']))