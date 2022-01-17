function preload(){


}

function setup(){

    canvas = createCanvas(640,480);
    canvas.position(200,300);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
    
}
function draw(){

    image(video, 140, 120 , 350, 250);
    circle(60, 50, 80);  //top-left
    circle(60, 430, 80); // bottom-left
    circle(590, 50, 80); // top-right
    circle(590, 430, 80); //bottom-right
    rect(35, 80, 55, 320); //left
    rect(565, 80, 55, 320); //right
    rect(95, 20,465,55); //top
    rect(95, 410,465,55); //bottom
    fill(0,255,0);
}
function take_snapshot(){

    save("student_name.png");
}