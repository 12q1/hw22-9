class Item {
  constructor(itemName, quantity, price){
    this.name = itemName,
    this.quantity = quantity,
    this.pricePerUnit = price
  }
}
//code works but I can't place a class within a function of another class, need to rethink how to construct the item object

addItem(itemName, quantity, price){
  let item = {
    name: itemName,
    quantity: quantity,
    pricePerUnit: price
  }
  console.log(item)
  this.cartInventory.push(item);
  return this.cartInventory
}//end of addItems

//runs but does not pass items properly into the object

console.log(packager("test",2,50))

class ShoppingCart {
  constructor() {
    this.cartInventory = []
  }
  getItems() {
    return this.cartInventory
  }//end of getItems
  addItem(itemName, quantity, price){
    box = packager(itemName,quantity,price)
    console.log(box)
    this.cartInventory.push(box);
    return this.cartInventory
  }//end of addItems
  packager(itemName, quantity, price){
    itemBox = {
      name: this.itemName,
      quantity: this.quantity,
      pricePerUnit: this.price
    }
    return itemBox
  }
}




function addItem(itemName, quantity, price){
    box = {
      name:"",
      quantity:0,
      price:0,
    }
    box.name = itemName
    box.quantity = quantity
    box.price = price

    this.cartInventory.push();
}//end of addItem

// nope this isn't working

total(){
  return(this.cartInventory.reduce((acc, currVal) => acc + cartInventory[currVal].pricePerUnit))

  //nope

  total(){
    return this.cartInventory.filter(price => return price.pricePerUnit)
                             .
  }//end of total

  //nope

  total(){
    return this.cartInventory.map(price => price = price.quantity*price.pricePerUnit)
                             .reduce((acc, currVal)=> acc + currVal)
  }//end of total

  total(){
    return this.cartInventory.map(price => price.quantity*price.pricePerUnit) //creates a new array which only contains price
                             .reduce((acc, currVal) => acc + currVal)//sums total price
  }//end of total

  //---------------------------------------------------------------

  module.exports.groupAdultsByAgeRange = function(arrayOfObjects){
    let data = this.arrayOfObjects;
    let template = {}// creates a template object to store results
    data.map(person => if(person.age>=51){template.'51 and older'.shift(person)})
        .filter(person => person.age>=51)
        .map(person => if(person.age>40){template.'41-50'.shift(person)})
        .filter(person => person.age>40)
        .map(person => if(person.age>30){template.'31-40'.shift(person)})
        .filter(person => person.age>30)
        .map(person => if(person.age>20){template.'21-30'.shift(person)})
        .filter(person => person.age>20)
        .map(person => template.'20 and younger'.shift(person))
    return template
  }//end of groupAdultsByAgeRange
  console.log("Program has run fully")

  //-----------------------------------------------------------------------

  module.exports.groupAdultsByAgeRange = function(arrayOfObjects){
    let data = arrayOfObjects;
    let template = {
      '20 and younger': data.filter(person => person.age <21),
      '21-30': data.filter(person => person.age >=21 && person.age<31),
      '31-40': data.filter(person => person.age >=31 && person.age<41),
      '41-50':data.filter(person => person.age >=41 && person.age<51),
      '51 and older':data.filter(person => person.age >=51),
    } // creates a template object to store results
      console.log(template)
    return template

  }//end of groupAdultsByAgeRange
  console.log("Program has run fully")

  //not sure what's wrong here the output is exactly as the test requires
  //nevermind

  //------------------------------------------------------------------

  module.exports.giveItBackLater = function(value, callback){
    console.log(value);
    console.log("HI")
    setTimeout(1000)
    return callback();
  }

  //------------------------------------------------------------
  module.exports.giveItBackLater = function(value, callback){
    console.log(value);
    setTimeout(1000)
    callback(value);
  }

  //---------------------------------------------------------------
  module.exports.giveItBackLater = function(value, callback){
    function waiter() {
        callback(value)
    }
    setTimeout(waiter(), 100)
  }
  //triggers done ----------------------------------------------
  module.exports.addSomePromises = function(somePromise){
    return new Promise((resolve,reject) =>{
      console.log(somePromise)
      setTimeout(resolve(somePromise), 10).then(resolve(somePromise)).catch("failure")
    })
  }//end of addSomePromises
  //-------------------------------------------------------------

  module.exports.addSomePromises = function(somePromise){
    return new Promise((resolve,reject) =>{
      console.log(somePromise)
      setTimeout(resolve(somePromise), 100).then(console.log("somePromise"))
    })//end of new promise
  }//end of addSomePromises

//---------------------------------------------------

module.exports.addSomePromises = function(somePromise){
  const promise = new Promise((resolve, reject) => {
     setTimeout(()=>{
       let value = false;
       if(!value){
         resolve();
       } else {
         reject();
       }
     }), 1000)
  })

  promise
      .then()
}//end of addSomePromises

//-----------------------------------------------------------
