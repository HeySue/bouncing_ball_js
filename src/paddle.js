export default class Paddle{
    constructor(){
        this.width = 60;
        this.height = 12;
        console.log("h");
    }

    draw(ctx){
        ctx.fillStyle = "#ee8c86";
        ctx.fillRect(200, 200, this.width, this.height);
        // console.log('draw');
    }


}
    