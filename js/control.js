var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.width=screen.width*0.5;
context.canvas.height=screen.height*0.3;

rectangle = {

    height:32,
    jumping:true,
    width:32,
    x:144,
    x_velocity:0,
    y:0,
    y_velocity:0

};

controller = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event){
        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode){

            case 37: //37 is the left arrow key
                controller.left=key_state;
                break;
            case 38: //38 is the up arrow key
                controller.up=key_state;
                break;
            case 39: //39 is the right arrow key
                controller.right=key_state;
                break;
        }
    }
};

loop = function(){
    
    if(controller.up && rectangle.jumping==false){

        rectangle.y_velocity-=20;
        rectangle.jumping=true;

    }

    if(controller.left){

        rectangle.x_velocity-=0.5;

    }

    if(controller.right){

        rectangle.x_velocity+=0.5;

    }


    //'physics' calculations
    rectangle.y_velocity+=1.5;
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9;
    rectangle.y_velocity *= 0.9;

    y_border=180 - 16 - rectangle.height;

    if(rectangle.y> y_border){

        rectangle.jumping=false;
        rectangle.y_velocity=0;
        rectangle.y=y_border;

    }

    if(rectangle.x < 0){

        rectangle.x_velocity=0;
        rectangle.x=0;
        
    }else if(rectangle.x>canvas.width){

        rectangle.x_velocity=0;
        rectangle.x=canvas.width;

    }

}




window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);