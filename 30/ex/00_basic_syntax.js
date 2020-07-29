// define variable
var x = 10;
var result = x + 3;

var javascript = 10; // 변수 javascript와 JavaScript는 서로 다른 두 개의 변수로 인식됨.
var JavaScript = 20; // 변수의 선언은 var 키워드로만 할 수 있으면 Var는 동작하지 않음.

// literal
12            // 숫자 리터럴
"JavaScript"  // 문자열 리터럴
'안녕하세요'  // 문자열 리터럴
true          // 불리언 리터럴

// identifier
var firstVar = 10;           // Camel Case 방식
function myFirstFunc() {
    var firstLocalVar = 20; 
}

/*
x = x + y;
여러 줄의 주석문 :
이 부분 또한 실행되지 않을 것입니다.
*/

// show popup (alert)
function alertDialogBox() {
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

// write text
document.write(4 * 5);

// with F12 in console output
console.log('yes');