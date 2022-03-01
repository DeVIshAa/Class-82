var MouseEvents="empty";
var LastPositionX,LastPositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
WidthOfLine=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    WidthOfLine=document.getElementById("WidthOfLine").value;
    MouseEvents="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(MouseEvents=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=WidthOfLine;
        console.log("Last Position of X and Y Coordinates= ");
        console.log("X = "+LastPositionX+"Y = "+LastPositionY);
        ctx.moveTo(LastPositionX,LastPositionY);
        console.log("Current Position of and Y Coordinates= ");
        console.log("X = "+current_position_of_mouse_x+"Y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    LastPositionX=current_position_of_mouse_x;
    LastPositionY=current_position_of_mouse_y;
}
canvas.getEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    MouseEvents="mouseUP";
}
canvas.getEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    MouseEvents="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}