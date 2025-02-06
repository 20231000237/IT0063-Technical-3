const screen = document.getElementById('screen');
let display = "";

document.querySelectorAll('.printable').forEach((button) => {
    button.addEventListener('click', () => {
        display += button.innerHTML;
        screen.innerHTML = display;
    })
})

document.getElementById('equals').addEventListener('click', () => {
    if (display.includes('&lt;')) {
        display = display.replace("&lt;", "\<");
    }
    display = eval(display);
    screen.innerHTML = display;
});

document.getElementById('clear').addEventListener('click', () => {
    display = "";
    screen.innerHTML = display;
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