const X_CLASS = "x"
const CIRCLE_CLASS ="circle"
let WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const cellElements = document.querySelectorAll("[data-cell]")
const board = document.getElementById("board")
const winningMessage = document.getElementById("winningMessage")
const winningTextElement = document.querySelector("[data-winning-message-text]")
const restartBtn = document.getElementById("restartBtn")
let circleturn

startGame()

restartBtn.addEventListener("click", startGame)

function startGame (){
    circleturn = false
    cellElements.forEach((cell) =>{
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener("click", handleClick)
        cell.addEventListener("click", handleClick, {once: true}) // fire eventlistener only once
    })
    setBoardHoverClass()
    winningMessage.classList.remove("show")
}

function handleClick(e){
    const cell = e.target
    const currentClass = circleturn ? CIRCLE_CLASS : X_CLASS
    placemark(cell, currentClass)

    if(checkWin(currentClass)){
        endGame(false)
    }else if(draw()){
        endGame(true)
    }else{
        swapturn()
    setBoardHoverClass()
    }
}

const placemark = (cell, currentClass) =>{
    cell.classList.add(currentClass)
}

function swapturn(){
    circleturn= !circleturn
}

function setBoardHoverClass(){
    board.classList.remove(CIRCLE_CLASS)
    board.classList.remove(X_CLASS)
    if(circleturn){
        board.classList.add(CIRCLE_CLASS)
    } else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some((combination)=>{
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function draw(){
    return [...cellElements].every((cell)=>{
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function endGame(draw){
    if(draw){
        winningTextElement.innerText= "Draw!"
        winningMessage.classList.add("show")
    }else{
        winningTextElement.innerText= `${circleturn ? "O's" : "X's"} Wins!`
        winningMessage.classList.add("show")
    }
}