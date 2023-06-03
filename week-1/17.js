//for, while => ~~하는동안 : 반복문

// for (초기값; 조건식; 증감식;)  {}

//초기값: i라는 변수는 0부터 시작할거야.
//조건식: i라는 변수가 10에 도달하기 전까지 계속할거야
//증감식: i라는 변수는 한 사이클이 돌고 나면 1을 더할거야.
for (let i = 0; i < 10; i++) {
    console.log("for문 돌아가고잇음 =>", i);
}

//배열과 for문은 짝꿍이다.

const arr = ['zero', 'one', 'two', 'three', 'four',];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i])
}

//퀴즈: 0부터 10까지의 수 중에서 2 의 배수만 console.log로 출력해보기

for (let i = 0; i < 11; i++) {
    if (i >= 2) {

        if (i % 2 === 0) {
            //2의 배수
            console.log(i, '는 2의 배수입니다')
        }
    }
}

//for ~ in 문
//객체의 속성을 출력하는 문법
let person = {
    name: '김동우',
    age: 22,
    gender: '남자',
}

for (let key in person) {
    console.log(key + ":" + person[key]);
}