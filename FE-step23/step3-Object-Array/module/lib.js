const data = require("./data")

// Returns if a value is an object
function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

function makekNumArrFromObj (obj) {
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

makekNumArrFromObj(data.d1)