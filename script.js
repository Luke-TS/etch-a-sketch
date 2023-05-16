const main = document.getElementById('main');

function makeGrid(dim) {
    for(let i = 0; i < dim; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        container.style.display = 'flex';
        container.style.flex = '1';

        for(let j = 0; j < dim; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.flex = '1';

            container.appendChild(cell);
        }

        main.appendChild(container);
    }
}

makeGrid(prompt('Enter the dimention: '));