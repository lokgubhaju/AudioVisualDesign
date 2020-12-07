var wave;

var button;
var slider;
var playing = false;

var audioCanvas;
function setup() {
  audioCanvas = createCanvas(400, 400);
  audioCanvas.position(770,20);

  wave = new p5.Oscillator();
  slider = createSlider(100, 1200, 440);
  slider.position(800,425);

  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(0);

  button = createButton('Play/Pause');
  button.position(950,425)
  button.mousePressed(toggle);
}

function draw() {
  wave.freq(slider.value());
  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  if (playing = !playing) {
    wave.amp(0.5, 1);
  } else {
    wave.amp(0, 1);
  }
}