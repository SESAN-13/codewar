//Create a constructor with 4 properties and 3 methods
function Pizzafactory(flavor,size,shape,toppings){
    this.flavor=flavor
    this.size=size
    this.shape=shape
    this.toppings=toppings

    this.estimatedPrize=function(){
        console.log(`the estimated prize depends on it ${this.size}`)
    }
    this.nutrient=function(){
        console.log(`the nutrient depends on it ${this.flavor}`)
    }
    this.Expirydate=function(){
        console.log('this doesnt expire')
    }

}
let dominos= new Pizzafactory('onion','10','round','caramel')

let papis = new Pizzafactory('chicken','15','triangle','blah')