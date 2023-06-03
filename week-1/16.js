//배열

//1. 생성

//1-1. 기본생성
let fruits = ["사과", "바나나", "오렌지"];
// 항상 0번째 부터 시작

//1-2. 크기지정
let number = new Array(5);

console.log(number);

console.log(fruits.length);
console.log(number.length);
console.log("-------------------");
//2. 요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("-------------------");
//3. 배열 메소드
//3-1.push

let fruits2 = ["사과", "바나나"];
console.log("1 =>", fruits2);

fruits2.push("자두");
console.log(fruits2)
console.log("-------------------");
// 3-2 pop
//맨 뒤에것을 뺌

let fruits3 = ["사과", "바나나"];
console.log("1 =>", fruits3);
fruits3.pop();
console.log("2 =>", fruits3);
console.log("-------------------");
//3-3.shift
//맨 앞에것을 뻄
let fruits4 = ["사과", "바나나", "키위"]
console.log("1 =>", fruits4);
fruits4.shift();
console.log("2 =>", fruits4);

//3-4.unshift
//맨 앞에 어떤것을 추가

fruits4.unshift("포도");
console.log("3 =>", fruits4);
console.log("-------------------");
//3-5. splice
//몇번부터,지울갯수, 갈아끼울것
fruits4.splice(0, 1, "복숭아");
console.log(fruits4)
console.log("-------------------");
//3-6 slice
let fruits5 = ["사과", "바나나", "키위"]

let slicedFruits = fruits5.slice(1, 2);
//1에서 2까지, 1번째 배열에서부터 2번쨰 배열 전까지만 만들어서 반환해줘
//바나나 부터시작해서 키위전 까지만 새로운 배열로 출력
console.log(slicedFruits)


//배열2
//forEach, map, filter, find

let numbers = [1, 2, 3, 4, 5];

//1.콜백함수 (forEach)
//매개변수 자리에 함수를 넣는것
// 리턴 같은건 없고 안에가 실행되게함
numbers.forEach(function (item) {
    console.log('item입니다 => ' + item)
});

// 2. map
//무조건 return 값을 가져야함
//항상 원본 배열의 길이만큼이 return 된다.
let mapNumbers = numbers.map(function (item) {
    return item * 2;
});
console.log(mapNumbers);

//3. filter
// 리턴 값 안에 필터링 할 조건이 들어감
let filterNumbers = numbers.filter(function (item){
    return item > 3;

});
console.log(filterNumbers);


//4. find
//필터와 유사하지만 조건에 맞는 첫번째 것만 반환해줌.
let result = numbers.find(function (item) {
    return item > 3;
});

console.log(result)