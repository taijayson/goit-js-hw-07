const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputText);
    
function inputText() {     
    outputRef.textContent = inputRef.value || 'незнакомец';
}