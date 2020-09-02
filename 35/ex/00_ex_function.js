
function addNum(x, y) {
    return x + y;
}

document.write(addNum(2, 3));

//////////////////////////////////////////////////////////////////////////

// addNum라는 이름의 함수를 정의함.
function addNum(x, y) {    // x, y는 이 함수의 매개변수임.
    document.write(x + y);
}

addNum(2, 3);              // addNum() 함수에 인수로 2와 3을 전달하여 호출함.

//////////////////////////////////////////////////////////////////////////

function multiNum(x, y) {
    return x * y;         // x와 y를 곱한 결과를 반환함.
}

var num = multiNum(3, 4); // multiNum() 함수가 호출된 후, 그 반환값이 변수 num에 저장됨.
document.write(num);

//////////////////////////////////////////////////////////////////////////

function addNum(x, y) {
    return x + y;
}

var sum = addNum(3, 5); // 함수 addNum()을 호출하면서, 인수로 3과 5를 전달합니다.
                        // 함수의 호출이 끝난 뒤에는 그 반환값을 변수 sum에 대입합니다.

//////////////////////////////////////////////////////////////////////////

function sqr(x) {                // 제곱의 값을 구하는 함수 sqr를 정의함.
    return x * x;
}

var sqrNum = sqr;                // 변수 sqrNum에 함수 sqr을 대입함.

document.write(sqr(4) + "<br>"); // 함수 sqr을 호출함.
document.write(sqrNum(4));       // 변수 sqrNum를 함수처럼 호출함.

//////////////////////////////////////////////////////////////////////////

function localNum() {
    var num = 10; // 지역 변수 num에 숫자 10을 대입함.
    document.write("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다.<br>"); // number
}

localNum();       // 함수 localNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + "입니다."); // undefined

//////////////////////////////////////////////////////////////////////////

var num = 10; // 전역 변수 num을 선언함.

function globalNum() {
    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10
    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.
}

globalNum();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 20

//////////////////////////////////////////////////////////////////////////

function globalNum() {
    num = 10; // var 키워드를 사용하지 않고 변수 num을 선언함.
    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10
}

globalNum();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 10

//////////////////////////////////////////////////////////////////////////

var num = 10; // 전역 변수 num을 선언함.

function globalNum() {
    var num = 20; // 같은 이름의 지역 변수 num을 선언함.
    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 20
}

globalNum(); // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 10

//////////////////////////////////////////////////////////////////////////

var num = 10; // 전역 변수 num을 선언함.

function globalNum() {
    var num = 20; // 같은 이름의 지역 변수 num을 선언함.
    document.write("함수 내부에서 지역 변수 num의 값은 " + num + "입니다.<br>");
    document.write("함수 내부에서 전역 변수 num의 값은 " + window.num + "입니다.<br>");
}

globalNum(); // 함수 globalNum()을 호출함.

//////////////////////////////////////////////////////////////////////////

// x, y, name을 전역 변수로 선언함.
var x = 10, y = 20;

// sub()를 전역 함수로 선언함.
function sub() {
    return x - y;     // 전역 변수인 x, y에 접근함.
}

document.write(sub() + "<br>");

// parentFunc()을 전역 함수로 선언함.
function parentFunc() {
    var x = 1, y = 2; // 전역 변수와 같은 이름으로 선언하여 전역 변수의 범위를 제한함.

    function add() {  // add() 함수는 내부 함수로 선언됨.
        return x + y; // 전역 변수가 아닌 지역 변수 x, y에 접근함.
    }

    return add();
}

document.write(parentFunc());

//////////////////////////////////////////////////////////////////////////

var globalNum = 10;     // globalNum을 전역 변수로 선언함.

function printNum() {
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); // ①
    var globalNum = 20; // globalNum을 지역 변수로 선언함. // ②
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}

printNum();

//////////////////////////////////////////////////////////////////////////

var globalNum = 10;

function printNum() {
    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동됨.
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>");
    globalNum = 20;
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}

printNum();

//////////////////////////////////////////////////////////////////////////

function addNum(x, y, z) { // x, y, z라는 3개의 매개변수를 가지는 함수 addNum()을 정의함.
    return x + y + z;
}

addNum(1, 2, 3); // 인수로 1, 2, 3을 전달하여 함수를 호출함. -> 6
addNum(1, 2);    // 인수로 1, 2을 전달하여 함수를 호출함. -> NaN
addNum(1);       // 인수로 1을 전달하여 함수를 호출함. -> NaN
addNum();        // 인수로 아무것도 전달하지 않고 함수를 호출함. -> NaN

//////////////////////////////////////////////////////////////////////////

function addNum(x, y, z) {
    if(x === undefined) // 함수 호출시 x에 해당하는 인수가 전달되지 않은 경우
        x = 0;          // 변수 x의 값을 undefined에서 0으로 변경함.
    if(y === undefined) // 함수 호출시 y에 해당하는 인수가 전달되지 않은 경우
        y = 0;          // 변수 y의 값을 undefined에서 0으로 변경함.
    if(z === undefined) // 함수 호출시 z에 해당하는 인수가 전달되지 않은 경우
        z = 0;          // 변수 z의 값을 undefined에서 0으로 변경함.
    return x + y + z;
}

addNum(1, 2, 3); // 6
addNum(1, 2);    // 3
addNum(1);       // 1
addNum();        // 0

//////////////////////////////////////////////////////////////////////////

function addNum() {
    var sum = 0;                                // 합을 저장할 변수 sum을 선언함.
    for(var i = 0; i < arguments.length; i++) { // 전달받은 인수의 총 수만큼 반복함.
        sum += arguments[i];                    // 전달받은 각각의 인수를 sum에 더함.
    }
    return sum;
}

addNum(1, 2, 3); // 6
addNum(1, 2);    // 3
addNum(1);       // 1
addNum();        // 0
addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

//////////////////////////////////////////////////////////////////////////

var x = 10, y = 20;
var a = eval("x + y"); // 30
var b = eval("y * 3"); // 60

document.write(a + "<br>" + b);

//////////////////////////////////////////////////////////////////////////

isFinite(123);       // true
isFinite(123e100);   // true
isFinite(0);         // true
isFinite(true);      // true
isFinite(false);     // true
isFinite(null);      // true
isFinite("123");     // true
isFinite("");        // true

isFinite("문자열");  // false
isFinite(undefined); // false
isFinite(NaN);       // false

//////////////////////////////////////////////////////////////////////////

isNaN(123);       // false
isNaN(123e100);   // false
isNaN(0);         // false
isNaN(true);      // false
isNaN(false);     // false
isNaN(null);      // false
isNaN("123");     // false
isNaN("");        // false

isNaN("문자열");  // true
isNaN(undefined); // true
isNaN(NaN);       // true

//////////////////////////////////////////////////////////////////////////

parseFloat("123");        // 123
parseFloat("123.000");    // 123
parseFloat("123.456");    // 123.456
parseFloat("12 34 56");   // 12
parseFloat(" 123 ");      // 123
parseFloat("123 초콜릿"); // 123
parseFloat("초콜릿 123"); // NaN

//////////////////////////////////////////////////////////////////////////

parseInt("123");        // 123
parseInt("123.000");    // 123
parseInt("123.456");    // 123
parseInt("12 34 56");   // 12
parseInt(" 123 ");      // 123
parseInt("123 초콜릿"); // 123
parseInt("초콜릿 123"); // NaN

parseInt("10", 10);     // 10
parseInt("10", 8);      // 8
parseInt("10", 16);     // 16
parseInt("0x10");       // 16

//////////////////////////////////////////////////////////////////////////

var uri = "http://google.com/search.php?name=홍길동&city=서울";

var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);

document.write(enc1 + "<br>" + enc2);

//////////////////////////////////////////////////////////////////////////

var uri = "http://google.com/search.php?name=홍길동&city=서울";

var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
document.write(enc1 + "<br>" + enc2 + "<br><br>");

var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);
document.write(dec1 + "<br>" + dec2);

//////////////////////////////////////////////////////////////////////////

var str = "Hello! World ?#$";

var esc = escape(str);
var une = unescape(esc);

document.write(esc + "<br>" + une);