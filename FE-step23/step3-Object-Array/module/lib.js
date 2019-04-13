const data = require("./data")

function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

// function findNumProperty (obj) {
//     let res = [];
//     for (let key in obj) {
//         if(isObject(obj[key])) {
//             for( let skey in obj[key]) {
//                 if (isNumber(obj[key][skey])) {
//                     res.push(skey);
//                 }
//             }
//         }
//         if(isNumber(obj[key])) {
//             res.push(key);
//         }
//     }
//     return res;
// }

function findNumProperty(obj){
    const res = [];
    (function closure(obj){
        for (let key in obj) {
            if (isNumber(obj[key])) res.push(key);
            if (isObject(obj[key])) closure(obj[key]);
        }
    })(obj)
    return res;
}



function findSkUser(arr){
    const res = [];
    (function closure(arr) {
        if ( arr.length > 0 ) {
            for ( let key of arr ) {
                if (key.type === "sk") {
                    res.push(key.name);
                }
                closure(key.childnode);
            }
        }
    })(arr)
    return res;
} 

findSkUser(data.d2);
findNumProperty(data.d1);

const multiple  = (acc, cur) => {
   return (acc * cur);
}

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
let test = [1,2,3,4,5];
myreduce(test, multiple, 10);
