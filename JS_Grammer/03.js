const changeNum = "18";
const fakeNum = 'fake';

console.log(typeof changeNum, changeNum); //string 18 -> 색깔이 검은색 18
console.log(typeof parseInt(changeNum), parseInt(changeNum)); //number 18 -> 색깔이 파란색 18
console.log(typeof fakeNum, parseInt(fakeNum)); // NaN -> 문자를 변환할 수는 없어서
console.log("\n");

//-------------------------------------

const num = parseInt(prompt("how old are you?"));

console.log(isNaN(num));
const check = isNaN(num);

if (check){
    console.log("OMG, plz change input");
} else {
    console.log("ok! i got it!!");
}

console.log("\n");

if (check || num < 0){
    //true
    console.log("plz write a real positive number!")
} else {
    //false
    if (num <= 18){
        console.log("NOPE, U CAN'T DRINK!");
    } else if (18 <num && 51 > num){ // 18< num <= 50 이렇게 작성했더니 실행이 잘못되더라..!
        console.log("oh, u can drink!");
    } else {
        console.log("u can drink, but how about stop drinking?")
    };
};