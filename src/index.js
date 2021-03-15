import Paddle from './paddle.js';
// import csv form 'csv-parser';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

function gameLoop(){
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(ctx); 
    paddle.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
console.log("index");