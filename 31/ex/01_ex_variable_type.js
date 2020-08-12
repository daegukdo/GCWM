// define variable with initialization
var num = 10;          // define num variable with init. value
num = [10, 20, 30]     // 배열 대입
var num;               // 이 재선언문은 무시됨

// show popup (alert)
alert(num);

//////////////////////////////////////////////////////////////////////////

// define number type variable
var firstNum = 10;     // 소수점을 사용하지 않은 표현
var secondNum = 10.00; // 소수점을 사용한 표현
var thirdNum = 10e6;   // 10000000
var fourthNum = 10e-6; // 0.00001

// show popup (alert)
alert(firstNum);
alert(secondNum);
alert(thirdNum);
alert(fourthNum);

//////////////////////////////////////////////////////////////////////////

// define number type variable
var firstStr = "이것도 문자열입니다.";      // 큰따옴표를 사용한 문자열
var secondStr = '이것도 문자열입니다.';     // 작은따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야."  // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthStr = '나의 이름은 "홍길동"이야.' // 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

// show popup (alert)
alert(firstStr);
alert(secondStr);
alert(thirdStr);
alert(fourthStr);

//////////////////////////////////////////////////////////////////////////

// variable type
// check this code in console output
typeof 10;        // number 타입
typeof "문자열";  // string 타입
typeof true;      // boolean 타입
typeof undefined; // undefined 타입
typeof null;      // object 타입

//////////////////////////////////////////////////////////////////////////

// null and undefined
// check this code in console output
var num;          // 초기화하지 않았으므로 undefined 값을 반환함.
var str = null;   // object 타입의 null 값
typeof secondNum; // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.

null ==  undefined; // true
null === undefined; // false

//////////////////////////////////////////////////////////////////////////

// implicit type conversion
// check this code in console output
10 + "문자열"; // 문자열 연결을 위해 숫자 10이 문자열로 변환됨.
"3" * "5";     // 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨.
1 - "문자열";  // NaN

//////////////////////////////////////////////////////////////////////////

// explicit type conversion
// check this code in console output
Number("10"); // 숫자 10
String(true); // 문자열 "true"
Boolean(0);   // 불리언 false
Object(3);    // new Number(3)와 동일한 결과로 숫자 3