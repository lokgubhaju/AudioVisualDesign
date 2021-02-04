//Audio variables
var wave;

var button;
var slider;
var playing = false;
var audioCanvas;

//Visual variables
let planet = [];
var cnv;
var env;


function setup(){
    cnv = createCanvas(768,500);
    cnv.position(0,0);
    cnv.parent('visual-canvas');
    for(let i = 0; i<10; i++){
        let x = random(width);
        let y = random(height);
        let r = random(10,40);
        let p = new Planet(x, y, r);
        planet.push(p);
    }
    
    //Audio Setup
    audioCanvas = createGraphics(400, 400);
    audioCanvas.position(770,20);
    audioCanvas.parent('audio-canvas');

    env = new p5.Env();
    env.setADSR(0.04, 0.12, 0.5, 1);
    env.setRange(0.8, 0);

    wave = new p5.Oscillator();
    slider = createSlider(100, 1200, 440);
    slider.position(800,425);

    wave.setType('sine');
    wave.start();
    wave.freq(440);
    wave.amp(env);

    button = createButton('Play/Pause');
    button.position(950,425)
    button.mousePressed(toggle);

}

/*
function mouseDragged(){
    let r = random(10,40);
    let p = new Planet(mouseX, mouseY, r);
    planet.push(p);
}
*/
function mousePressed(){
    for(let i = 0; i<planet.length; i++){
        planet[i].clicked(mouseX, mouseY);
    }
}

function draw(){
    background(255);
    cnv.position(0,0);
    
    for(let i = 0; i< planet.length; i++){
        planet[i].rotate();
        planet[i].update();
    }

    //Audio draw
    wave.freq(slider.value());
    if (playing) {
       noFill();
    } else {
        background(100);
    }
}

function toggle() {
    if (playing = !playing) {
      wave.amp(0.5, 1);
      
    } else {
      wave.amp(0, 1);
      
    }
    // Env function of ADSR
    //env.play();
  }

class Planet{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = 0;
    }

    clicked(px,py){
        let d = dist(px,py,this.x, this.y);
        if(d < this.r){
            this.color = 255;
        }
    }
    rotate(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
    }
    
    update(){  
        stroke(255);
        fill(this.color, 100);
        ellipse(this.x,this.y,this.r * 2);  
    }
}

