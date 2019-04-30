const util = require('../../module')
const range = util.arr.range

 
 const myreduce = (arr, callback, initialValue) => {
     let accumulator = initialValue, i = 0;
     if (accumulator === undefined) {
         accumulator = arr[0];
         i++;
     }
     for ( i; i<arr.length; i++) {
         accumulator = callback(accumulator, arr[i], i, arr)
     }
     return accumulator
 }
 
 
 const CallBackMultiple  = (acc, cur) => {
    return acc * cur; // 화살표 함수는 리턴이 필는데 return 을 쓰지 않으면 undefined 가 리턴됨
 }
 
 const CallBackSumOfString = (acc, cur) => {
     return acc + " " + cur
 }

 const CallBackFindMax = (prev, cur) => {
    return prev < cur ? cur : prev;
 }

 let testNumArr = range(1, 6)
 let testStringArr = ["You", "are", "growing", "everyday", "so", "Don't", "Worry", "about", "your", "future.", "Just", "keep", "going"]
 myreduce(testNumArr, CallBackMultiple, 10);
 myreduce(testStringArr, CallBackSumOfString);
 myreduce(testNumArr, CallBackFindMax)

 