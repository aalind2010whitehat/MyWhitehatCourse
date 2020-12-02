NoseX = 0
NoseY = 0

function preload() {
mustache = loadImage("https://i.postimg.cc/fT4YChcn/151-1516315-french-mustache-clipart-transparent-background-mustache-png-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function modelLoaded() {
    console.log('Posenet is initialized');
    }

function gotPoses(results) {
    if (results.length > 0) 
       console.log(results);
       NoseX =  + results[0].pose.nose.x - 100 ;
       NoseY =  + results[0].pose.nose.y + 0 ;

       console.log("Nose X =" + NoseX);
       console.log("Nose Y =" + NoseY);
    
   
    }

function draw( ) {
    image(video, 0, 0, 300, 300);
    image(mustache, NoseX, NoseY, 200, 100 )
  
}

function take_snapshot() {
    save('FilterImage')
}