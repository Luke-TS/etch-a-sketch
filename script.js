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
            cell.textContent = '10';
            cell.style.fontSize = '0px'
            cell.style.flex = '1';
            cell.addEventListener('mouseover', () => {
                if(--cell.textContent >= 0) {
                    cell.style.backgroundColor = darken(cell.textContent);
                }
            })
            container.appendChild(cell);
        }

        main.appendChild(container);
    }
}

function darken(val) {
    const rgb = [255, 255, 255].map(x => x * (val/10));
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

makeGrid();