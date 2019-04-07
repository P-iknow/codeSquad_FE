// halfAdder
function halfAdder(bitA, bitB) {
    var sum = !!(bitA ^ bitB); //Boolean(bitA ^ bitB)
    var carry = bitA && bitB;
    return [sum, carry];
  }

  // fullAdder
function fullAdder(bitA, bitB, carry) {
    var [fSum, fCarry] = halfAdder(bitA, bitB);
    var [sSum, sCarry] = halfAdder(carry, fSum);
    return [sSum, fCarry || sCarry];
}

//byteAdder
function byteAdder(byteA, byteB) {
    let answer = [], carry = 0
    for(let i=0;i < 8; i++){
       [answer[i], carry] = fullAdder(byteA[i], byteB[i], carry);
    }
    return answer.concat(carry).map(el=>Number(el));
}


// testCase1 결과 비교 
byteA = [ 1, 1, 0, 1, 1, 0, 1, 0 ]
byteB = [ 1, 0, 1, 1, 0, 0, 1, 1 ]
// 결과 = [ 0, 0, 0, 1, 0, 1, 0, 0, 1 ]
console.log(byteAdder(byteA, byteB))
console.log([ 0, 0, 0, 1, 0, 1, 0, 0, 1 ])

//testCase2 결과 비교 
byteA  = [ 1, 1, 0, 0, 1, 0, 1, 0 ]
byteB  = [ 1, 1, 0, 1, 1, 0, 0, 1 ]
//결과 = [ 0, 1, 1, 1, 0, 1, 1, 1, 0 ]
console.log(byteAdder(byteA, byteB))
console.log([ 0, 1, 1, 1, 0, 1, 1, 1, 0 ])

//이진 변환기 
function dec2bin (decimal) {
    bin =[]
    while (decimal !== 0) {
      bin.push(decimal % 2);
      decimal = Math.floor(decimal/2);
    }
    return bin;
}  

function twoPow(n) {
    let res = 1;
    for(var i=0; i<n; i++){
            res *= 2;
        }
    return res;
}

// 십진법 변환기
function bin2dec(bin) {
    let dec =0;
    for(let i=0; i<bin.length; i++){
        dec += (bin[i] * twoPow(i))
    }
    return dec;
}

// 입력 = [0, 1, 1, 1]
// 결과  = 14
bin2dec([0, 1, 1, 1]) 

// 입력  = [1,1,1,1,0,1,0,1]
// 결과 = 175
bin2dec([1,1,1,1,0,1,0,1])

// 최종확인
console.log(bin2dec(byteAdder(dec2bin(111), dec2bin(110))))// 221