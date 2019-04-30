const data = require('./data')
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
findSkUser(data.d2)