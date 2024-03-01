function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag = rover_image;
}


function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width. canvas.height);
}


function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_y, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keypressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keypressed == '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
}


function up()
{ 
    if(rover _y >=0)
    {
        roverv_y = rover _y - 10;
        console.log("When up arrow is pressed, x = " = rover_y);
        uploadBackground();
        uploadrover();
    }                            
}                                                      
                           
                          