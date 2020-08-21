// defien variable
var x = 10, y = 20;

// condition 1
if (x == y) {
    document.write("x와 y는 같습니다.");
}

// condition 2
if (x < y) {
    document.write("x가 y보다 작습니다.");
}

// 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있음.
if (x > y) 
    document.write("x가 y보다 큽니다.");

//////////////////////////////////////////////////////////////////////////

// defien variable
var x = 10, y = 20;

// condition
if (x == y) {
    document.write("x와 y는 같습니다.");
} else {
    if (x < y)
        document.write("x가 y보다 작습니다.");
    else // 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있음.
        document.write("x가 y보다 큽니다.");
}

//////////////////////////////////////////////////////////////////////////

// defien variable
var x = 10, y = 20;

// condition
if (x == y) {
    document.write("x와 y는 같습니다.");
} else if (x < y) {
    document.write("x가 y보다 작습니다.");
} else { // x > y인 경우
    document.write("x가 y보다 큽니다.");
}

//////////////////////////////////////////////////////////////////////////

var x = 10;

switch (typeof x) {
    case "number":
        document.write("변수 x의 타입은 숫자입니다.");
        break;
    case "string":
        document.write("변수 x의 타입은 문자열입니다.");
        break;
    case "object":
        document.write("변수 x의 타입은 객체입니다.");
        break;
    default:
        document.write("변수 x의 타입을 잘 모르겠네요...");
        break;
}

//////////////////////////////////////////////////////////////////////////

var x = "문자열";

// switch don't have 'break'
switch (typeof x) {
    case "number":
        document.write("변수 x의 타입은 숫자입니다.<br>");
    case "string":
        document.write("변수 x의 타입은 문자열입니다.<br>");
    case "object":
        document.write("변수 x의 타입은 객체입니다.<br>");
    default:
        document.write("변수 x의 타입을 잘 모르겠네요...<br>");
}

//////////////////////////////////////////////////////////////////////////

var day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)

switch (day) {
    case 1: // 월요일인 경우
    case 2: // 화요일인 경우
    case 3: // 수요일인 경우
    case 4: // 목요일인 경우

    default: // 0부터 6까지의 값이 아닌 경우
        document.write("아직도 주말은 멀었네요... 힘내자구요!!");
        break;

    case 5: // 금요일인 경우
        document.write("오늘은 불금이네요!!");
        break;

    case 6: // 토요일인 경우

    case 0: // 일요일인 경우
        document.write("즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!");
        break;

}

//////////////////////////////////////////////////////////////////////////

var i = 1;

while (i < 10) { // 변수 i가 10보다 작을 때만 while 문을 반복함.
    document.write(i + "<br>");
    i++; // 반복할 때마다 변수 i를 1씩 증가시켜 변수 i가 10보다 커지면 반복문을 종료함.
}

//////////////////////////////////////////////////////////////////////////

var i = 1, j = 1;

while (i > 3) { // 변수 i의 초깃값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
    document.write("i : " + (i++) + "<br>");
}
do { // 변수 j의 초깃값은 1이기 때문에 이 do / while 문은 단 한 번만 실행됨.
    document.write("j : " + (j++) + "<br>");
} while (j > 3);

//////////////////////////////////////////////////////////////////////////

for (var i = 1; i < 10; i++) {
    document.write(i + "<br>");
}

//////////////////////////////////////////////////////////////////////////

var arr = [3, 4, 5];

for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(i + " ");
}

for (var i in arr) { // 위와 같은 동작을 하는 for / in 문
    document.write(i + " ");
}

//////////////////////////////////////////////////////////////////////////

var obj = { name : "이순신", age : 20 };

for (var i in obj) {
    document.write(i + "<br>");
}

//////////////////////////////////////////////////////////////////////////

var arr = [3, 4, 5];

for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(arr[i] + " ");
}

for (var value of arr) { // 위와 같은 동작을 하는 for / of 문
    document.write(value + " ");
}

//////////////////////////////////////////////////////////////////////////

var arr = new Set([1, 1, 2, 2, 3, 3]);

for (var value of arr) {
    document.write(value + " ");
}

//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////