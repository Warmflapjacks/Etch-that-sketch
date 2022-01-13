//global variables
const DEFAULT_SIZE = 50;
const grid = document.getElementById("grid");
const gridItem = document.getElementsByClassName("grid-item");

//generates grid based of size
function setupGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //creates <div> with class name "grid-item"
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        //assigns <div> created in DOM the classname of grid-item
        div.className = ("grid-item");
        grid.appendChild(div);


        //pass div to getBoxBackground b/c eventlisteners only work on DOM elements
        blackBackground(div);
    }
}

//adds color to individual grids 
function blackBackground (div) {
    div.onmouseover = () => {
        div.classList.add("black-box");
    }
}

setupGrid(DEFAULT_SIZE);
// console.log(typeof gridItem); // returns object