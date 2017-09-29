var a=true;
console.log(a);
console.log(typeof (typeof a))

var b = 10;
var c = '10';
if (b == c) {
  console.log("equal");
} else {
  console.log("not equal");
}

if (b === c) {
  console.log("equal");
} else {
  console.log("not equal");
}

var d = 0;
if(d) {
  console.log('true');
} else {
  console.log('false')
}
// 0, '', null, undefined are false

var myObj = {};
console.log(typeof myObj);
console.log(myObj);
myObj.prop = "hello";
myObj.prop2 = 123;
console.log(myObj);
console.log(myObj.prop)

// the object literal
myObj = {
  "prop":"hello",
  "prop2":123,
  "1":true,
  2:false,
  "objProp":{"innerProp":"inner property"}
}
console.log(myObj);
console.log(myObj.prop2)
console.log(myObj.prop3)

//bracket notation (comparing to dot notation)
console.log(myObj["prop2"])
console.log(myObj["1"])
console.log(myObj[1])// 1 will be convert to string
//console.log(myObj.1) will throw an exception
console.log(myObj[2])
console.log(myObj["2"])

myObj["2"] = 12345;
console.log(myObj["2"])

var x = {"test":"value"}
var y = {"test":"value"}
console.log(x === y) //compares references

var person = {
  "firstName":"zheng",
  "middleName":null,
  "lastName":"gong",
  'age':25
}
// remove a property:
delete person.age
console.log(person)

// Arrays
var myArray = [1,2,3,4,5];// array is an object
console.log(typeof myArray)
console.log(myArray.length)
myArray[5] = 6
console.log(myArray)
console.log(myArray.length)
console.log(myArray[0])
console.log(myArray["0"]) // index is actually a property of the array object


var greeting = "hello world"
console.log(greeting.length)









