const key = document.getElementById('keyCode');
const keyValue = document.getElementById('keyValue');
const charcode = document.getElementById('charCode');

document.addEventListener('keypress', (event) => {
        keyValue.textContent = event.which;
        charcode.textContent = event.code;
        key.textContent = event.key;
});