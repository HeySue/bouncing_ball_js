export default class Paddle{
    constructor(gameWidth, gameHeight, maxSpeed=4){
        this.width = 110;
        this.height = 15;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: (gameWidth - this.width) /2,
            y: gameHeight - this.height - 10
        }
        this.maxSpeed = maxSpeed;
        this.speed = -this.maxSpeed;
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.speed = this.maxSpeed;
    }
    draw(ctx){
        ctx.fillStyle = "#ee8c86";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(ctx){
        this.position.x += this.speed;

        if (this.position.x < 0 ) 
            this.position.x = 0;
        if (this.position.x > this.gameWidth - this.width) {
            this.position.x = this.gameWidth - this.width;
        }
    }

}
    