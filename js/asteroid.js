class Asteroid
{
    constructor ()
    {
        this.angle = random(-360, 360);
        this.radius = random(0, 30) + 500;
        this.direction = int(random(0, 2)) == 1 ? 1 : -1;
    }
    draw()
    {
        push();
        fill(200,210,200);
        rotate(this.angle);
        ellipse(this.radius, 0, 5, 5);
        this.angle += this.direction * 0.0009;
        pop();
    }
}