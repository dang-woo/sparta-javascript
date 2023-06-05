// 구조분해할당 : destructuring(de + structure + ing)
//de = not
// structure = 구조
//구조를 반대로 찢어버린다 = 구조 분해 할당 (구조를 찢어서 각각에 할당함.)
// 배열이나, 객체의 속성

// (1)배열의 경우
let [value1, value2] = [1, "new"];
console.log('1', value1);
console.log('2', value2);

let arr = ['valueA', 'valueB', 'valueC', 'valueD'];
let [a, b, c, d = 4] = arr;
console.log(a, b, c, d)

// (2)객체인 경우
// let user = {
//     name:'npc',
//     age: 30,
// };

//구조분해할당
// let {name, age} = {
//     name: 'npc',
//     age: 30,
// };

// console.log("name =>", name);
// console.log('age =>', age);


//새로운 이름으로 할당

let user = {
    name: 'npc',
    age: 30,
    birthday: "yesterday",
};

let {
    name: newName,
    age: newAge,
} = user

console.log('newName =>', newName);
console.log('newAge =>', newAge);


let {name,age,birthday = "today"} = user;
console.log(name);
console.log(age);
console.log(birthday);