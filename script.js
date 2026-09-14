const container = document.getElementById("container");

for(let i = 1; i <= 256; i++) {

    const square = document.createElement("div");

    container.appendChild(square);

    square.addEventListener("mouseenter", function () {
        square.style.backgroundColor = "black";
    })

}