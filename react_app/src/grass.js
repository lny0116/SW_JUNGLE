const Squares = document.querySelector('.Squares');
for (let i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 5);
  Squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}