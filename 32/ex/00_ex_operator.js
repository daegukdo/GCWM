// define variable
var x = 10, y = 4;

// use operator
document.write(x + y + "<br>"); // 14
document.write(x - y + "<br>"); // 6
document.write(x * y + "<br>"); // 40
document.write(x / y + "<br>"); // 2.5
document.write(x % y);          // 2

//////////////////////////////////////////////////////////////////////////

// define variable v2
var x = 10, y = 10, z = 10;

// use operator
x = x - 5;
y -= 5;     // y = y - 5 와 같은 표현임.
z =- 5;     // z = -5 와 같은 표현임.


//////////////////////////////////////////////////////////////////////////

// define variable v3
var x = 10, y = 10;

// use operator
document.write((++x - 3) + "<br>"); // x의 값을 우선 1 증가시킨 후에 3을 뺌.
document.write(x + "<br>");         // 11
document.write((y++ - 3) + "<br>"); // 먼저 y에서 3을 뺀 후에 y의 값을 1 증가시킴.
document.write(y);                  // 11

//////////////////////////////////////////////////////////////////////////

var x = 10;            // 8
var y = x-- + 5 + --x; // 23

//////////////////////////////////////////////////////////////////////////

var x = 3, y = 5;
var a = "abc", b = "bcd";

document.write((x > y) + "<br>");  // y의 값이 x의 값보다 크므로 false
document.write((a <= b) + "<br>"); // 알파벳 순서상 'a'가 'b'보다 먼저 나오므로 'a'가 'b'보다 작음.
document.write(x < a);             // x의 값은 숫자이고 a의 값은 문자열이므로 비교할 수 없음.

//////////////////////////////////////////////////////////////////////////

var x = 3, y = '3', z = 3;

document.write((x == y) + "<br>");  // x와 y의 타입이 서로 다르므로 타입을 서로 같게 한 후 비교를 하므로 true
document.write((x === y) + "<br>"); // x와 y의 타입이 서로 다르므로 false
document.write(x === z);            // x와 z은 값과 타입이 모두 같으므로 true

//////////////////////////////////////////////////////////////////////////

var x = true, y = false;

document.write((x && y) + "<br>"); // false (논리 AND 연산)
document.write((x || y) + "<br>"); // true  (논리 OR  연산)
document.write(!x);                // false (논리 NOT 연산)

//////////////////////////////////////////////////////////////////////////

var x = 15, y = 8, z = 15;

document.write((x << 1) + "<br>"); // 곱하기 2와 같으므로 15 * 2 = 30
document.write((y >> 1) + "<br>"); // 나누기 2와 같으므로 8 / 2 = 4
document.write(~z);                // 1의 보수와 같으므로 -(15+1) = -16

//////////////////////////////////////////////////////////////////////////

var x = 3 + 4;                   // 피연산자가 둘 다 숫자이면 덧셈 연산을 수행함.
var y = "좋은 " + "하루 되세요!" // 피연산자가 둘 다 문자열이면 문자열 결합 연산을 수행함.
var z = 12 + "월"                // 피연산자가 하나라도 문자열이면 문자열 결합 연산을 수행함.

//////////////////////////////////////////////////////////////////////////

var x = 3, y = 5;
var result = (x > y) ? x : y   // x가 더 크면 x를, 그렇지 않으면 y를 반환함.

document.write("둘 중에 더 큰 수는 " + result + "입니다.");

//////////////////////////////////////////////////////////////////////////

var arr = [1, 2, 3];          // 배열 생성
delete arr[2];                // 배열의 원소 중 인덱스가 2인 요소를 삭제함.

document.write(arr + "<br>"); // [1, 2, ]
// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정된 것은 아님.

document.write(arr[2] + "<br>");
// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.

document.write(arr.length);

//////////////////////////////////////////////////////////////////////////

typeof "문자열"   // string
typeof 10         // number
typeof NaN        // number
typeof false      // boolean
typeof undefined  // undefined
typeof new Date() // object
typeof null       // object

//////////////////////////////////////////////////////////////////////////

var str = new String("이것은 문자열입니다.");


str instanceof Object;  // true
str instanceof String;  // true
str instanceof Array;   // false
str instanceof Number;  // false
str instanceof Boolean; // false

//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////