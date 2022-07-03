const age = 97;

function calculateForeignAge(ageOfForeign){
    // return ageOfForeign + 2;
    ageOfForeign + 2;
    return "hello"; // 말그대로 반환값이 string이라 그대로 hello 출력
}

const krAge = calculateForeignAge(age);

console.log(krAge);

// ----------------------------------------------------

const calculator = {
    add : function (first, second){
        console.log("running~")
        return first + second; //return을 하게 되면 해당 함수의 값을 반환하면서 끝나므로 밑단은 실행이X
        console.log("이건 실행 안돼!")
    },
    minus : function (first, second){
        return first - second;
    },
    divide : function (first, second){
        return first / second;
    },
    power : function (first, second){
        return first**second;
    }
}

const addResult = calculator.add(1,2); // 3
const minusResult = calculator.minus(addResult,2); // 1
const divideResult = calculator.divide(10,5); // 2
const power = calculator.power(2,3); // 8

console.log(addResult);
console.log(minusResult);
console.log(divideResult);
console.log(power);

//--------------------------------------------------

const ageCalculator = prompt("how old are you?"); //prompt가 완료되기 전까지 다른 js가 일시정지
//prompt function을 안 쓰는 이유는, 이것이 js를 멈추게 하고, 메시지 창도 그닥 안 이쁘고,
// 스타일, css를 못 바꾸고, 어떤 브라우저는 팝업을 사용하지 않게 하기 때문 등

console.log(ageCalculator);
console.log(typeof ageCalculator);
console.log("\n")


const myCar = {
    color : 'red',
    changeColor : function(){
        console.log(this.color);
    }
}

const unbindChange = myCar.changeColor;
console.log(unbindChange());
console.log("\n")
const bindChagne = unbindChange.bind(myCar);
console.log(bindChagne());