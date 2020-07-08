class Paper {

    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }

        this.body = Bodies.circle(50, 600, 35, options);
        World.add(world, this.body);
        this.image=loadImage("paper.png");
    }

    display() {
        fill("pink");
        ellipseMode(CENTER);
        ellipse(this.body, 50, 600 ,70,70)
        imageMode(CENTER);
        image(this.image, 50, 600 ,70,70);
    }
}