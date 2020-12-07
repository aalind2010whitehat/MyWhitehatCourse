
  
  function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
  }
  
  function draw() {
    image(video, 200, 150, 300, 250);
   
    
  }
  
  function take_snapshot(){    
    save('aalind.png');
  }

  