
const container = document.getElementById('container');

function createGrid(num) {
    container.style.setProperty('--rows', num);
    container.style.setProperty('--cols', num);
    for (i = 0; i < num*num; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell-style');
        
        container.appendChild(cell);
    }
}

function getInput() {
    let input = prompt("Enter a Number:");
    if (input < 65) {
        createGrid(input);
    }
    else {
        alert("Enter a Number in 1-64 Range:");
        getInput();
    }
}

function reset() {
    document.querySelectorAll('.cell-style')
    .forEach((e) => e.parentNode.removeChild(e));
}

document.getElementById('button').addEventListener('click', getInput);
