function isNum(param){
    if(param.length === 0) {
        throw Error("you don't input any argument!!")
    }
    for (let v of param) {
        if(typeof v !== "number") {
            throw Error("plz input Number type")
        }
    }
    return true
}

function checkParamCount(count, param) {
        if(!(count === param.length)){
            throw Error(`input ${count} argument, your argument count is ${param.length}`)
        }
        return true
        
    }   
function checkParam(count, param){
    return isNum(param) && checkParamCount(count, param) && param;
}
function circle(...param) {
    const [r] = checkParam(1, param);
    return Math.PI * r * r 
}

function rect(...param) {
    const [w, h] = checkParam(2,param); 
    return w * h;
}

function trepzoid(...param) {
    const [t, b, h] = checkParam(3,param);
    return (t+b)/2 * h;
}

function cylinder(...param) {
    const [r, h] = checkParam(2, param);
    return this.circle(r) * h
}



module.exports = {
        circle,
        rect,
        trepzoid,
        cylinder,
    }


