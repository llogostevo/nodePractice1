// take input from a prompt and store it in the variable input
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');

// use of template literals to output the variable input
console.log(`hello ${name}`);

console.log(`the letters of your name, ${name}, are:`)
// for loop to cycle through the number of letters in the name and output the number and letter
for (let i=0; i<name.length; i++) {
    console.log(`${i+1} : ${name[i]}`)
}