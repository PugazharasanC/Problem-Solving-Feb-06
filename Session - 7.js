// ? Day 7: Stacks, Queues & Recursion
// * Session Focus: Stack and queue operations, recursive problem - solving techniques.
// ? Session Practice Questions:
// ! Implement a stack using an array.
class Stack {
    constructor(size = +Infinity) {
        this.size = size;
        this.stack = []
    }
    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length === this.size;
    }

    push(val) {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
            return;
        }
        this.stack.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
            return;
        }
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }
}
// const stack = new Stack();
// console.log(typeof stack)
// stack.push(1);
// stack.push(2);
// stack.push(3)
// stack.push(4)
// console.log(stack)

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// try {
//     console.log(stack.pop())
// } catch (err) {
//     console.log(err.message)
// }

// console.log("THis is me")

// ! Check for balanced parentheses in an expression.
function isBalanced(str) {
    const stack = []
    for (const char of str) {
        if (char == "(" || char == "{" || char == "[")
            stack.push(char)
        else if (char == ")" || char == "}" || char == "]") {
            if (stack.length == 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char == ")" && top != "(") ||
                (char == "}" && top != "{") ||
                (char == "]" && top != "[")
            )
                return false;
        }
    }
    return stack.length == 0;
}

function testBalancedParentheses() {
    const testCases = [
        { input: "([]){}", expected: true },
        { input: "([)]", expected: false },
        { input: "((()))", expected: true },
        { input: "[{]}", expected: false },
        { input: "{[}", expected: false },
        { input: "", expected: true }, // An empty string should be considered balanced
        { input: "(((((((((()", expected: false }, // Unbalanced due to too many opening parentheses
        { input: "(((((((())))))))", expected: true } // Properly balanced with excess closing parentheses
    ];

    testCases.forEach((testCase, index) => {
        const result = isBalanced(testCase.input);
        if (result === testCase.expected) {
            console.log(`Test case ${index + 1} passed!`);
        } else {
            console.log(`Test case ${index + 1} failed: expected ${testCase.expected}, got ${result}`);
        }
    });
}

// testBalancedParentheses();
// ! Reverse a string using a stack.
function reverseString(str) {
    const stack = [];
    for (const char of str) {
        stack.push(char);
    }
    let reversedString = "";

    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString;
}
// console.log(reverseString("Your original implementation is correct, but the performance could be improved by using an array to build the reversed string. The approach with a stack is great for interviews and demonstrates a good understanding of data structures, but it's always good to explore built-in methods for efficiency when not constrained by such requirements. Keep up the good work!"))
// ! Implement a queue using two stacks.
function queue() {
    const stack1 = []
    const stack2 = []
    function move(fromStack, toStack) {
        while (fromStack.length > 0) {
            toStack.push(fromStack.pop())
        }
    }

    return {
        enqueue: (val) => {
            stack1.push(val)
        },
        dequeue: () => {
            if (stack1.length == 0 && stack2.length == 0) {
                console.log("Queue is empty")
                return -1;
            }
            if (stack2.length == 0)
                move(stack1, stack2)
            return stack2.pop();
        },
        peek: () => {

            if (stack1.length == 0 && stack2.length == 0) {
                console.log("Queue is empty")
                return -1;
            }
            if (stack2.length == 0)
                move(stack1, stack2)
            return stack2[stack2.length - 1];
        }
    }
}
// ! Find the next greater element for each array element.
function findNextGreaterElement(arr) {
    const stack = [];
    const res = new Array(arr.length).fill(-1);

    for (let ind = 0; ind < arr.length; ind++) {
        while (stack.length > 0 && arr[ind] > arr[stack[stack.length - 1]]) {
            res[stack.pop()] = arr[ind]
        }
        stack.push(ind)
    }
    return res;
}
// console.log(findNextGreaterElement([4, 5, 2, 25]))
// ! Design a browser’s forward and backward navigation (stack - based).
function browserNavigation() {
    const history = [];
    const forward = [];
    return {
        visit: (page) => {
            history.push(page);
            forward.length = 0;
            console.log("Visiting : " + history[history.length - 1])
        },
        back: () => {
            if (history.length == 0) {
                console.log("Can't go backward");
                return;
            }
            forward.push(history.pop())
            console.log("Visiting : " + (history[history.length - 1] ? history[history.length - 1] : "Home Page"))
        },
        forward: () => {
            if (forward.length == 0) {
                console.log("Can't go forward");
                return;
            }
            history.push(forward.pop())
            console.log("Visiting : " + history[history.length - 1])
        },
        completeHistory: () => {
            console.log(history.join(" => "))
        }
    }
}
const myBrowser = browserNavigation();
myBrowser.visit("www.google.co.in");
myBrowser.visit("www.guvi.io")
myBrowser.visit("www.zenclass.in")
myBrowser.back()
myBrowser.forward()
myBrowser.back()
myBrowser.back()
myBrowser.back()
myBrowser.back()
myBrowser.visit("www.zenclass.in")
myBrowser.visit("www.guvi.io")
myBrowser.visit("www.google.co.in")
myBrowser.back()
myBrowser.visit("gmail.co.in")
myBrowser.completeHistory()
// // todo Post - Session Practice Questions:
// // todo Implement a circular queue.
// // todo Sort a stack using recursion.
// // todo Find the maximum element in a stack in constant time.
// // todo Design a data structure supporting min, max, push, and pop in constant time.
// // todo Reverse the first k elements of a queue.
// // todo Implement a priority queue.
// // todo Find the minimum element in a stack.
// // todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
// // todo Design a system that supports efficient insertion and retrieval of most recent elements(deque).
