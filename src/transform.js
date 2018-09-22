module.exports.groupAdultsByAgeRange = function(arrayOfObjects){
  let data = arrayOfObjects;
  let template = {
    '20 and younger': data.filter(person => person.age <21 && person.age>=18),
    '21-30': data.filter(person => person.age >=21 && person.age<31),
    '31-40': data.filter(person => person.age >=31 && person.age<41),
    '41-50': data.filter(person => person.age >=41 && person.age<51),
    '51 and older': data.filter(person => person.age >=51),
  } // creates a template object to store results
  return template
}//end of groupAdultsByAgeRange
console.log("Program has run fully")
