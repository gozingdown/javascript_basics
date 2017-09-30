// javascript has no classes

//function
function createEmployeeObject(firstName, lastName) {
  var newObject = {}
  newObject.firstName = firstName
  newObject.lastName = lastName
  return newObject
}

// constructor, by convention named the constructor with capital letter
function Employee1(firstName, lastName) {
  //var this = {}
  this.firstName = firstName
  this.lastName = lastName
  //return this
}
var emp = new Employee1("Zheng", "Gong")

console.log(emp)


function foo() {
  console.log(this);
}
foo() //calling standalone functions directly, `this` references the global object `window'

var obj = {"prop":"This is the object itself"}
obj.foo = function() {
  console.log(this)
}
obj.foo()// calling functions as property of an object reference, `this` references the object reference

var fooObj = new foo()// calling standalone functions using `new` keyword, `this` references the newly created object


///call function
function bar(){
  console.log("bar")
  console.log(this)
}
bar.call({"override":"ha"}) // call method takes an obj and binds with `this` of the function





//////////////////////////// Prototypes ////////////////////////////
function func() {
   console.log("Hello")
}
console.log(typeof func)
// javascript engine creates a function object and also creates a Prototype object
func.prototype.test = "This is the prototype object of func"
console.log(func.prototype)

var myObj = new func()
console.log(myObj.__proto__) // this is the func.prototype object
console.log(myObj.test) // javascript engine looks up the property in the __proto__ if it's not 
                        // found in myObj object.
func.prototype.test = "updated test value"
console.log(myObj.test)


// use prototype in class
function Zheng() {
  this.firstName = "Zheng"
  this.lastName = "Gong"
}
Zheng.prototype.greet = function(){console.log("Hello")}
var zheng = new Zheng()
zheng.greet()

console.log(Zheng.prototype.constructor)

var b = new Zheng.prototype.constructor() // recommended
var c = new zheng.__proto__.constructor() // not recommended





/////////// Object function
console.log(Object)
console.log(typeof Object)

// var obj = {}
var obj = new Object() // same as above line
console.log(obj)
console.log(obj.__proto__.constructor)
// To prove that {} and new Object() are the same
var obj2 = {}
console.log(obj2)
console.log(obj2.__proto__.constructor)
console.log(obj2.__proto__ === obj.__proto__)



// when you use `{}`, Object function is automatically used


// prototype object is created via Object's prototype object
console.log(Object.prototype)
console.log(Object.prototype.__proto__) // prototype of a Object's prototype is null


// Inheritance
function Employee(name) {
  this.name = name
}
Employee.prototype.getName = function() {return this.name}
var employee = new Employee("Zheng")
console.log(employee.getName())
function Manager(name, dept) {
  this.name = name
  this.dept = dept
}
Manager.prototype.getDept = function() {return this.dept}
Manager.prototype.__proto__ = Employee.prototype
var mgr = new Manager("Zheng2", "Engineering")
console.log(mgr.getName())
console.log(mgr.getDept())



