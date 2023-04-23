const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
const name = input.value;
if (name === '') {
    output.textContent = 'Anonymous';
} else {
    output.textContent = name;
}
});

