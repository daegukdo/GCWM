var arrLit = [1, true, "JavaScript"];             // 배열 리터럴을 이용하는 방법
var arrObj = Array(1, true, "JavaScript");        // Array 객체의 생성자를 이용하는 방법
var arrNewObj = new Array(1, true, "JavaScript"); // new 연산자를 이용한 Array 객체 생성 방법 

document.write(arrLit + "<br>");                  // 1,true,JavaScript
document.write(arrObj + "<br>");                  // 1,true,JavaScript 
document.write(arrNewObj);                        // 1,true,JavaScript

//////////////////////////////////////////////////////////////////////////

var arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함.
var element = arr[0];     // 배열의 첫 번째 요소를 읽어서 대입함.

arr[1] = 10;      // 배열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남.
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남.

document.write("배열 arr의 요소에는 [" + arr + "]가 있습니다.<br>"); // 배열의 요소를 모두 출력함.
document.write("배열 arr의 길이는 " + arr.length + "입니다.<br>");   // 배열의 길이를 출력함.

delete arr[2];    // 배열의 세 번째 요소를 삭제함. 하지만 배열의 길이는 변하지 않음.

document.write("배열 arr의 요소에는 [" + arr + "]가 있습니다.<br>"); // 배열의 요소를 모두 출력함.
document.write("배열 arr의 길이는 " + arr.length + "입니다.");       // 배열의 길이를 출력함.

//////////////////////////////////////////////////////////////////////////

var arr = [1, true, "Java"];

arr.push("Script");           // push() 메소드를 이용하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script

arr[arr.length] = 100;        // length 프로퍼티를 이용하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script,100

arr[10] = "자바스크립트";     // 특정 인덱스를 지정하여 추가하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script,100,,,,,,자바스크립트
document.write(arr[7]);       // undefined

//////////////////////////////////////////////////////////////////////////

var arr = [1, true, "JavaScript"];
var result = "<table><tr>";

for (var idx in arr) {
    result += "<td>" + arr[idx] + "</td>";
}

result += "</tr></table>";
document.write(result);

//////////////////////////////////////////////////////////////////////////

var arr = new Array(10, "문자열", false);

document.write((typeof arr) + "<br>");    // object
document.write((typeof arr[0]) + "<br>"); // number
document.write((typeof arr[1]) + "<br>"); // string
document.write(typeof arr[2]);            // boolean

//////////////////////////////////////////////////////////////////////////

var arr = new Array(); // 빈 배열 객체를 생성함.

arr[99] = "JavaScript" // 배열 arr의 100번째 위치에 문자열을 삽입함.

// 100번째 요소를 삽입했기 때문에 배열의 길이는 100으로 늘어남.
document.write("배열의 길이는 " + arr.length + "입니다.");

//////////////////////////////////////////////////////////////////////////

var arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.

for (var row = 0; row < 3; row++) {
    arr[row] = new Array(4); // 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.
    for (var column = 0; column < 4; column++) {
        arr[row][column] = "[" + row + "," + column + "]"; // 각각의 배열 요소를 생성함.
        document.write(arr[row][column] + " ");            // 각 배열 요소에 접근함.
    }
}

//////////////////////////////////////////////////////////////////////////

var arr = [];     // 비어있는 배열을 생성함.

arr["하나"] = 1;  // 숫자 인덱스 대신에 문자열을 인덱스로 배열 요소를 추가함.
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

document.write(arr["참"]);  // 문자열을 인덱스로 배열 요소에 접근할 수 있음.
document.write(arr.length); // 연관 배열은 Array 객체가 아니므로 length 프로퍼티의 값이 0임.
document.write(arr[0]);     // undefined

//////////////////////////////////////////////////////////////////////////

var str = "안녕하세요!";       // 문자열 생성

document.write(str.charAt(2)); // 하 
document.write(str[2]);        // 하

//////////////////////////////////////////////////////////////////////////

var str = "안녕하세요!"; // 문자열 생성

str[0] = "";             // 자바스크립트의 문자열은 읽기 전용이므로, 이 문장은 오류를 발생시킵니다.

//////////////////////////////////////////////////////////////////////////

var arr = [1, true, "JavaScript"]; // 배열 생성

document.write(typeof arr);        // object

//////////////////////////////////////////////////////////////////////////

document.write(Array.isArray(arr));      // true
document.write(Array.isArray("문자열")); // false

//////////////////////////////////////////////////////////////////////////

document.write(arr instanceof Array); // true
document.write(123 instanceof Array); // false

//////////////////////////////////////////////////////////////////////////

function isArray(a) {
    return a.constructor.toString().indexOf("Array") > -1;
}

var arr = [1, true, "JavaScript"];          // 배열 생성

document.write(arr.constructor);            // constructor 프로퍼티의 값 출력
document.write(arr.constructor.toString()); // function Array() {[native code]}
document.write(arr.constructor.toString().indexOf("Array")); // 10
document.write(isArray(arr))                // true

//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////