function preload(){

}
function setup(){
    canvas= createCanvas(600, 400);
    canvas.position(100, 200);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 00, 00, 600, 400);
    circle(00, 00, 30);
    circle(00, 400, 30);
    circle(600, 00, 30);
    circle(600, 400, 30);
    rect(0, 00, 3, 4000);
    rect(0, 00, 6000, 3);
    rect(597, 00, 3, 6000);
    rect(00, 397, 4000, 3);
}
function takesnapshot(){
    save('Image.png');
}