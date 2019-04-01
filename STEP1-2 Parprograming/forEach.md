# forEach   

[Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## 정의

- 자바스크립트 배열을 순회하기 위한 배열 내장 메소드

## For 와 ForEach 의 차이점

    
    var array1 = ['a', 'b', 'c'];
    
    // forEach 구문
    array1.forEach(function(element, index, arr) {
      console.log(element);
    });
    
    
    // for 구문
    for (var i=0; i<array1.length; i++){
    	console.log(array1[i]);
    }

- 위에서 알 수 있듯 배열을 좀 더 간단히 순회할 수 있다. (간단히?)
    - 순회하기 위한 인덱스 변수가 별도로 필요 없다
    - 배열의 length 를 별도 고려하지 않아도 된다
    - 필요한 경우 callback function 내부의 인자로 주어지는 index(현재 배열의 인덱스), arr(현재 순회되는 배열) 을 활용할 수 있다.
- forEach 의 경우 순회를 종료할 수 있는 방법이 없다.
    - retrun, break, continue 를 사용할 수 없다.(forEach 대신에 some 메서드를 활용하면 순회를 제어할 수 있다)

    array = [1, 2, 3, 4];
    array.forEach(function (element) {
      console.log(element);
      
      if (element === 2) 
        return;
    		//break
      
    });
    // Output: 1 2 3 4

- 그러나 forEach 문의 경우 for 문에 비해 현저하게 느리다는 단점이 있다. 아래 링크를 참고하자
    - 자바스크립트 성능 평가에 좋은 웹엡이니 참고!!

[JSBEN.CH Benchmarking for JavaScript -](http://jsben.ch/BQhED)