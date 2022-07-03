// 자바스크립트는 자동으로 html을 읽어옴
// 브라우저의 console에 document라고 치면 우리가 만든 html을 다 불러오는 걸 볼 수 있음
// ex. 브라우저의 console에 console.dir(document)라고 친다면 js의 object처럼 막 나열됨
// console.log(console.dir(document)) <- 이거
// console.log(console.dir(document.title)) 우리가 만든 title이 출력
// 이 말은 즉, html에 써져있는 것들을 js로 불러오고, js상에서 수정할 수 있다는 것
// js는 이미 html과 연결되어 있다는 것이다~~ 와우와웅 어웨서어어엄~~!

const getTitle = document.getElementById("title");
// console.dir()은 element를 더 자세하게 보여주는 것

console.log(getTitle);
console.dir(getTitle);

getTitle.innerText = "change innerText~";
getTitle.className = "add className";
console.log('\n');

// 승준: 요즘 getElement 이거 잘 안 쓴다. 요즘은 querySelector를 쓴다. 참고는 아래에
// https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
// https://velog.io/@rhftnqls/querySelector-querySelectorAll
// 아앗! 알려준다 이후 강의에서 ㅎㅎ

const test1 = document.querySelector('.test1');
const test2 = document.querySelectorAll('.test1');
const getTitleSelector = document.querySelector("#title");

console.log(test1);
console.dir(test1);
console.log('\n');
console.log(test2);
console.dir(test2);
console.log('\n');
console.log(getTitleSelector);
console.dir(getTitleSelector);
console.log('\n');


// ---------------------------

const getTitleDiv = document.querySelector("#title1 h1");

console.log(getTitleDiv);