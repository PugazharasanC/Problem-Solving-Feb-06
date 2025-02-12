//? Day 5: Searching Algorithms
//* Session Focus: Linear search and binary search techniques.
//? Session Practice Questions:
//! Implement a linear search to find an element in an array.
function linearSearch(arr = [], search) {
    for (let ind = 0; ind < arr.length; ind++) { // O(n)
        if (arr[ind] === search) {
            return ind;
        }
    }
    return -1;
}
// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
//! Find the first and last occurrence of a target in an array.
function firstAndLastOccurance(arr = [], element) {
    let first = -1, last = -1;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] == element) {
            if (first == -1) {
                first = ind
            }
            last = ind;
        }
    }
    return { first, last }
}

// console.log(
//     firstAndLastOccurance(
//         Array.from({ length: 20 }, () => Math.floor(Math.random() * 10)),
//         0
//     )
// )
//! Implement a binary search on a sorted array.
function binarySearch(arr = [], element) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == element) {
            return mid;
        }
        else if (arr[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
// console.log(
//     binarySearch(
//         Array.from(
//             { length: 150000 },
//             () => Math.floor(
//                 Math.random() * 1000000
//             )
//         ).sort((a, b) => a - b),
//         Math.floor(Math.random() * 1000000)
//     )
// )
//! Count occurrences of a target using binary search.
function countOccurrences(arr = [], target) {
    function findOccurance(arr, element, isFirst = true) {
        let start = 0;
        let end = arr.length - 1;
        let foundInd = -1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] == element) {
                foundInd = mid;
                if (isFirst)
                    end = mid - 1;
                else
                    start = mid + 1;
            }
            else if (arr[mid] > element) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return foundInd;
    }
    let first = findOccurance(arr, target);
    let last = first == -1 ? -1 : findOccurance(arr, target, false);
    console.log(first, last)
    return first == -1 ? 0 : last - first + 1;
}
// console.log(countOccurrences([1, 2, 2, 2, 2, 3, 3, 5, 5, 6, 6, 6, 7, 7, 8], 4))
//! find the square root of a number using binary search.
function sqrt(num) {
    let start = 0;
    let end = num - 1;
    let mid = 1
    while (start <= end) {
        mid = Math.floor(((start + end) / 2))
        if (mid * mid == num) {
            return mid;
        }
        else if (mid * mid > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
}
// console.log(sqrt(5376345))

//! Find the index where an element should be inserted in a sorted array.
function findInsertionIndex(arr = [], element) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == element) {
            return mid;
        }
        else if (arr[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
//! Find the peak element in a mountain array.
function peakElement(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return arr[start]
}
//! Search for a target in a rotated sorted array.
function searchInRotatedArray(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[start] <= arr[mid]) {
            if (target >= arr[start] && target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > arr[mid] && target <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
// todo Post - Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array.
// todo Find the smallest missing element in a sorted array.
// todo Perform ternary search on a sorted array.
// todo Find the index of a target in an infinite array.
// todo Find the minimum element in a rotated sorted array.
// todo Count the frequency of elements using binary search.
// todo Find the closest element to a target in a sorted array.
// todo Implement an exponential search.
// todo Find the peak index in a bitonic array.
