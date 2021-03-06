export default class InputHandler{
    constructor(ctx, paddle){
        document.addEventListener('keydown', (event) => {
            switch(event.keyCode){
                // left
                case 37:
                    paddle.moveLeft();
                    break;
                // right
                case 39:
                    paddle.moveRight();
                    break;
            }
        } );
        document.addEventListener('keyup', (event) => {
            switch(event.keyCode){
                // left
                case 37:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                // right
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        } );
    }
}