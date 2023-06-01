// 연산자(+, -, *, /, %)

//1. 더하기 연산자
console.log(1 + 1);
console.log(1 + "1"); //문자열이 우선순위

//2. 빼기 연산자
console.log(1 - 2);
console.log(1 - "2"); //숫자형이 우선순위

//3. 곱하기 연산자(*)
console.log(2 * 3); // 6
console.log('2' * 3); // 6

//4. 나누기 연산자 (/)
console.log(4 / 2); // 2
console.log('4' / 2); // 2

//5. 나누기 연산자 (/) vs 나머지 연산자 (%)
console.log(5 / 2)//2.5
console.log(5 % 2)//1


console.log('--------------------')
//6. 할당연산자(assigment)
//6-1. 등호 연산자(=)
let x = 10;
console.log(x)
//6-2. 더하기 등호 연산자 (+=)

x+=5;
// x = x + 5;
console.log(x)

//6-3 빼기 등호 연산자 (-=)
x-=5;
// x = x - 5;
console.log(x)

//6-4. 곱하기 등호 연산자

let a = 10;
a *= 2;

console.log(a)


console.log('--------------------')

//비교 연산자 --> true  또는 false를 반환하는 연산자

//1. 일치 연산자(===)
//타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2); //true
console.log('2' === 2); //false

//2. 불일치 연산자(!==)
//타입까지 일치해야 false 를 반환하는 연산자

//숫자 2가 숫자 2와 다르니?
console.log(2 !==2);

console.log("2" !==2); // true

console.log('--------------------')

// 3. 작다 크다 연산자(<)
console.log(2 < 3); //작다
console.log(2 <= 3);//작거나 같다

console.log(4 > 3); //크다
console.log(4 >= 3);//크거 나 같다



//4 논리 연산자

//4-1 논리곱 연산자 (AND)
console.log('---------AND--------')

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false )

//4-1 논리합 연산자 (OR)
console.log('---------OR--------')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false )

//4-3논리부정 연산자 ! (NOT)
console.log('---------NOT--------')
console.log(!true);
let b = true;
console.log(!b);

// 5. 삼항 연산자(중요!)
// 조건에 따라 값을 선택한다.

let x1 = 10;
let result = (x1 > 5) ? "크다" : "작다";
//조건이 true 면 앞에거 false 면 뒤에꺼 를 결정해줌.
console.log('--------------')
console.log(result)


console.log('------퀴즈------')
// 퀴즈
let y1 = 20;
//3항 연산자를 이용해서 y 가 10보다 작은 경우 작다를
// console.log 로 출력해 주세요
// 10보다 크면 크다를 출력해 주세요
let result2 = (y1 < 10 ) ? "작다" : "크다";
console.log(result2)

// 6. 타입연산자 (typeof)
console.log(typeof 5);