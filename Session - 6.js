//? Day 6: Sorting Algorithms
//* Session Focus: Introduction to sorting algorithms: bubble sort, selection sort, and insertion sort.
//? Session Practice Questions:
const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 50))//.sort((a,b)=>a-b)
//! Implement bubble sort on an array of integers.
function bubbleSort(arr) {
    console.log(...arr);
    let count = 0;
    for (let itr in arr) {
        let isSwapped = false;
        for (let ind = 1; ind < arr.length - itr; ind++) { //O (n**2)
            count++
            if (arr[ind - 1] > arr[ind]) {
                isSwapped = true
                let temp = arr[ind];
                arr[ind] = arr[ind - 1];
                arr[ind - 1] = temp;
            }
        }
        console.log(...arr)
        if (isSwapped == false) {
            console.log("Sorted")
            break;
        }
    }
    console.log(count)
}

// bubbleSort(arr)
//! Sort an array using selection sort.
function selectionSort(arr) {
    console.log(...arr)

    for (let ind = 0; ind < arr.length; ind++) {  // O(n**2)
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[minInd] > arr[ind1]) {
                minInd = ind1
            }
        }
        if (ind != minInd) {
            arr[ind] = arr[ind] + arr[minInd];
            arr[minInd] = arr[ind] - arr[minInd];
            arr[ind] = arr[ind] - arr[minInd];
        }
        console.log(...arr)
    }
}
// selectionSort(arr)
//! Implement insertion sort on an array of integers.
function insertionSort(arr) {
    console.log("Insertion Sort");
    console.log(...arr);
    for (let ind = 1; ind < arr.length; ind++) {
        let temp = arr[ind];
        let ind1 = ind - 1;

        while (ind1 >= 0 && arr[ind1] > temp) {
            arr[ind1 + 1] = arr[ind1];
            ind1--;
        }

        arr[ind1 + 1] = temp;
        console.log(...arr)
    }
}
// insertionSort([4, 6, 3, 7, 2, 8, 1, 5])
//! Sort an array of integers in descending order.
function insertionSortDesc(arr) {
    console.log("Insertion Sort");
    console.log(...arr);
    for (let ind = 1; ind < arr.length; ind++) {
        let temp = arr[ind];
        let ind1 = ind - 1;

        while (ind1 >= 0 && arr[ind1] < temp) {
            arr[ind1 + 1] = arr[ind1];
            ind1--;
        }

        arr[ind1 + 1] = temp;
    }
    console.log(...arr)
}
// insertionSortDesc([4, 6, 3, 7, 2, 8, 1, 5])
function selectionSortDesc(arr) {
    console.log(...arr)

    for (let ind = 0; ind < arr.length; ind++) {  // O(n**2)
        let maxInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[maxInd] < arr[ind1]) {
                maxInd = ind1
            }
        }
        if (ind != maxInd) {
            arr[ind] = arr[ind] + arr[maxInd];
            arr[maxInd] = arr[ind] - arr[maxInd];
            arr[ind] = arr[ind] - arr[maxInd];
        }
    }
    console.log(...arr)
}
// selectionSortDesc(arr)
function bubbleSortDesc(arr) {
    console.log(...arr);
    let count = 0;
    for (let itr in arr) {
        let isSwapped = false;
        for (let ind = 1; ind < arr.length - itr; ind++) { //O (n**2)
            count++
            if (arr[ind - 1] < arr[ind]) {
                isSwapped = true
                let temp = arr[ind];
                arr[ind] = arr[ind - 1];
                arr[ind - 1] = temp;
            }
        }
        console.log(...arr)
        if (isSwapped == false) {
            console.log("Sorted")
            break;
        }
    }
    console.log(...arr)
    console.log(count)
}

// bubbleSortDesc(arr)
//! Find the median of a sorted array.
function median(arr) {
    if (arr.length % 2 == 0) {
        return arr[arr.length / 2] + arr[(arr.length / 2) - 1] / 2
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
}
// console.log(median(arr))
//! Sort an array of 0s, 1s, and 2s(Dutch National Flag problem).
function sortZeroOneAndTwo(arr) {
    // console.log(...arr)

    let left = 0
    let mid = 0;
    let right = arr.length - 1;
    while (mid <= right) {
        if (arr[mid] == 1) {
            mid++;
        } else if (arr[mid] == 0) {
            arr[mid] = arr[mid] ^ arr[left]
            arr[left] = arr[mid] ^ arr[left]
            arr[mid] = arr[mid] ^ arr[left]
            left++;
            mid++;
        }
        else {
            [arr[right], arr[mid]] = [arr[mid], arr[right]]
            right--;
        }
    }
    console.log(...arr)
}
sortZeroOneAndTwo(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 3))
)
//! Sort an array of strings by their lengths.
function stringLenSort(arr) {

    for (let ind = 0; ind < arr.length; ind++) {  // O(n**2)
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[minInd].length > arr[ind1].length) {
                minInd = ind1
            }
        }
        if (ind != minInd) {
            [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]]
            // arr[ind] = arr[ind] + arr[maxInd];
            // arr[maxInd] = arr[ind] - arr[maxInd];
            // arr[ind] = arr[ind] - arr[maxInd];
        }
    }
    return arr;
}
console.log(

    stringLenSort(["apple", "bat", "dog", "elephant"])
)
// // todo Post - Session Practice Questions:
// // todo Sort an array using merge sort.
// // todo Implement quicksort on an array of integers.
// // todo Sort a nearly sorted array(where each element is at most k places away from its target position).
// // todo Perform a bucket sort on an array of decimals.
// // todo Sort an array of integers by frequency of elements.
// // todo Sort an array of strings lexicographically.
// // todo Sort an array using heap sort.
// // todo Sort a matrix row-wise and column - wise.
// // todo Find the kth smallest element in an array.
// // todo Sort an array containing negative and positive numbers, with negatives coming first.
