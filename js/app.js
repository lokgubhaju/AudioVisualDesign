let mercury;
let venus;
let earth;
let earth_land;
let mars;
let jupiter;
let rings;
let empty;
let saturn;
let i = 0 ;
let dia;

var distance, b;
function setup() {
  createCanvas(windowWidth, windowHeight)
	mercury = new Planet(1, 60, 10, 1);
	venus = new Planet(1, 80, 15, 0.85);
	earth = new Planet(1, 100, 15, 0.75);
	earth_land = new Planet(random(4), random(96,104), 5, 0.75);
	mars = new Planet(1, 130, 12.5, 0.7);
	jupiter = new Planet(1, 180, 22.5, 0.6);
	rings = new Planet(1, 220, 29, 0.45);
	empty = new Planet(1, 220, 23.5, 0.45);
	saturn = new Planet(1, 220, 19.5, 0.45);
}

function draw() {
  
	background(0);
	drawStars();
	// Sun
	fill(b, 84, 74);
	ellipse(width/2, height/2, 60,60);

	distance = dist(mouseX, mouseY, 100, 100);
	if(distance<50) {
		b = 0
	} else {
		b =300;
	}

	fill(80, 82, 80);
	mercury.drawPlanet();
	fill(212, 199, 152);
	venus.drawPlanet();
	fill(115, 151, 217);
	earth.drawPlanet();
	fill(81, 176, 76);
	earth_land.drawPlanet();
	fill(176, 81, 81);
	mars.drawPlanet();
	fill(191, 159, 99);
	jupiter.drawPlanet();
	fill(149, 207, 232);
	rings.drawPlanet();
	fill(0);
	empty.drawPlanet();
	fill(232, 203, 149);
	saturn.drawPlanet();

	

}

function drawStars() {
	for(i = 0; i <50; i++) {
		if(random(1,4) == 1) {
			fill(255);
		}
		else {
			if(random(1,4) == 2) {
				fill(0,255,255);
			}
			else {
				if(random(1,4) == 3) {
					fill(255,0,0);
				}
				else	{
					if(random(1,4) == 4) {
						fill(77,132,176);
					}
				}
			}	
		}

		dia = random(1,4)
		ellipse(random(width), random(height), dia,dia);
	}
}


class Planet {
	//Attributes
	

	//Constructor
	Planet(angle_, distance_, size_, speed_) {
		angle = angle_;
		distance = distance_;
		size = size_;
		speed = speed_;
		x_pos = width/2 + sin(radians(angle)) * distance;
		y_pos = height/2 + cos(radians(angle)) * distance;
	}
	//Actions
	drawPlanet() {
		ellipse(x_pos, y_pos, size, size);
		x_pos = width/2 + sin(radians(angle)) * distance;
		y_pos = height/2 + cos(radians(angle)) * distance;
		angle += speed;
	}
		
}


