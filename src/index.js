import Paddle from './paddle.js';
// import csv form 'csv-parser';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle();
paddle.draw(ctx);
console.log("index");