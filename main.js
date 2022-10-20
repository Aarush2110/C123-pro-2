function setup(){
    video  = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log("PoseNet is Initialized ")
}

function gotPose(results)
{
    if(results.length > 0){
        console.log(results);

    }
}