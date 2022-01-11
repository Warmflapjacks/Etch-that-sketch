//global variables
const DEFAULT_SIZE = 16;
const grid = document.getElementById("grid");
const gridItem = document.getElementsByClassName("grid-item");

//generates grid based of size
function setupGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //creates <div> with class name "grid-item"
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        div.className = ("grid-item");
        grid.appendChild(div);

        getBoxBackground(div);
    }
}

//adds color to individual grids 
function getBoxBackground (div) {
    div.onmouseover = () => {
        div.classList.add("color-box");
    }
}

setupGrid(DEFAULT_SIZE);
