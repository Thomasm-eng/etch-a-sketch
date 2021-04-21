
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
    if (input == null) {
        getInput();
    }
    else if (input < 65 && input.length > 0) {
        createGrid(input);
    }
    else {
        alert("Enter number in 1-65 range.");
        getInput();
    }
}

function reset() {
    document.querySelectorAll('.cell-style')
    .forEach((e) => e.parentNode.removeChild(e));
}

function colorCell() {
    document.querySelectorAll('.cell-style').forEach(item => 
        {item.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = "black";
        });
    });
}
createGrid(16);
colorCell();
document.getElementById('button').addEventListener('click', () => {
    reset();
    getInput();
    colorCell();
});

    
