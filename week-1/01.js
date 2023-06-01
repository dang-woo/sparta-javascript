//변수, 상수
//메모리에 저장한다. 읽어들여서 재사용한다. 변수.

//변수의 5가지 주요 개념

//변수 이름 : 저장된 값이 고유 이름
//변수 값 : 변수에 저장된 값
//변수 할당 : 변수에 값을 저장하는 행위
//번수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
//변수 참조 : 변수에 할당된 값을 읽어오는 것

//변수를 선언할 수 있는 3가지 방법 : var, let, const

//1.var (변수)
var myVar = "Hello World"
var myVar = "Test 1" // 중복선언가능
    myVar = "GoodBye1" //재할당가능
console.log(myVar);

//2 let (변수)
let myLet = "Hello World1"
// let myLet = "Test 2" //중복선언 불가능
myLet = "GoodBye2" //재할당 가능
console.log(myLet);

//3 const (상수)
const myConst = "Hello World2"
// const myConst = "Test 3" //중복선언 불가능
//     myConst = "GoodBye3" //재할당 불가능
console.log(myConst);