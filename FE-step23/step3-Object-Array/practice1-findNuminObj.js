const util = require('../../module') 
const tc = util.typeCheck
const data = require('./data')
function findNumProperty(obj){
    const res = [];
    (function loopToFindNum(obj){
        for (let key in obj) {
            if (tc.isNumber(obj[key])) res.push(key);
            if (tc.isObject(obj[key])) loopToFindNum(obj[key]);
        }
    })(obj)
    return res;
}

findNumProperty(data.d1)

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