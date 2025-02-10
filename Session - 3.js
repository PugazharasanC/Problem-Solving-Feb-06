// ? Day 3: Strings & String Manipulation
// * Session Focus: Basic string operations, string traversal, and manipulation techniques.
// ? Session Practice Questions:
// ! Reverse a string.
function reverse(str) {
    console.log(str)
    let revStr = "";
    for (let ind = 0; ind < str.length; ind++)
        revStr += str[str.length - ind - 1]

    console.log(revStr, str)
}

function reverseAlphabets(str) {
    let reversed = str.split("");
    console.log(reversed)
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        while (left < right && !reversed[left].match(/[a-zA-Z]/)) {
            left++;
        }
        while (left < right && !reversed[right].match(/[a-zA-Z]/)) {
            right--;
        }
        if (left < right) {
            let temp = reversed[left];
            reversed[left] = reversed[right];
            reversed[right] = temp;
            left++;
            right--;
        }
    }
    console.log(reversed.join(""))
}
// reverseAlphabets("ab! cd?") // dc! ba?
// ! Count vowels and consonants in a string.
function countVowelsAndConsonents(str) {
    // str = str.toLowerCase()
    const obj = {
        vowels: 0,
        consonents: 0
    }
    for (let ind = 0; ind < str.length; ind++) {
        if (str[ind] == 'a' || str[ind] == 'e' || str[ind] == 'i' || str[ind] == 'o' || str[ind] == 'u' || str[ind] == 'A' || str[ind] == 'E' || str[ind] == 'I' || str[ind] == 'O' || str[ind] == 'U') {
            obj.vowels++;
        } else if (str[ind] <= 'z' && str[ind] >= 'a' || str[ind] >= 'A' && str[ind] <= 'Z') {
            // } else if (str[ind].match(/[a-zA-Z]/)) {
            obj.consonents++;
        }
    }
    console.log(obj)
}
// countVowelsAndConsonents("Hello World")
// countVowelsAndConsonents("Hello, World!")  // { vowels: 3, consonents: 7 }
// countVowelsAndConsonents("aeiouAEIOU")  // { vowels: 10, consonents: 0 }
// countVowelsAndConsonents("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ")  // { vowels: 0, consonents: 42 }
// ! Convert a string to lowercase / uppercase.
function toLowerCase(str) {
    // A -> a
    // ASCII => American Standard Code for Information and Interchange
    // console.log('A'.charCodeAt(0))
    // console.log(String.fromCharCode(65))
    // console.log('a'.charCodeAt(0))
    // console.log(97 - 65)
    let lower = ""
    for (let ind = 0; ind < str.length; ind++) {
        if (str[ind].match(/[A-Z]/)) {
            lower += String.fromCharCode(str.charCodeAt(ind) + 32);
        }
        else {
            lower += str[ind];
        }
    }
    return (lower)
}
function toUpperCase(str) {
    // a -> A
    // console.log('A'.charCodeAt(0))
    // console.log('a'.charCodeAt(0))
    // console.log(97 - 65)
    let upper = ""
    for (let ind = 0; ind < str.length; ind++) {
        if (str[ind].match(/[a-z]/)) {
            upper += String.fromCharCode(str.charCodeAt(ind) - 32);
        }
        else {
            upper += str[ind];
        }
    }
    return upper;
}
function toLowerCase(str) {
    const obj = {
        'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
    }
    let lower = "";
    for (let ind = 0; ind < str.length; ind++) {
        if (str[ind] >= 'A' && str[ind] <= 'Z') {
            lower += obj[str[ind]]
        } else {
            lower += str[ind]
        }
    }
    console.log(lower)
}
// console.log(toLowerCase("This String"))
// console.log(toUpperCase("This String"))
// ! Find the longest word in a sentence.
function longestWord(str) {
    const arr = str.split(" ")
    let longest = arr[0]
    for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind].length > longest.length) {
            longest = arr[ind]
        }
    }
    return longest
}
// console.log(longestWord("i am jim from india"))
// ! Check if a string is a palindrome.
function isPalindrome(str) {
    // * madam => madam => equal => palindrome
    // * java => avaj => not equal => not palindrome
    // return str == reverse(str)
    // return str == str.split('').reverse().join("")

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] != str[right]) return false;
        left++;
        right--;
    }
    return true;
}
// checking whether the rearranging makes the strng palindrome or not
// carrace => racecar => racecar => equal => palindrome

function isPalindrome1(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = 1 + (freq[char] || 0)
    }
    let oddCount = 0;
    let evenCount = 0;
    for (let key in freq) {
        if (freq[key] % 2 == 0) evenCount++;
        else oddCount++;
    }
    return oddCount < 2;
}

// console.log(isPalindrome1("carrace"))
// console.log(isPalindrome1("nono"))
// console.log(isPalindrome1("string"))
// console.log(isPalindrome1("moo"))

// ! Remove duplicates from a string.
function removeDuplicates(str) {
    let unique = ""
    for (let ind = 0; ind < str.length; ind++) {
        let alreadyVisited = false;
        for (let i = 0; i < unique.length; i++) {
            if (str[ind] == unique[i]) {
                alreadyVisited = true;
                break;
            }
        }
        if (alreadyVisited == false) {
            unique += str[ind]
        }
    }
    return unique;

}
function removeDuplicates(str) {
    const obj = {}
    for (let char of str) {
        obj[char] = 1 + (obj[char] || 0)
    }
    return Object.keys(obj).join("")
}
// console.log(removeDuplicates("this is an sample input for the remove duplicates function"))
// ! Find all substrings of a given string.
function allSubstrings(str) {
    let arr = ['']
    for (let ind = 0; ind < str.length; ind++){
        let curr = '';
        for (let i = ind; i < str.length; i++){
            curr += str[i]
            arr.push(curr)
        }
    }
    return arr;
}
console.log(allSubstrings("abcdefg").join("\n"))
// todo Post - Session Practice Questions:
// todo Concatenate two strings.
// todo Find the frequency of each character in a string.
// todo Replace spaces in a string with % 20.
// todo Check if a string is an anagram of another.
// todo Count the number of words in a sentence.
// todo Find the first non - repeating character in a string.
// todo Remove all vowels from a string.
// todo Find the shortest word in a sentence.
// todo Count occurrences of a substring within a string.
