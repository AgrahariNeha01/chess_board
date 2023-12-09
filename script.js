
  







function createGrid(rows, cols) {
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";

  let cellNumber = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = (i + j) % 2 === 0 ? "white-cell" : "black-cell";
      cell.textContent = cellNumber++;
      gridContainer.appendChild(cell);
    }
  }

  document.body.appendChild(gridContainer);
}

function createDiceButton() {
  const button = document.createElement("button");
  button.className="dice";
  button.textContent = "Dice";
  button.addEventListener("click", rollDice);

  document.body.appendChild(button);
}


function createResetButton() {
  const button = document.createElement("button");
  button.className="reset";
  button.textContent = "Reset";
  button.addEventListener("click", resetPointer);

  document.body.appendChild(button);
}

function createPointer() {
  const pointer = document.createElement("div");
  pointer.className = "pointer";
  pointer.textContent = "1";

  document.body.appendChild(pointer);
}


function rollDice() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  const pointer = document.querySelector(".pointer");

  
  let currentCell = parseInt(pointer.textContent);
  currentCell += diceNumber;


  pointer.textContent = currentCell;

 
  const cells = document.querySelectorAll(".grid-container > div");
  cells.forEach((cell) => cell.classList.remove("highlight"));
  cells[currentCell - 1].classList.add("highlight");
}


function resetPointer() {
  const pointer = document.querySelector(".pointer");
  pointer.textContent = "1";


  const cells = document.querySelectorAll(".grid-container > div");
  cells.forEach((cell) => cell.classList.remove("highlight"));
}


createGrid(10, 10);
createDiceButton();
createResetButton();
createPointer();
