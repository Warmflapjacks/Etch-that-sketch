//global variables
const DEFAULT_SIZE = 50;
const grid = document.getElementById("grid");
const buttons = document.querySelectorAll("button");

//event listener for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "reset") {
            //gets amount of squares per side from user
            let userInput = parseInt(window.prompt("How many squares per side? Entry cannot be more than 100."));
            
            //input validation
            if (userInput <= 100) {
            setupGrid(userInput);
            clearGrid();
            }

            else {
                alert("Invalid selection. Squares per side cannot be more than 100. Please try again.");
            }
        }
        //create an RBG function inside conditional statement
        if (button.id === "rainbow") {
            console.log("Im the rainbow button")
        }
    })
})


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

function clearGrid () {
   const element = document.querySelectorAll(".grid-item");
   
   for (let i = 0; i < element.length; i++) {
       element[i].classList.remove("black-box");
   }
}

setupGrid(DEFAULT_SIZE);