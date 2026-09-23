const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize_button");

for(let i = 1; i <= 256; i++) {

    const square = document.createElement("div");

    container.appendChild(square);

    square.addEventListener("mouseenter", function () {
        
        square.style.backgroundColor = "black";
    })

}
resizeBtn.addEventListener("click", function () {

    const input = prompt("Enter Grid Size (1-100):");
    const gridSize = Number(input);

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

    // Purana grid clear
    container.innerHTML = "";

    console.log(gridSize);

    // Naya grid generate
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement("div");

        container.appendChild(square);

        square.style.width = `${640 / gridSize}px`;
        square.style.height = `${640 / gridSize}px`;

        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "black";
        });
    }

});