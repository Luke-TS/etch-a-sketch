const main = document.getElementById('main');
const reset = document.getElementById('reset');
reset.onclick = () => {
    while(main.firstChild) {
        main.removeChild(main.lastChild);
    }
    makeGrid();
}

function makeGrid() {
    let dim = 16;
    do {
        dim = prompt('Enter dimention: ');
    } while (!(dim <= 100 && dim >= 1));

    for(let i = 0; i < dim; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        container.style.display = 'flex';
        container.style.flex = '1';

        for(let j = 0; j < dim; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.flex = '1';
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'red';
            })
            container.appendChild(cell);
        }

        main.appendChild(container);
    }
}

makeGrid();