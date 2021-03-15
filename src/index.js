import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
let inputHandler = new InputHandler(ctx, paddle);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(){
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(ctx); 
    paddle.draw(ctx);
    ball.draw(ctx);
    ball.update(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
console.log("index");