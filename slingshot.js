class Slingshot {
    constructor(bodyA, anchor){
        var options = {
            bodyA : bodyA,
            pointB :anchor,
            stifness : 0.05,
            length : 8
        }
        this.bodyA = bodyA;
        this.pointB = anchor;
        this.slingShot = Constraint.create(options);
        World.add(world,this.slingShot);
    }
    attach(body){
        this.slingShot.bodyA = body;
    }

    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
        if(this.slingShot.bodyA) {
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}