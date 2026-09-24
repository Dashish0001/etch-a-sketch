// Mode Setup
let currentMode = "random";


// Element Selection
const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize_button");
const blackBtn = document.getElementById("black_btn");
const randomBtn = document.getElementById("random_btn");
const darkenBtn = document.getElementById("darken_btn");
const resetBtn = document.getElementById("reset_btn");


// Square Creation
function createGrid(gridSize) {
    container.innerHTML = "";

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement("div");

        square.style.width = `${640 / gridSize}px`;
        square.style.height = `${640 / gridSize}px`;

        container.appendChild(square);

        // Hover Effects
        square.addEventListener("mouseenter", function () {

            if (currentMode === "black") {
                square.style.backgroundColor = "black";

            } else if (currentMode === "darken") {
                const color = getComputedStyle(square).backgroundColor;
                let rgb = color.match(/\d+/g).map(Number);

                // Default Color
                if (color === "rgba(0, 0, 0, 0)") {
                    rgb = [255, 255, 255];
                }

                // Darken Color
                const r = Math.floor(rgb[0] * 0.9);
                const g = Math.floor(rgb[1] * 0.9);
                const b = Math.floor(rgb[2] * 0.9);

                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            } else {
                // Random Colors
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    }
}


// Initial Grid
createGrid(16);


// Button Controls
blackBtn.addEventListener("click", function () {
    currentMode = "black";
});

randomBtn.addEventListener("click", function () {
    currentMode = "random";
});

darkenBtn.addEventListener("click", function () {
    currentMode = "darken";
});


// Grid Resizing
resizeBtn.addEventListener("click", function () {
    const input = prompt("Enter Grid Size (1-100):");
    const gridSize = Number(input);

    // Input Validation
    if (
        input === null ||
        input.trim() === "" ||
        !Number.isInteger(gridSize) ||
        gridSize < 1 ||
        gridSize > 100
    ) {
        alert("Enter a whole number between 1 and 100!");
        return;
    }

    createGrid(gridSize);
});


// Reset Colors
resetBtn.addEventListener("click", function () {
    const squares = container.querySelectorAll("div");

    squares.forEach(function (square) {
        square.style.backgroundColor = "";
    });
});