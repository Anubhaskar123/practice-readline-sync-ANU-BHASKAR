const input = require('readline-sync');
const name = input.question('What is your name? ');
console.log("Hello, " + name + "!");

//question1
const input = require('readline-sync');
let age = input.question("Please enter your age: "); //The user enters 25.
console.log(typeof age);

//question2
const input = require('readline-sync');
let rain= input.question("Is it raining outside? (true/false): "); 
if (rain.toLowerCase() === 'true') {
    console.log("Don't forget to take an umbrella!");
} else if (rain.toLowerCase() === 'false') {
    console.log("Enjoy the sunny day!");
}

//question3
const input = require('readline-sync');
let num1 = parseFloat(input.question("Enter the first number: "));  
let num2 = parseFloat(input.question("Enter the second number: "));
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

//question4
const input = require('readline-sync');
let number1 = parseFloat(input.question("Enter the first number: "));  
let number2 = parseFloat(input.question("Enter the second number: "));
let product = number1 * number2;
console.log("The product of " + number1 + " and " + number2  + " is: " + product);

//question5
const input = require('readline-sync');
let name1 = input.question("What is your name? ");
let city = input.question("Which city do you live in? ");
console.log("Hello, " + name1 + "! You live in " + city + ".");


