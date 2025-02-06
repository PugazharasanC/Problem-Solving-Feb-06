
const { onlyAlpha } = require("./Session - 1")

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    //start-here
    //Your code goes here … replace the below line with your code logic

    console.log(
        onlyAlpha(userInput[0]) ? "yes" : "no"
    )

    //end-here
});