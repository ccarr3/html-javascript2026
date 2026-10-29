alert:("Welsome to the Lab")
/*
Allows you to comment multiple lines of code
Week 4 Lab - Experimenting with canvas animation
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



var fps = 1000/60;
var timer = setInterval(game, fps);

var startPoint = {x:canvas.width/2, y:canvas.height/2};//canvas.width/2
var moveDirection = {x:1, y:1};

var boxColor = "red";
var shipSprite = {Image:document.getElementById("ship"),x:1,y:1,moveX:0, moveY:0};

function createStar(){
var star = {
    x:0, 
    y:0, 
    radius:0, 
    color:"black",
    drawCircle:function(){
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    }
    return star;
}



var starcount = 50;
var stars = []; //creates an array

for(var i = 0; i < starcount, i++;){
    stars[i] = createStar();
    stars[i].x = Math.random() * canvas.width
    stars[i].y = Math.random() * canvas.height
    stars[i].radius = Math.random() * 25;
console.log(stars[i])
}

shipSprite.x = canvas.width/2;
shipSprite.y = canvas.height/2 + 100;

var a = false;
var d = false;
var w = false;
var s = false;

document.addEventListener("keydown", function(e){
    console.log(e.key)
    if (e.key == "a"){
    a = true;
    }
    if (e.key == "d"){
    d = true;
    }
    if (e.key == "w"){
    w = true;
    }
    if (e.key == "s"){
    s = true;
    }

});
document.addEventListener("keyup", function(e){
    console.log(e.key)
    if (e.key == "a"){
    a = false
    }
    if (e.key == "d"){
    d = false
    }
    if (e.key == "w"){
    w = false
    }
    if (e.key == "s"){
    s = false
    }
});
//this is our game loop function
function game(){
    //clear the screen
    ctx.clearRect(0,0, canvas.width, canvas.height)
    if(a == true){
        shipSprite.x -= 1
    }
    if(d == true){
        shipSprite.x += 1
    }
    if(w == true){
        shipSprite.y -= 1
    }
    if(s == true){
        shipSprite.y += 1
    }
    
    if(shipSprite.x > canvas.width){
        shipSprite.x = -20
    }
    if(shipSprite.x < -20){
        shipSprite.x = canvas.width
    }
    if(shipSprite.y > canvas.height){
        shipSprite.y = -20
    }
    if(shipSprite.y < -20){
        shipSprite.y = canvas.height
    }
    if(startPoint.y > canvas.height - 25 || startPoint.y < 0){
        moveDirection.y *= -1;
        boxColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
    if(startPoint.x > canvas.width - 25 || startPoint.x < 0){
        moveDirection.x *= -1;
        boxColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
    
    
    startPoint.x += moveDirection.x;
    startPoint.y += moveDirection.y;
    ctx.fillStyle = boxColor;
    ctx.fillRect(startPoint.x, startPoint.y, 25, 25);
    console.log(stars.length)
    for(var i = 0; i< stars.length, i++;){
        //draw all the stars
        stars[i].drawCircle();
        console.log(stars[i])
    }

    ctx.fillStyle = boxColor;
    ctx.fillRect(startPoint.x, startPoint.y, 25, 25);
    ctx.drawImage(shipSprite.Image, shipSprite.x, shipSprite.y, 25, 25);
}