// ? Day 1: Problem Statements & Systematic Approaches
// * Session Focus: Interpreting problem statements, breaking down problems systematically.
// ? Session Practice Questions:
// ! Determine if a number is positive or negative.
function transactionType(transaction_amount) {
    if (transaction_amount > 0) {
        return "credit";
    } else if (transaction_amount < 0) {
        return "debit";
    } else {
        return "no transaction";
    }
}

// ! Find the sum of two integers.
function findSum(num1, num2) {
    return num1 + num2;
}
// ! Identify the max, mid and min of three numbers.
const findMin = (num1, num2) => num1 < num2 ? num1 : num2;
const findMax = (num1, num2) => num1 < num2 ? num2 : num1;

function minMaxAndMid(num1, num2, num3) {
    let min = findMin(findMin(num1, num2), num3)
    let max = findMax(findMax(num1, num2), num3)
    let mid = num1 + num2 + num3 - min - max;
    return [max, mid, min];
}

// ! Count the number of digits in a number.

function countDigits(num) {
    if (num < 0)
        num = -num;
    if (num == 0) return 1;
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count
}

// ! Check if a string contains only alphabets.
function onlyAlpha(str) {
    for (let ind = 0; ind < str.length; ind++){
        const char = str[ind];
        if (!(char <= 'z' && char >= 'a' || char <= 'Z' && char >= 'A'))
            return false;
    }
    return true;
}
// ! Calculate the area of a circle with a given radius.
function calculateArea(radius) {
    return (Math.PI * radius * radius).toFixed(2);
}
// console.log(calculateArea(100000000000000000000));
// ! Check if a character is a vowel.
function isVowel(char) {
    // return "aeiouAEIOU".indexOf(char) !== -1;
    return char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U";
}

module.exports = {
    transactionType,
    findSum,
    minMaxAndMid,
    onlyAlpha
}
 // todo Post - Session Practice Questions:
 // todo Calculate the difference between two integers.
 // todo Check if a number is even or odd.
 // todo Calculate the perimeter of a rectangle.
 // todo Find the largest of four numbers.
 // todo Calculate the average of three numbers.
 // todo Count the number of vowels in a string.
 // todo Determine if a character is uppercase.
 // todo Print the reverse of a string.
 // todo Find the square of a number.
