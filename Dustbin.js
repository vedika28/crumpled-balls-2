class Dustbin {

    constructor() {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(700, 570, 130, 130, options);
        World.add(world, this.body);
        this.image=loadImage("dutbin.png");
        this.width = 100;
        this.height = 100;
        World.add(world,this.image);
    }

    display() {
        imageMode(CENTER);
        image(this.image ,700,600,this.width,this.height);
    }
}