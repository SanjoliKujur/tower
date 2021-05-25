class Polygon {
    constructor(x,y,r) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:0.2
        }

        this.x = this.x;
        this.y = this.y;
        this.r = this.r;
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image,0,0,this.r*2, this.r*2);
        pop();




    }
}