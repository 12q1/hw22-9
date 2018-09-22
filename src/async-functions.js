module.exports.giveItBackLater = function(value, callback){
  function waiter() {
    callback(value)
  }
  setTimeout(waiter, 100)
}//end of giveItBackLater

module.exports.addSomePromises = function(somePromise){
  let myPromise = new Promise((resolve,reject) =>{
    
  })//end of new promise
}//end of addSomePromises

module.exports.promiseToGiveItBackLater = function(value){
  return new Promise((resolve,reject) =>{
    setTimeout(resolve(value), 100)
  })
}//end of promiseToGiveItBackLater

console.log("Program has run fully")
