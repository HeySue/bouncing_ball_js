export default class Ball{
    constructor(gameWidth, gameHeight){
        this.position = {
            x: 200,
            y: 200
        };
        this.size = 20;
        this.img = document.getElementById("ball");
    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size, this.size);
    }
}