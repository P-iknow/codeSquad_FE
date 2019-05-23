### VS code Debugin

### 자바스크립트 변수선언, scope 
[let과 const](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)
- let 과 const 도 호이스팅이 일어남, 다만 block scope{} 단위로 호이스팅이 발생한다
- var 의 경우 functional scope 단위로 호이스팅이 발생한다
[변수선언, 호이스팅, TDZ](https://poiemaweb.com/es6-block-scope)
- 변수언언 단계 `var a  = 1`  
    - 1)변수 선언 (해당 변수 a를 실행 컨텍스트의 variable 객체에 등록 )
    - 2)변수 초기화 (메모리 공간을 확보하기 위한 초기화 이와중에 undefined가 할당된)
    - 3)변수 할당 (실제 값 할당)
- var 의 경우 변수 선언과 초기화가 동시에 이루어짐
- let 의 경우 선수 선언과 초기화가 분리되며, 변수 선언(`let` 위치 에 도달했을 때 초기화가 이루어진다.) 
![var 변수 생명주기](./img/step2-var-life.png)
![let 변수 생명주기](./img/step2-let-life.png)

### 자바스크립트 연산자 우선순위

![연산자 우선순위](./img/step2-operator-priority.png)

```js
// result = (result || 0)
result = result || 0; 
```

### 자바스크립트 비구조화 할당 
- rest Paramater | default Paramater 
- ES5 에서는 이런 케이스에 비구조화 할당 대신 arguments 객체를 활용했다.
```js
function check(...param){
    param // (1,2,3) => [1,2,3]
          //  
}