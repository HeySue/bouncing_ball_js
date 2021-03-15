export default class Ball{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.img = document.getElementById("ball");
        this.position = {
            x: 200,
            y: 200
        };
        this.size = 20;
        this.maxSpeed = {
            x: 8,
            y: 3
        }
        this.speed = {
            x: -this.maxSpeed.x,
            y: this.maxSpeed.y
        }
    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size, this.size);
    }

    update(ctx){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x < 0 || this.position.x > this.gameWidth - this.size)
            this.speed.x = - this.speed.x;
        if (this.position.y < 0 || this.position.y > this.gameHeight - this.size)
            this.speed.y = - this.speed.y;
    }


    
}