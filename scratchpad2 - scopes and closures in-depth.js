/*
var name = "Zheng"
if (name === "Zheng") {
  var department = "Engineering"
}

console.log(name)
console.log(department)// {} is not creating a new scope

// !!! javascript is function scoped !!!

function allocateDepartment() {
  if (name === "Zheng") {
    var department = "Engineering"
  }
}

allocateDepartment()
*/
// IIFE: immediately invoked function expression
(function(){
  var a = 1;
  console.log(a)
})();

x = 10
console.log(x) // works, write operation will create the var if not declared at first
              // also x will be created in global scope even if it's in a function.

// console.log(y) //won't work, read operation will not work if not declared

console.log(window.x) //every global is a property of the window object

//////////////////// Hoisting ////////////////////
console.log(a)
var a = 10
// The above code will print out 'undefined', because the compile has
// created a in global scope with value undefined, before the first line 
// is interpreted
//////////////////// Hoisting ////////////////////
// Hoisting: All the declarations are lifted up to the top, not the value assignment
// This is achieved by the compilation phase.


myFn()
function myFn() {
  console.log("test")
}
// the above code works fine because myFn is already in the global scope during compilation phase

// a function declaration results in a function object being created in the compilation step itself.

function fnA(){
  fnB()
}
function fnB() {
  fnA()
}

/////// Using Strict Mode
(function() {
  "use strict"
  var myName = ""
  //myname = "Zheng" // with strict mode, you cannot write to undeclared variable
})()





//////////////////////////// Closures ////////////////////////////
var a = 10;
function outer() {
  var b = 20;
  var inner = function() {
    console.log(a);
    console.log(b);
  }
  return inner;
}
var innerFn = outer();
innerFn() // innerFn knows the scope chain when the anonymous function was created

// closure is a function that remembers its scope during creation even when it's called in a different scope.

///closures in callbacks
var a = 10
var fn = function() {
  console.log(a);
}
setTimeout(fn, 1000)
console.log("Done")


/// The Module Pattern
function createPerson() {
  var firstName = "Zheng"
  var lastName = "Gong"
  var returnObj = {
    "getFirstName" : function () {return firstName},
    "getLastName" : function () {return lastName},
    "setFirstName" : function (name) {firstName = name},
    "setLastName" : function (name) {return lastName = name}
  }
  return returnObj
}
var person = createPerson()
console.log(person.getFirstName()) // this will work thanks to closure
console.log(person.firstName) // firstName is hidden in the function now.

person.setFirstName("ZhengUpdated");
console.log(person.getFirstName()) 

// var firstName and lastName are only created when creatPerson() is called
// and the function remembers them (remembers the scope, not the value at that time since the value may change)


var i;
for (i = 0; i < 10; i++) {
  setTimeout(function(){console.log(i), 1000})
} // the above will print ten 10s

for(i = 0; i < 10; i++) {
  (function(currentValueOfI){
    setTimeout(function(){console.log(currentValueOfI)}, 1000)
  })(i)
}// the above uses IIFE to create 10 differnt scopes that holds 10 differnt values of i
// and the function in setTimeout can remember them accordingly thanks to closure

