let counter = 0;

const countValue = document.getElementById('value');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.querySelector('#reset');

// To increase the value of your count
incrementBtn.addEventListener('click',() => {
    counter++;
    counter.innerHTML = counter;
});

// To reduce the value count 
decrementBtn.addEventListener('click', () => {
    counter--;
    counter.innerHTML = counter;
});

// To reset to zero 
reset.addEventListener('click', reset);

function reset() {
    counter = 0;
    counter.innerHTML = counter;
};