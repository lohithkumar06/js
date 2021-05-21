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
console.log("\n")

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
console.log("\n")

// 20/05/2021.................................................................
// string
const message = "This is my first\n message"
// length
console.log(message.length)
// to get specify letter
console.log(message[0])
// true/false includes
console.log(message.includes("my"))
// true/false startswith
console.log(message.startsWith("my"))
console.log(message)
// split
console.log(message.split(" "))
console.log(message.split(""))
// oops
let address = {
    street : "a",
    city : "b",
    zipcode : "c"
}
function showAddress(address){
    for(let key in address){
        console.log(key,":" ,address[key])
    }
}
showAddress(address)

// factory function
let address1 = creatAddress("a","b","c");
console.log(address);
function creatAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    }
}

// constructor function

let address2 = new Address("a","b","c","d")

function Address (street,city,zipcode,code){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.code = code
}
console.log(address2)

// object equality
let address3 = new Addre("a","b","c");
let address4 = new Addre("a","b","c");
let address5 = address3;

function Addre(area,state,code){
    this.area = area;
    this.state = state;
    this.code = code;
}

function areEqual(address3, address4){
    address3.area === address4.area &&
    address3.state === address4.state &&
    address3.code === address4.code;
}
function areSame(address3, address4){
    return address3 === address4;
}

console.log(areEqual(address3, address4));
console.log(areSame(address3, address4));
console.log(areSame(address3, address5));
console.log("\n")


// 21-05-2021........................................................

// blog post object
let post = {
    tittle : "a",
    body : "b",
    author : "c",
    views : 10 ,
    comments : [
        {author : "a",body : "b"},
        {author : "c",body : "d"} ]

};
console.log(post)

// same using constructor type
let post2 = new Post1("a","b","c");
function Post1 (title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [{author : "a",body : "b"},
    {author : "c",body : "d"}];
}
console.log(post2)

// emptying on array
let seq = [1,2,3,4,5,6]
let another = seq
seq = []
console.log(seq)
console.log(another)

// combining & slicing array 
const first = [1,2,3]
const second = [4,5,6]
// type1(combine)
const combined = first.concat(second)
console.log(combined)
// type2(from,to using index)
const sliced = combined.slice(2,4)
console.log(sliced)
// type3
const sliced1 = combined.slice(2)
console.log(sliced1)

// iterating on array
const num01 = [1,2,3]
for (number of num01){
    console.log(number)
}

// sorting Array
const num001 = [4,7,5,9,2,8]
num001.sort();
console.log(num001)

// rest operator
function sum(...args){
    let total = 0;
    return args.reduce((a,b)=> a+b);
}
console.log(sum(1,2,3,4,5,10))