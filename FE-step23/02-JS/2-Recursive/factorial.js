// getArea(name,1,n){
//     let sum = 0;
//     if(name === 'circle') getCircle()
// }

// getCircle(n){
//     let sum = 0;
//     if(n === 1) return getCircle(1)
//     else return sum + getCircle(n-1);  
// }   
l
function getCircle(start, end){
    if (start === end) return Math.PI * end * end;
    else return (Math.PI * start * start) + getCircle(start+1, end);
}

f
getCircle(5)