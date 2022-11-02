let tool = 'black'
let click = false;
const sizeBtn = document.querySelector('.size')
const blackBtn = document.querySelector('.black')
const grayBtn = document.querySelector('.gray')
const rainbowBtn = document.querySelector('.rainbow')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')
const inputSize = document.querySelector('.input-size')

//selection of tools
blackBtn.addEventListener('click', () => {
    changeTool('black');
    click = false;
})

grayBtn.addEventListener('click', () => {
    changeTool('gray');
    click = false;
})

rainbowBtn.addEventListener('click', () => {
    changeTool('rainbow');
    click = false;
})

eraserBtn.addEventListener('click', () => {
    changeTool('white');
    click = false;
})

clearBtn.addEventListener('click', () => {
    clearBoard();
    click = false;
})

//onclick, the board will reset and resize
sizeBtn.addEventListener('click', () => {
    let board = document.querySelector('.grid');
    let removeSquare = board.querySelectorAll('div');
    removeSquare.forEach((div) => div.style.backgroundColor = 'white');
    click = false;
    inputSize.addEventListener('change', changeSize(inputSize.value));
})


//this will create the board
function createBoard(size) {
    let board = document.querySelector('.grid');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardSize = size * size
    for (let i = 0; i < boardSize; i++) {
        let square = document.createElement("div");
        square.id = 'grid'
        square.addEventListener('mouseover', draw);
        board.insertAdjacentElement("beforeend", square)
    }
}

//change the grid size
function changeSize(input) {
    if (input >= 2 && input <= 64) {
        createBoard(input);
    } else {
        alert('Choose between 2 and 64')
    }
    
}

//reset everything in the board
function clearBoard() {
    let input = document.querySelector('input');
    input.value = '';
    let board = document.querySelector('.grid');
    let removeSquare = board.querySelectorAll('div');
    removeSquare.forEach((div) => div.remove());
}

//hover to draw
function draw() {
    if (click) {
        if (tool === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = tool;
        }
    }
}

//change the tool (pen/eraser/clear board)
function changeTool(choice) {
    tool = choice;
}

//toggle mouseover
document.querySelector(".grid").addEventListener("click", () => {
      click = !click;
    })

createBoard(16);