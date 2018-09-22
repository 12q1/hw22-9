class ShoppingCart {
  constructor() {
    this.cartInventory = []
  }//end of constructor
  getItems() {
    return this.cartInventory
  }//end of getItems
  addItem(itemName, quantity, price){
    let box = {name:"",quantity:0,pricePerUnit:0} //creates a template object
    box.name = itemName;
    box.quantity = quantity;
    box.pricePerUnit = price; //places values obtained from addItem into box
    this.cartInventory.push(box); //pushes the temporary box object into the cartInventory array
    return this.cartInventory

  }//end of addItem
  clear(){
    return this.cartInventory = []
  }//end of clear

  total(){
    let value = this.cartInventory.map(function(x){return x.quantity*x.pricePerUnit}) //creates a new array containing only the total value of each item in cartInventory
    if (value.length <1) return 0 //returns value 0 if cart is empty
    if (value.length>=1) return value.reduce((acc,currVal) => acc + currVal) //if cart is not empty it sums the total value of each item
  }//end of total
}//end of ShoppingCart


module.exports = ShoppingCart
console.log("Program has run fully");
