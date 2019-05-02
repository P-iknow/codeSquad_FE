const calc = require("./figureArea")


function testcircle(){
    let answer = 0
    for(let i=1;i<6;i++){
        answer += calc.circle([i])
    }
    return answer
}
console.log(calc.getArea("circle", 3))   
console.log(calc.getArea("circle", 1, 5))
console.log(calc.getArea("rect", 2, 4)) 
console.log(calc.getArea("trepzoid", 3, 3, 3)) 
console.log(calc.getArea("cylinder", 2, 4))
calc.printExecutionSequence()