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

function circle(param) {
    const [r] = checkParam(1, param);
    return Math.PI * r * r 
}

function rect(param) {
    const [w, h] = checkParam(2,param); 
    return w * h;
}

function trepzoid(param) {
    const [t, b, h] = checkParam(3,param);
    return (t+b)/2 * h;
}

function cylinder(param) {
    const [r, h] = checkParam(2, param);
    return this.circle([r]) * h
}

function recurCircle(start, end){
    if(start === end ) {return Math.PI * end * end;}
    return (Math.PI * start * start) + recurCircle(start+1, end);
}

function getArea(figure, ...param){
    let answer;
    if(figure !== "circle" ) {
        answer = this[figure](param);
    }
    else if(figure === "circle") {
        answer = param.length === 1 ? this[figure](param) : this["recurCircle"](...checkParam(2,param))
    }
    this.funcStack.push([figure, answer]) 
    return answer
}

function printExecutionSequence(){
    for (let el of this.funcStack) {
        console.log(`호출 함수: ${el[0]} 결과: ${el[1]}`)
    }
}

module.exports = {
        circle,
        rect,
        trepzoid,
        cylinder,
        recurCircle,
        getArea,
        printExecutionSequence,
        funcStack : []
    }


