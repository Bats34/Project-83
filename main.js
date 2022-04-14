var enter_mouseevent="empty";
var last_positionx,last_positiony;
Canvas=document.getElementById("my_canvas");
ctx=Canvas.getContext("2d");
colour="red";
width=1;
Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    colour=document.getElementById("colour_input").value;
    width=document.getElementById("width_input").value;
    enter_mouseevent="mouseDown";

}
Canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    currentpositonofx=e.clientX-Canvas.offsetLeft;
    currentpositonofy=e.clientY-Canvas.offsetTop;
    if(enter_mouseevent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.moveTo(last_positionx,last_positiony);
        ctx.lineTo(currentpositonofx,currentpositonofy);
        ctx.stroke();
    }
    last_positionx=currentpositonofx;
    last_positiony=currentpositonofy;
}
Canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    enter_mouseevent="mouseup";
}
Canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    enter_mouseevent="mouseleave";
}

var width = screen.width;
new_width= screen.width-70;
new_height=screen.height-300;
if (width<992) {
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}

Canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    
    console.log("my_touchstart");
    color = document.getElementById("colour_input").value;
    width_of_line = document.getElementById("width_input").value;
    
    last_position_of_x=e.touches[0].clientX-Canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-Canvas.offsetTop;

 
}



Canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - Canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
   

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
function clearArea() {
    ctx.clearRect(0,0,ctx.Canvas.width, ctx.Canvas.height);
}
