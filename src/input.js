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
    }
}