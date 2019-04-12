const data = require("./data")

// Returns if a value is an object
function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

function findNumInObj (obj) {
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



findNumInObj(data.d1);

function isTypeSk (obj){
    return obj.type === "sk";
}

function hasChildNode(obj){
    return obj.hasOwnProperty("childnode")  
}


function findSkInObjOfArr(arr) {
    if (isTypeSk(arr[0])) {
        return arr[0].name ;
    }
}

findSkInObjOfArr(data.d2);