const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener('input', function () {
    text.style.fontSize = `${inputControl.value}px`;
});

