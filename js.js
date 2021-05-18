// variable
let name = "lohith"
console.log(name)

// objects
let person = {name:"lohith",age : 24}
// assighn
person.name1 = "rohith"
// delete person.name
console.log(person)
console.log(person.name,person.age,person.name1)
console.log(person.name)
console.log(person.age)
console.log(person.name1)

// Array
let color = ["red","black"]
// assighn
color[2] = "white"
// color.pop()  it eleiminate last object
// color.push("pink")  it add in last object
// color.shift()  it eleiminate first object
// color.unshift("pink")  it add in last object
// delete color[0] it will delet the 
console.log("colors are: " + color)
console.log(color[0])

// function
function great(){
    console.log("hello world");
}
great()

// function with parameter
function username(frstname,lastname){
    console.log("hello" + frstname + " " + lastname);
}
username(" lohith","kumar")

// ternary operator
let x = 110 
let type = x > 100 ? "gold" : "silver"
console.log(type)
 
// swappin
let a = "red"
let b = "Blue"
c = a
a = b 
b = c
console.log(a)
console.log(b)