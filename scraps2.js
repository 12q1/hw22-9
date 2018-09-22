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
