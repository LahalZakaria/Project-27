class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY}
        }

        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    display(){

        var point1 = this.Rope.bodyA.position;
        var point2 = this.Rope.bodyB.position;

        var Anchor1X = point1.x
        var Anchor1y = point1.y

        var Anchor2x = point2.x + this.offsetX
        var Anchor2y = point2.y + this.offsetY

        stroke(2)

        line(Anchor1X,Anchor1y,Anchor2x,Anchor2y);
        

    }

}
