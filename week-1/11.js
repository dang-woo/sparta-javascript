//문 (if,else if, switch~~)

//조건문 - if, else if, else, switch
//1. if문

let x1 = 10;

// if (true 또는 false가 나올 수 있는 조건)
if (x1 > 0) {
    //main login
    console.log("x는 양수 입니다.")
}

//1-2
let y1 = "hello world";
//y의 길이가 5보다 크거나 같으면 길이를 console.log 로 출력해줘

if (y1.length >= 5) {
    console.log(y1.length)
}

//1-3 if - else 문

let x2 = -3;
if (x2 > 0) {
    //main logic #1
    console.log('x2는 양수입니다')
} else {
    //main logic2
    console.log('x2는 음수입니다')
}

//1-4 if - elseif - else 문

let x3 = 5;

if (x3 < 0) {
    //main logic1
    console.log(1)
} else if (x3 >= 0 && x3 < 10) {
    //main logic2
    console.log(2)
} else {
    //main logic3
    console.log(3)
}

//1-5. swtich
// 변수의 값에 따라, 여려 개의 경우(case) 중 하나를 선택
//defult
let fruit = "바나나";
switch (fruit) {
    case "사과":
        console.log("사과입니다");
        break;
    case "바나나":
        console.log("바나나입니다");
        break;
    case "키위":
        console.log("키위입니다");
        break;
    default:
        console.log('아무것도 아닙니다')
        break;
}