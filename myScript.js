//global variables
const DEFAULT_SIZE = 16;
const grid = document.getElementById("grid")

//generates grid based of size
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        div.className = ("grid-item");
        grid.appendChild(div);
    }
}

setupGrid(DEFAULT_SIZE);