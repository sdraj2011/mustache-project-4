nosex=0;
nosey=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/rwSp7WFW/m.png");
}  
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotposes(results) {
    if(results.length>0){
        console.log(results);
   nosex=results[0].pose.nose.x-15;
   nosey=results[0].pose.nose.y+14;
    }

}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save("clown nose filter.png");
}
