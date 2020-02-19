const gridspace = document.querySelector("#gridspace");
const resetButton = document.querySelector("#reset");
const clearButton = document.querySelector("#clear");
const colorButton = document.querySelector("#color");
const squares = document.getElementsByClassName("squares");
gridspace.style.height = "800px";
gridspace.style.width = "801px";

function createGrid(input) {
    for (i=0; i<input; i++) {
        let row = document.createElement('div');
        row.classList.add('squares');
        for (j = 1; j < input; j++) {
            let col = document.createElement('div');
            col.classList.add('squares');
            gridspace.appendChild(col);
        }
        gridspace.appendChild(row);
    }
    for (i=0; i < squares.length; i++) {
        squares[i].style.height = `${(800-2*input)/input}px`;
        squares[i].style.width = `${(800-2*input)/input}px`;
        squares[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
        }, false);

    }; 
};

function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
};

function clearGrid() {
    for (i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'lightgray';
    }
}

function newGrid(newInput) { 
    gridspace.innerHTML = "";
    newInput = prompt("How many squares would you like per side of the grid?");
    createGrid(newInput);
};


createGrid(16);


resetButton.addEventListener('click', function () {
    newGrid();
});

clearButton.addEventListener('click', function () {
    clearGrid();
});

colorButton.addEventListener('click', function () {
    colorGen();
    let color = colorGen();
    for (i=0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = color;
        }, false);

    }; 
});







