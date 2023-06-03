//객체
//ley - value pair
//하나의 변수에 여려개의 값을 넣을 수 잇다

//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법
let person = {
    name : '김동우',
    age : 22,
    gender: '남자',
};

//1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person('김동우',22,'남자');
let person2 = new Person('심혜미',26,'여자');


// 2. 접근하는 방법
console.log('1',person.name);
console.log('2',person.age);
console.log('3',person.gender);

//3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)

//3-1 Object.key() key 를 가져오는 메소드

let keys = Object.keys(person);
console.log(keys)

//3-2. values

let values= Object.values(person);
console.log(values)

//3-3. entries
//key 와 value를 묶어서 배열로 만든 베열! (2차원 배열)
let entries= Object.entries(person);
console.log(entries)

//3-4. assign
//객체 복사
let newPerson = {};
Object.assign(newPerson,person,{gender : "여자"});
console.log("newPerson =>", newPerson)

//3-5. 객체 비교
//객체는 크기가 상당히 크다
//-> 메모리에 저장할 때 별도의 공간에 저장
// person3 별도 공간에 대한 주소
let person3 = {
    name : '김동우',
    age : 22,
    gender: '남자',
};
// person3 별도 공간에 대한 주소
let person4 = {
    name : '김동우',
    age : 22,
    gender: '남자',
};

//str1 과 str2 sms 값을 직접 저장하기때문에
//같다는 결과가 나옴.
let str1 ="aaa";
let str2 ="aaa";

console.log(person3 === person4)
console.log(str1 === str2)

//JSON 을 이용하혀 객체를 문자열화 시킨다
console.log(JSON.stringify(person3) === JSON.stringify(person4))
//이렇게되면 문자열 끼리 비교를 하게되어서 같다고 나온다


//3-6 객체 병합

let person5 = {
    name : '김동우',
    age : 22,
};

let person6 = {
    gender: '남자',
};
// ... : spread operator
// 중괄호 안에있는 키 벨류 값을 다 풀어 해침.
let perfectMan = {...person5, ...person6};
console.log(perfectMan)
