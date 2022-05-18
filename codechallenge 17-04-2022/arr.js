//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function tArr(arr){
    let nArr = []
    arr.forEach(e => {
        if(e%2===0){
            nArr.push(e)
        }
    })
    return nArr

}
console.log(tArr([2,3,4,5,8]))

//Create a stopwatch object that has four properties and three methods
let stopwatch = []

stopwatch.color='black'
stopwatch.shape='rectangle'
stopwatch.brand='nike'
stopwatch.weight='22kg'

stopwatch.alarm= function(){
    console.log('wake up')
}
stopwatch.hour= function(){
    console.log('this is top of the hour')
}
//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Streetfighter(height,weight,name,health){
    this.height=height
    this.weight=weight
    this.name=name
    this.health=health

    this.fight=function(){
        console.log('lets fight!')
    }
    this.jump=function(){
        console.log('jump!!!')
    }
    this.vitality=function(){
        console.log('comeover here!!!')
    }

}
let lukang=new Streetfighter(22,34,lukang,100)

let peace=new Streetfighter(20,90,peace,95)

//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data.message)
  document.querySelector('img').src=data.message
})
.catch(err => {
    console.log(`error ${err}`)
});
