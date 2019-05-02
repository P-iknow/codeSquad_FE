const util = require("../utilFunc/module").mkArr

function binarySearch(arr, target) {
    let low = 0, high = arr.length-1, mid, guess
    while(low <= high) {
        mid = Math.floor(low+high/2);
        guess = arr[mid]
        if (target === guess) return mid;
        if (target > guess) {
            low = mid +1;
        } else { //guess > target 
            high = mid -1;
        }
    } 
    return null;
}

const testArr = util.range(1, 100, 2)


function recurBinarySearch(arr, target) {
    let low = 0, high = arr.length-1, mid, guess
    if (low <= high) {
        mid = Math.floor(low+high/2);
        guess = arr[mid]
        if (target === guess) return mid;
        if (target > guess) {
            low = mid +1;
        } else { //guess > target 
            high = mid -1;
        }
        return recurBinarySearch(arr.slice(low, high + 1) ,target)
    } 
    return null
}
console.log(binarySearch(testArr, 30))
console.log(recurBinarySearch(testArr, 30))