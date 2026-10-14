// Set player names.

const name1 = document.getElementById("p1Name");
const name2 = document.getElementById("p2Name");
let playerOne = window.prompt('Player One Name:', "Player One");
let playerTwo = window.prompt('Player Two Name:', "Player Two");
const player1Symbol = 'X';
const player2Symbol = 'O';
name1.textContent = playerOne;
name2.textContent = playerTwo;

// Grid array
const box1 = document.getElementById("square1");
const box2 = document.getElementById("square2");
const box3 = document.getElementById("square3");
const box4 = document.getElementById("square4");
const box5 = document.getElementById("square5");
const box6 = document.getElementById("square6");
const box7 = document.getElementById("square7");
const box8 = document.getElementById("square8");
const box9 = document.getElementById("square9");
const grid = [
    box1, box2, box3, box4, box5, box6, box7, box8, box9
]

// Turn indicator
let currentSymbol;
let turn;
let random = Math.round(Math.random());

if (random === 0) { turn = true }
else { turn = false };

// Switch player after turn
function turnSwitcher() {

    if (!turn) {
        name1.style.backgroundColor = "lime";
        name2.style.backgroundColor = "red";
        currentSymbol = 'X';
    }
    else {
        name1.style.backgroundColor = "red";
        name2.style.backgroundColor = "lime";
        currentSymbol = 'O';
    }
}

// Winning conditions
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Buttons
turnSwitcher();
function buttonGenerator() {
    for (let i = 0; i < grid.length; i++) {
        const btn = document.createElement("button");
        grid[i].appendChild(btn);
        btn.addEventListener("click", () => {
            btn.remove();
            grid[i].textContent = currentSymbol;
            turn = !turn;
            turnSwitcher();
            winChecker();
        })
    }
}

buttonGenerator();

// Check for 3-in-a-row
function winChecker() {
    for (let i = 0; i < winner.length; i++) {
        const [a, b, c] = winner[i];
        const valA = grid[a].textContent;
        const valB = grid[b].textContent;
        const valC = grid[c].textContent;
        if (valA !== '' && valA === valB && valB === valC) {
            if (currentSymbol === 'X') {
                window.alert(playerTwo + ' wins!');
            }
            else {
                window.alert(playerOne + ' wins!');
            }
            location.reload();
        }
    }
}