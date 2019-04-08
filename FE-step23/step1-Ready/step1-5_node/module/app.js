// app.js -> main 
const circle = require('./circle'); // == require('./circle')
console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);
console.log(circle.mainCheck()) // circle 모듈내부에서 require.main === module 표현식을 리턴하는 함수, 값은 false
console.log(require.main === module) // 값은 true


