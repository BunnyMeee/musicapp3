song1_status = "";
song2_status = "";
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(400,300);
    

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on("pose" , gotPoses);
}
function draw(){
    image(video, 0, 0, 400, 400);
    song1_status = song1.isPlaying();
    song2_status = song1.isPlaying();

}
song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("never.mp3");
    song2 = loadSound("amongus.mp3");
}
function play(){
    song.play;
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
    }
}
