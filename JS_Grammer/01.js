const a = 10;
const b = 2;
let myName = "xxxx";

console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log("holy" + myName);

myName = "moly";

console.log("xxxx" + myName);

const amIFat = true;

console.log(amIFat);

let some;

console.log(some);

const arr = ['june', 'jang', 'lee'];

console.log(arr);

arr.push('angel');

console.log(arr)

const player = {
    name : 'lee',
    age : 26,
    fat : false
};

console.log(player);

player.blood = 'AB';
player.age += 3;

console.log(player);

console.log(player.blood);



function sayHello(nameOfPerson, age){
    console.log("alpha " + nameOfPerson + " age is " + age);
}

sayHello("aaa", 10);
sayHello("bbb", 20);
sayHello("ccc", 30);

//NaN = Not a Number == 숫자가 아님

function plus(a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    
}

plus(1, 3)
plus(4, 3)
plus(2, 3)

const namename = {
    name: "nayoung",
    sayName : function(other){
        console.log("team! " + other + " right!");
    }
}

namename.sayName("choi")

//--------------------------------------------------

const fruit = ['apple', 'watermelon', 'mango'];

console.log(fruit);
fruit[1] = 'melon';
console.log(fruit);

function minusFive(num){
    console.log(num - 5);
}

minusFive(5,10,11,2,123); // 0 -> 인자를 하나만 받을 수 있기 때문에 제일 윗단만 들어감

// 내가 혼자 구현한 것!! yeah!!
const calculator = {
    add : function (first, second){
        console.log(first + second);
    },
    minus : function (first, second){
        console.log(first - second);
    },
    divide : function (first, second){
        console.log(first / second);
    },
    powerOf : function (first, second){
        console.log(first**second);
    }
}

calculator.add(1,2); // 3
calculator.minus(3,2); // 1
calculator.divide(10,5); // 2
calculator.powerOf(2,3); // 8 -> 예상한 값 적음 / 예상대로 값 나옴!

