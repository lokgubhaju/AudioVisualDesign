var paragraph;
var heading;

let hoverOverMe;
let showInfo = false;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
    
    paragraph = createElement('h1', 'Welcome to');
    paragraph.id('type');
    paragraph.parent('heading');

    heading = createElement('h2', 'Solar System');
    heading.id('title');
    heading.parent('heading');


    link = createA("./intro.html", 'Enter', '_self');
    link.class('click');

}
function draw() {
   
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
