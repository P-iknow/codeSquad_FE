// 피보나치 
history = [0,1];
function fibo(n) {
    //if (n < 2) return history[n] 
    if( history[n] !== undefined ) return history[n];
     history[n] = fibo(n-1) + fibo(n-2); 
     return history[n]
}

for (let i=0;i<40;i++){
    console.log(fibo(i))
}
