
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
let lastRandomTime=0;
const gameBoard=document.getElementById('game-board')
function main(currentTime){
    const secondsSenseLastRende = (currentTime - lastRandomTime)/1000
    if(secondsSenseLastRende < 1 /SNAKE_SPEED)  return

    console.log('Render')
    lastRandomTime = currentTime
    update()
    draw()


}
window.requestAnimationFrame(main)

function update() {
    updateSnake()

}
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)

}