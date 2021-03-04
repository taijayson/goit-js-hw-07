const increment = document.querySelector('#counter > button:last-child')
const decrement = document.querySelector('#counter > button:first-child')
const counterValue = document.querySelector('#value')

let count = 0;

increment.addEventListener('click', (e) => {
    count += 1
    counterValue.textContent = count;
})

decrement.addEventListener('click', (e) => {
    count -= 1
    counterValue.textContent = count;
})

