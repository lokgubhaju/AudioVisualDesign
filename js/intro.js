let planets = [];
let asteroids = [];
var playing = false;
var env;
var wave;

var distance, b = 255;
function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
   // cnv.mousePressed(playEnv);

    //setting planet colors
    let mercury_color = color(255,235,200);
    let venus_color = color(217,107,42);
    let earth_color = color(47,82,225);
    let mars_color = color(229,53,32);
    let jupiter_color = color(229,115,33);
    let saturn_color = color(38,194,25);
    let uranus_color = color(136,218,229);
    let neptune_color = color(47,204,229);
    let pluto_color= color(217, 122, 116);

    
    //creating planets
    mercury = new Planet(15,94,0.035, mercury_color);
    venus = new Planet(17,125,0.007, venus_color);
    earth = new Planet(30,160,0.006, earth_color);
    mars = new Planet(15, 190, 0.005, mars_color);
    jupiter = new Planet(50,225,0.004, jupiter_color);
    saturn = new Planet(34,115,0.003, saturn_color);
    uranus = new  Planet(22,135,0.002, uranus_color);
    neptune = new Planet(27,300,0.01, neptune_color);
    pluto = new Planet(20,325,0.009, pluto_color);

    planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
    

    planetMercury = createP('Mercury');
    planetMercury.id('planetName');
    planetMercury.mouseOver(monoSynth);
    planetMercury.mouseOut(monoSynth);

    planetVenus = createP('Venus');
    planetVenus.id('planetName');
    planetVenus.style('top: 55px;');
    planetVenus.mouseOver(polySynth);

    planetEarth = createP('Earth');
    planetEarth.id('planetName');
    planetEarth.style('top: 115px;');
    planetEarth.mouseOver(monoSynth);
    // planetEarth.mouseOver();
    
    planetMars = createP('Mars');
    planetMars.id('planetName');
    planetMars.style('top: 175px;');
    planetMars.mouseOver(polySynth);
    planetMars.mouseOut(polySynth);

    planetJupiter = createP('Jupiter');
    planetJupiter.id('planetName');
    planetJupiter.style('top: 235px;');

    planetSaturn = createP('Saturn');
    planetSaturn.id('planetName');
    planetSaturn.style('top: 295px;');
    
    planetUranus = createP('Uranus');
    planetUranus.id('planetName');
    planetUranus.style('top: 355px;'); 
    // planetUranus.mouseOver(musicUranus);
    // planetUranus.mouseOut(musicUranus);


    planetNeputune = createP('Neputune');
    planetNeputune.id('planetName');
    planetNeputune.style('top: 415px;'); 
    planetNeputune.mouseOver(playEnv);
    planetNeputune.mouseOut(playEnv);

    planetPluto = createP('Pluto');
    planetPluto.id('planetName');
    planetPluto.style('top: 475px;');
    planetPluto.mouseOver(monoSynth);
    planetPluto.mouseOut(monoSynth);


    for(let i = 0; i < 300; i++) {
        asteroids.push(new Asteroid());
    }

    

    //Audio
    env = new p5.Envelope();
    env.setADSR(0.04, 0.12, 0.5, 1);
    env.setRange(0.8, 0);

    wave = new p5.Oscillator();
    // slider = createSlider(100, 1200, 440);
    // slider.position(800,425);


    wave.setType('sine');
    wave.amp(env);
    wave.freq(440);
    wave.start();
    
    let intervalInSeconds = 0.25;
    soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);

    //MonoSynth
    synth = new p5.MonoSynth();

    //PolySynth
    synth2 = new p5.PolySynth();


    //musicUranus
    // synth3 = new p5.MonoSynth();

    
}

function draw() {
    background(60);
    translate(width/2, height/2);
    noStroke();
    fill(b, 201, 0);
    ellipse(0,0,150,150);

	distance = dist(mouseX, mouseY, width/2, height/2);
	if(distance<50) {
        b = 0;
        playEnv();
	} else {
        b =300;

    }
    
    for(i in planets) {
        planets[i].show();
        planets[i].orbit();
    }


    for(let i = 0; i < asteroids.length; i++) {
        asteroids[i].draw();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }