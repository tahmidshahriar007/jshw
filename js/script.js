// button on and off
function bulbOn(){
	document.getElementById('bulb').src = 'images/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'images/off.gif';
}
//operators
var number1 = 5;
var number2 = 10;
var number3 = number1 + number2;
function calculation(){
	document.getElementById('value').innerHTML=number3;	
}
//date
function showDate(){
	document.getElementById('s_d').innerHTML=Date();
}
//text size
function textSize(){
	document.getElementById('t_s').style.fontSize='40px'; 
}
//colorChange
function colorChange(){
	document.getElementById('t_c').style.color="blue";
}
//HideText
function textHide(){
	document.getElementById('t_h').style.display='none';
}
//strings
let carName1 = "Mercedes C200";
let carName2 = "Mercedes C200 Kompressor";
function listString(){
	document.getElementById('l_s').innerHTML=carName1+'<br>'+carName2;
}
//celsius to farenheit using function
function toCelsius(f){
	return (5/9) * (f-32);
}
let x =  toCelsius(77);
document.getElementById("c_f").innerHTML = x;
//stringdoublequote
function quoteString(){
	document.getElementById('d_q').innerHTML = "String with \"Double Quotes\"";
}
//charAt method
function charAtMethod(){
	var text = "HELLO WORLD";
	document.getElementById("c_s").innerHTML = text.charAt(10);
}
//charCodeAt method
function charCodeMethod(){
	let text = "HELLO WORLD";
	document.getElementById("cus_s").innerHTML = text.charCodeAt(10);
}
//at method
const name = "Hoorah";
let letter = name.at(2);
function atMethod(){
	document.getElementById("cus_a").innerHTML = letter;
}
//slice method
let text = "Pineapple, Strawberry, Watermelon";
let part = text.slice(11,21);

function sliceMethod(){
	document.getElementById("s_m").innerHTML = part;
}
//substring method
let str = "Pineapple, Strawberry, Watermelon";

function subStringMethod(){
	document.getElementById("sub_m").innerHTML = str.substring(11,21);
}
//uppercase method
function upperMethod(){
	let text = document.getElementById("up_m").innerHTML;
  	document.getElementById("up_m").innerHTML = text.toUpperCase();
}
//lowercase method
function lowerMethod(){
	let text = document.getElementById("low_m").innerHTML;
  	document.getElementById("low_m").innerHTML = text.toLowerCase();
}
//toFixed Method
function fixedMethod(){
	let x = 9.656;
	document.getElementById("fix_m").innerHTML =
	  x.toFixed(0) + "<br>" +
	  x.toFixed(2) + "<br>" +
	  x.toFixed(4) + "<br>" +
	  x.toFixed(6);
}
//toString Method
function toStringMethod(){
	let x = 123;
	document.getElementById("str_m").innerHTML =
  	  x.toString() + "<br>" +
	  (123).toString() + "<br>" +
	  (100 + 23).toString();
}
//toExponential method
function expoMethod(){
	let x = 9.656;
	document.getElementById("exp_m").innerHTML =
	  x.toExponential() + "<br>" + 
	  x.toExponential(2) + "<br>" + 
	  x.toExponential(4) + "<br>" + 
	  x.toExponential(6);
}
//toPrecision method
function preMethod(){
	let x = 9.656;
	document.getElementById("pre_m").innerHTML = 
	  x.toPrecision() + "<br>" +
	  x.toPrecision(2) + "<br>" +
	  x.toPrecision(4) + "<br>" +
	  x.toPrecision(6);
}
//parseInt method
function parseMethod(){
	document.getElementById("par_m").innerHTML = 
	  parseInt("-23") + "<br>" +
	  parseInt("-25.56") + "<br>" +
	  parseInt("20") + "<br>" +
	  parseInt("20.36") + "<br>" +
	  parseInt("50 30") + "<br>" +  
	  parseInt("10 apples") + "<br>" +  
	  parseInt("apple 10"); 
}
//parseFloat method
function floatMethod(){
	document.getElementById("pfl_m").innerHTML = 
	  parseFloat("-25.56") + "<br>" +
	  parseFloat("20.36") + "<br>" +
	  parseFloat("50 30") + "<br>" +  
	  parseFloat("10 apples") + "<br>" +
	  parseFloat("years 10");
}
//isInteger method
function intNumber(){
	document.getElementById("n_int").innerHTML =
	Number.isInteger(24) + "<br>" + Number.isInteger(23.33);
}
//array
function arrayPrac(){
	const fruits = ["Apple", "Banana", "Orange"];
	document.getElementById("a_m").innerHTML = fruits;
}
//arraylength
function arrayLengthMethod(){
	const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Watermelon"];
	let size = fruits.length;
	document.getElementById("l_m").innerHTML = size;
}
//array at
function arrayAtMethod(){
	const fruits = ["Apple", "Banana", "Orange", "Pineapple"];
	let fruit = fruits.at(3);
	document.getElementById("at_m").innerHTML = fruit;
}
//array pop
function popMethod(){
	const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Watermelon"];
	fruits.pop();
	document.getElementById("pop").innerHTML = fruits;
}
//array push
function pushMethod(){
	const fruits = ["Apple", "Banana", "Orange", "Pineapple"];
	fruits.push("Watermelon");
	document.getElementById("push").innerHTML = fruits;
}
//array shift
function shiftMethod(){
	const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Watermelon"];
	fruits.shift("");
	document.getElementById("shift").innerHTML = fruits;
}
//array unshift
function unshiftMethod(){
	const fruits = ["Banana", "Orange", "Pineapple", "Watermelon"];
	fruits.unshift("Apple");
	document.getElementById("unshift").innerHTML = fruits;
}
//sort&reverse method
function sortMethod(){
	const fruits = ["Lemon", "Apple", "Orange", "Banana"];
	fruits.sort();
	fruits.reverse();
	document.getElementById("sort").innerHTML = fruits;
}