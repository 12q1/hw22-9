module.exports.giveItBackLater = function(value, callback){
  function waiter() {
    callback(value)
  }
  setTimeout(waiter, 100)
}//end of giveItBackLater

module.exports.addSomePromises = function(somePromise){
  const promise = new Promise((resolve, reject) => {
      test = somePromise
      console.log(test)
      if(test.includes('success')){
        resolve("success")
      }else{
        reject("failure")
      }
  })
  promise.then(value => `${value}`)
         .then(value => `${value}`)
         .catch(value => `${value}${value}${value}`)
}//end of addSomePromises

module.exports.promiseToGiveItBackLater = function(value){
  return new Promise((resolve,reject) =>{
    setTimeout(resolve(value), 100)
  })
}//end of promiseToGiveItBackLater

console.log("Program has run fully")
