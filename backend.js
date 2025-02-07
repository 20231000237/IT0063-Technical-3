const screen = document.getElementById('screen');

document.querySelectorAll('.printable').forEach((button) => {
    button.addEventListener('click', () => {
        screen.innerHTML += button.innerHTML;
    })
})

document.getElementById('backspace').addEventListener('click', () => {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
});

document.getElementById('equals').addEventListener('click', () => {
    screen.innerHTML = eval(screen.innerHTML);
});

document.getElementById('clear').addEventListener('click', () => {
    screen.innerHTML = "";
});

const buttons = document.querySelectorAll('td');
let previous = buttons[0];
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        previous.classList.remove('previouslyClicked');
        button.classList.add('previouslyClicked');
        previous = button;
    })
})