leftWristX = 0;
rightWristX = 0;
distance = 0;
function setup(){
    webcam = createCapture(VIDEO);
    webcam.size(500 , 520);
    canvas = createCanvas(550 , 480);
    canvas.position(500 , 190);

    PoseNet = ml5.poseNet(webcam , modelloaded);
    PoseNet.on('pose' , result);
}

function modelloaded(){
    console.log("PoseNet is Initialized!!");
}

function result(answer){
    if(answer.length > 0){
        console.log(answer);
        leftWristX = answer[0].pose.leftWrist.x;
        rightWristX = answer[0].pose.rightWrist.x;
        distance = floor(leftWristX - rightWristX);
        console.log("Left Wrist X= "+ leftWristX + " ,Right Wrist X= " + rightWristX + " ,Distance between both wrists = " + distance);
    }
}

function draw(){
    strokeWeight(10);
    stroke('blue');
    background('#78f5b6');
    textSize(distance);
    fill('#fc03a1');
    text('VANYA' , 50 , 100 , 300 , 300);
    textAlign(CENTER);
    textFont('KoHo');
}