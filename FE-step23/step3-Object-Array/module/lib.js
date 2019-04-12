const data = require("./data")
function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

function findNumProperty (obj) {
    let res = [];
    for (let key in obj) {
        if(isObject(obj[key])) {
            for( let skey in obj[key]) {
                if (isNumber(obj[key][skey])) {
                    res.push(skey);
                }
            }
        }
        if(isNumber(obj[key])) {
            res.push(key);
        }
    }
    return res;
}



function findSkUser(arr){
    const res = [];
    (function closure(arr) {
        if ( arr.length > 0 ) {
            for ( key of arr ) {
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