let name1 = window.prompt("Please enter your name below:");
let name2 = window.prompt("Please enter your name below:");
let name3 = window.prompt("Please enter your name below:");

let result1 = name1;
let result2 = name2;
let result3 = name3;

if (result1.length === result2.length) {
  console.log("The longest names are " + name1 + ' and ' + name2);
}

if (result1.length === result3.length) {
  console.log("The longest names are " + name1 + ' and ' + name3);
}

if (result1.length > result2.length && result1.length > result3.length) {
  console.log("The longest name is " + name1);
}


if (result1.length < result2.length) {
    console.log("The longest name is " + name2);
}
  
if (result1.length < result3.length) {
    console.log("The longest name is " + name3);
}

if (result2.length === result1.length) {
    console.log("The longest names are " + name2 + ' and ' + name1);
}
  
if (result2.length === result3.length) {
    console.log("The longest names are " + name2 + ' and ' + name3);
}
  
if (result2.length > result1.length && result2.length > result3.length) {
    console.log("The longest name is " + name2);
}
  
if (result2.length < result1.length) {
    console.log("The longest name is " + name1);
}
  
if (result2.length < result3.length) {
    console.log("The longest name is " + name3);
}

if (result3.length === result2.length) {
    console.log("The longest names are " + name3 + ' and ' + name2);
}
  
if (result3.length === result1.length) {
    console.log("The longest names are " + name3 + ' and ' + name1);
}
  
if (result3.length > result2.length && result3.length > result1.length) {
    console.log(result3 + " is larger than " + name2 + ' and ' + " is larger than " + name1);
}
  
if (result3.length < result2.length) {
    console.log(result3 + " is shorter than " + name2);
}
  
if (result3.length < result1.length) {
    console.log(result3 + " is shorter than " + name1);
}