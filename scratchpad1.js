function sayHello(name, age) {
  return name;
}
console.log(typeof sayHello)
var returnValue = sayHello('test')
console.log(returnValue)

// function expression
var f = function foo() {
  console.log("Hello");
}
f()

// anonymous function expression
var g = function() {
  console.log("Hello");
}
g()

var myObj = {
  "testProp" : true
}
myObj.myMethod = function() {
  console.log("Function in object")
}

myObj.myMethod()


var person = {
  "firstName":"Zheng",
  "lastName" : "Gong",
  "getFullName" : function() {
    return this.firstName + " " + this.lastName
  },
  "address" : {
    "street":"123 street",
    "city":"JS",
    "state" : "CA"
  },
  "isFromState" : function(state) {
    return this.address.state === state
  }
}

var fullName = person.getFullName()
console.log(fullName)
console.log(person.isFromState("CA"))

// function arguments
var add = function(a, b) { // arguments is not an array, it's an object!!!
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(add(10,30,2,3,4,5))


var myArray = [1,2,3,4,5]
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)

myArray.shift()
console.log(myArray)
myArray.unshift(0)
console.log(myArray)

myArray.forEach(function(item, index, array){
  console.log("For an element: " + item + ' at index: ' + index + ' of array: ' + array)
})





