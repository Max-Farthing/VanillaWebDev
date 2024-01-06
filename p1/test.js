//alert('Hello World');
//use var let or const to declare variables
console.log("Hello World");
let a, b, c;
a = 10;
b = 5;
c = a + b;
console.log(c);
c = 2;
console.log(c);
const d = 12;
console.log(d);
//d = 22 generates error
var e = 100;
console.log(e);
let tr = true;
let fa = false;
/*
	Use const for constants
	Only use let if cant use const(changing value)
	try to limit var
	var vs let
		let = block scope
		var = function scope
*/
let carName = "Volvo"
console.log(carName);
document.getElementById("car").innerHTML = carName;

document.getElementById("jsdiv").innerHTML = "This line was written with JS";

const ball = {color:"orange", shape:"round" }; //object declared
console.log(ball.color);
console.log(ball);

const people = ["MJ", "Lebron", "Steph"]; //array, reference is constant
console.log(people[0]);
people[0] = "Kevin Durant"; //but items inside array are dynamic
console.log(people[0]);
console.log(typeof people[1]); //prints string
console.log(typeof ball); //prints object

function sum(n1, n2) {
	return n1 + n2;
}

console.log(sum(2, 4));

const candle = {
	color: "white",
	smell: "vanilla",
	size: "medium",
	name : function() { //example of a method, like a function belonging to an object
		return this.color + " " + this.smell;
	}
};
console.log(candle.name()); //returns white vanilla
console.log(Date());

// functions used for js events in HTML
function displayDate() { //example using js event on a button to display date
	document.getElementById("date").innerHTML = Date(); 
}

function changeColor() {
	document.getElementById("colorchange").style.color = "red";
	//element.style.color = "red";
}

function changeColor2() {
	document.getElementById("colorchange").style.color = "black";
}

//string methods... strings are immutable
let test = "testtest";
console.log(test.length);
console.log(test.substring(0, 4));
let text = "hello there Bob";
console.log(text.replace("Bob", "John"));
let up = "HELLO WORLD";
console.log(up.toLowerCase());
let down = "       hello world";
console.log(down.trimStart());
//charAt indexOf lastIndexOf search includes startsWith endsWith and more

//js numbers, always 64 bit doubles, floating point arithmetic not always accurate
//typeof NaN - not a Number
//typeof infinity - returns infinity on overflow
let hex = 0xFF;
let max = Number.MAX_SAFE_INTEGER;
let min = Number.MIN_SAFE_INTEGER;

// arrays
const balls = [];
balls[0] = "basketball";
balls[1] = "soccer";
balls[2] = "baseball";
console.log(balls.length);
for(let i = 0; i < balls.length; i++) {
	console.log(balls[i]);
}
balls.sort();
console.log(balls);
const subjects = ["math", "reading", "history"];
console.log(subjects);
subjects.push("science");
console.log(subjects);
let bool = Array.isArray(subjects);
console.log(bool);
console.log(balls.toString());
let pop = balls.pop();
console.log(pop);
//let test = balls.shift() removes the first array index shifting all others down

const nums = [1, 10, 20, 100, 5];
document.getElementById("sort").innerHTML = nums;

function sortNum() {
	nums.sort();
	document.getElementById("sort").innerHTML = nums;
}

function sortAlph() {
	nums.sort(function(a, b){return a - b});
	document.getElementById("sort").innerHTML = nums;
}

//js set
const setNums = new Set();
setNums.add(1);
setNums.add(5);
setNums.add(2);
setNums.add(4);
setNums.add(1); //repeat

for(const x of setNums.values()){ //iterating over iterator values.. some kind of for loop?
	console.log(x);
}

//js maps
const fruits = new Map([
	["apples", 100],
	["oranges", 200],
	["mangoes", 500]
]);

console.log(fruits.get("apples"));//returns 100;
console.log(fruits instanceof Map);

//conversions
Number("3.14");//converts to Number
let q = "5";
let p = + q; //p is a number
String(100 + 23);//returns a string

//bitwise operations are performed on 32 bit numbers... converting the 64 bit doubles into
//32 bit operands

try {
	adddlert("Welcome");
} catch(err) {
	console.log("try catch test");
}

//throw "Error" ... throwing exception example

class Car {
	
	constructor(name, year) {
		this.setName(name);
		this.setYear(year);
	}
	
	setName(name){
		this.name = name;
	}
	
	setYear(year) {
		this.year = year;
	}
	
	getName() {
		return this.name;
	}
	
	getYear() {
		return this.year;
	}
	
}

const myCar = new Car("Honda", 2022);
console.log(myCar.getName());
console.log(myCar.getYear());

const p1 = document.getElementsByTagName("p")[0];
p1.style.color = "tomato";
function change() {
	p1.innerHTML = "changed by mouseover";
}

function validateForm() {
	let x = document.forms["testForm"]["fname"].value;
	if(x == "") {
		alert("Name must be filled out");
		return false;
	}
}

document.write("This was written with document.write()");

function myMove() {
	let id = null;
	const elem = document.getElementById("animate");
	let pos = 0;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame() {
		if(pos == 350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}

function changeColorText(id) {
	id.style.color = "purple";
}

function changeColor3() {
	event.style.color = "orange";
}

function changeColor4() {
	event.style.color = "black";
}

const event = document.getElementById("eventListen");
event.addEventListener("mousedown", changeColor3);
event.addEventListener("mouseup",changeColor4);

const event2 = document.getElementById("eventListen2");
event2.addEventListener("mouseover", changeText);
event2.addEventListener("mouseout", changeTextBack);

function changeText() {
	event2.innerHTML = "changed text";
}

function changeTextBack() {
	event2.innerHTML = "Testing out event listener again";
}

const par = document.createElement("p");
const node = document.createTextNode("created using a text node");
par.appendChild(node); //creating element, creating a text node to append to that element
const divElem = document.getElementById("node");
divElem.appendChild(par); //appending that element to the div

const myCollection = document.getElementsByTagName("h2"); //this returns an arraylist like object
myCollection[0].style.color = "tomato"; //can access like an array

const nodeList = document.querySelectorAll("p");
for(let i = 0; i < nodeList.length; i++) {
	nodeList[i].style.color = "#40ff00";
}

console.log(navigator.geolocation.getCurrentPosition(showPosition));

function showPosition(position) {
	"lat: " + position.coords.latitude + "lon: " + position.coords.longitude;
}

const elements = ["Sports", "Reading", "Test"];
const t = elements.indexOf("Test");
console.log(t);

const i = elements.findIndex((item) => item === "Sports");
console.log(i);

const elements2 = elements.map((item) => item + "added");
console.log(elements);
console.log(elements2);

function transformToObjects(numberArray) {
    return numberArray.map((item) => ({ val: item }));
}

console.log(transformToObjects(elements));

const [firstName, lastName] = ["Max", "Farthing"];
console.log(firstName);

// const password = prompt("Your password");

for(const element of elements) {
	console.log(element);
}

elements[3] = "no";
console.log(elements[3]);