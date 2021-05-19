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
console.log("Before Swap")
console.log(a)
console.log(b)
c = a
a = b 
b = c
console.log("After Swap")
console.log(a)
console.log(b)

// 19/5/2021............................................................................................
// if else
let hour = 10
if (hour>=6 && hour<12){
    console.log("Good Morning....")
}
else if (hour>=12 && hour<18){
    console.log("Good Afternoon....")
}
else{
    console.log("Good Evening")
}

// for loop
for(let i=0; i<5; i++){
    console.log("hello lohith")   
}

// while loop
let i=0;
while(i<5){
    console.log("hello lohith")
    i++;
}

// for with object key and value
const person3={name:"Rohith",age:25}
for(let key in person3){
    console.log(key,person3[key])
}

// for with array using values type1
 const color1 = ["blue","brown", "baby pink"]
 for (let index in color1){
     console.log(index,color1[index])
 }

 // for with array using values type2
 const color2 = ["blue","brown", "baby pink"]
 for (let index1 of color2){
     console.log(index1)
 }

//  break
let j = 0;
while (j<=10){
    if(j===5)
    break
    console.log(j);
    j++;
}