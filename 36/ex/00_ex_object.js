
var cat = "나비"; // 일반적인 변수의 선언

// 객체도 많은 값을 가지는 변수의 하나임.
var kitty = { name: "나비", family: "코리안 숏 헤어", age: 1, weight: 0.1 };

cat          // 나비
kitty.name   // 나비

//////////////////////////////////////////////////////////////////////////

var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    }
};

person.name    // 홍길동
person["name"] // 홍길동

//////////////////////////////////////////////////////////////////////////

var person = {
    name: "홍길동",
    birthday: "030219",
    pId: "1234567",
    fullId: function() {
        return this.birthday + this.pId;
    }
};

person.fullId() // 0302191234567
person.fullId;  // function () { return this.birthday + this.pId; } 

//////////////////////////////////////////////////////////////////////////

var kitty = {
    name: "나비",
    family: "코리안 숏 헤어",
    age: 1,
    weight: 0.1
};

document.write("우리 집 새끼 고양이의 이름은 " + kitty.name + "이고, 종은 " + kitty.family + "입니다.");

//////////////////////////////////////////////////////////////////////////

var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.

document.write("올해는 " + day.getFullYear() + "년입니다.");

//////////////////////////////////////////////////////////////////////////

var obj = Object.create(null, {             // null 프로토타입을 사용하여 새로운 객체를 만들고
    x: { value: 100, enumerable: true },    // x좌표를 나타내는 열거할 수 있는 프로퍼티와
    y: { value: 200, enumerable: true }     // y좌표를 나타내는 열거할 수 있는 프로퍼티를 추가함.
});

obj.x;                      // x좌표
obj.y;                      // y좌표 

Object.getPrototypeOf(obj); // 객체의 프로토타입을 반환해 줌.

//////////////////////////////////////////////////////////////////////////

var obj = new Object(); // 이 객체의 프로토타입은 Object.prototype입니다.
var arr = new Array();  // 이 객체의 프로토타입은 Array.prototype입니다.
var date = new Date();  // 이 객체의 프로토타입은 Date.prototype입니다.

//////////////////////////////////////////////////////////////////////////

var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 프로토타입으로 가집니다.

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) { // 개에 관한 생성자 함수를 작성함.
    this.color = color;          // 색에 관한 프로퍼티
    this.name = name;            // 이름에 관한 프로퍼티
    this.age = age;              // 나이에 관한 프로퍼티
}

var myDog = new Dog("흰색", "마루", 1); // 이 객체는 Dog라는 프로토타입을 가짐.

document.write("우리 집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + " 털이 매력적인 강아지입니다.");

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
myDog.family = "시베리안 허스키"; // 품종에 관한 프로퍼티를 추가함.

myDog.breed = function() {        // 털색을 포함한 품종을 반환해 주는 메소드를 추가함.
    return this.color + " " + this.family;
}

document.write("우리 집 강아지는 " + myDog.breed() + "입니다.");

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = "시베리안 허스키"; // 프로토타입에 프로퍼티를 추가할 때에는 기본값을 가지게 할 수 있음.
    this.breed = function() {
        return this.color + " " + this.family;
    };
}

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("갈색", "콩이", 3);

document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

// 현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함.
Dog.prototype.family = "시베리안 허스키";

// 현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함.
Dog.prototype.breed = function() {
    return this.color + " " + this.family;
};

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("갈색", "콩이", 3);
 
document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");
document.write("우리 집 강아지의 품종은 " + myDog.breed() + "입니다.<br>");
document.write("친구네 집 강아지의 품종은 " + hisDog.breed() + "입니다.");

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
delete myDog.age; // age 프로퍼티를 삭제함.

// age 프로퍼티가 삭제되었기 때문에 undefined를 출력함.
document.write("우리집 강아지의 나이는 " + myDog.age + "입니다.");

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);

// color 프로퍼티의 enumerable 속성을 false로 설정함.
Object.defineProperty(myDog, 'color', {enumerable : false} );

// 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환함.
document.write(Object.keys(myDog) + "<br>");       // name, age

// 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환함.
document.write(Object.getOwnPropertyNames(myDog)); // color, name, age

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("흰색", "마루", 1);      // 모든 프로퍼티의 값이 모두 같은 객체를 생성함.

document.write((myDog == hisDog) + "<br>");   // false
document.write((myDog === hisDog) + "<br>");  // false

var herDog = hisDog;                          // hisDog 객체를 변수 herDog에 대입함.
document.write((hisDog == herDog) + "<br>");  // true
document.write((hisDog === herDog) + "<br>"); // true

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family;
    }
}

var myDog = new Dog("검정색", "곰", 3, "불독");

myDog.hasOwnProperty("color"); // true
myDog.hasOwnProperty("breed"); // true
myDog.hasOwnProperty("class"); // 상속받은 프로퍼티이므로, false를 반환함.

//////////////////////////////////////////////////////////////////////////

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);

// color 프로퍼티의 enumerable 속성을 false로 설정함.
Object.defineProperty(myDog, 'color', { enumerable : false} );

document.write(myDog.propertyIsEnumerable("color") + "<br>"); // false
document.write(myDog.propertyIsEnumerable("name") + "<br>");  // true
document.write(myDog.propertyIsEnumerable("age"));            // true

//////////////////////////////////////////////////////////////////////////

var day = new Date(); // Date 객체를 생성함.

// 객체 day의 프로토타입이 Date.prototype인지를 검사함.
document.write(Date.prototype.isPrototypeOf(day));          // true
document.write(Date.prototype.isPrototypeOf(new String())); // false

//////////////////////////////////////////////////////////////////////////

var day = new Date(); // Date 객체를 생성함.

// 객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사함.
document.write(Object.isExtensible(day) + "<br>"); // true

// 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정함.
var myDay = Object.preventExtensions(day);

document.write(Object.isExtensible(day));          // false

//////////////////////////////////////////////////////////////////////////

var arr = [10, "문자열", true]; // 배열
var bool = false;               // 불리언

function func() { return 0; }   // 함수

arr.toString();  // 10,문자열,true
bool.toString(); // false
func.toString(); // 함수의 소스 코드가 전부 문자열로 반환됨.

//////////////////////////////////////////////////////////////////////////

function func(n) {
    this.number = n;
}

myFunc = new func(4);

document.write(myFunc + 5); // ① : [object Object]5

func.prototype.valueOf = function() { // valueOf() 메소드를 정의함.
    return this.number;
}

document.write(myFunc + 5); // ② : 9

//////////////////////////////////////////////////////////////////////////

var gildong = { age: 18 };
document.write(gildong.age + "<br>"); // 18

Object.defineProperty(gildong, "americanAge", { get: function() { return this.age - 1; } });
document.write(gildong.americanAge); // 17

//////////////////////////////////////////////////////////////////////////

var gildong = { age: 18 };
gildong.age = 20;
document.write(gildong.age + "<br>"); // 20

Object.defineProperty(gildong, "changeAge", { set: function(n) { this.age = this.age - n; } });
gildong.changeAge = 5;
document.write(gildong.age); // 15

//////////////////////////////////////////////////////////////////////////

