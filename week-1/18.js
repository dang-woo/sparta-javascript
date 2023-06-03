//while


// while (조건) {
//     메인로직
//     증감
// }

//for (초기값; 조건; 증감;) {}

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
console.log("-------------------")
//퀴즈) while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력 해보자
let a = 3;
while (a < 100) {
    if (a % 5 === 0 && i >= 5) {
        console.log(a + "는 5의 배수입니다")
    }

    a++;
}

console.log("-------------------")
// do ~ while

let b = 0;

do {
    console.log(b);
    b++;
} while (b < 10);


console.log("-------------------")


//break continue
//for 문과 항상 결합해서 쓰임.
// 그 자리에서 동작을 끝내버림.

for (let i=0 ; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i)
}

console.log("-------------------")

// continue
// 마찬가지로 for 문과 항상 결합해서 쓰임.
// 그 다음 순서로 넘겨버림

for (let i=0 ; i < 10; i++){
    if (i === 5){
        continue;
    }
    console.log(i)
}