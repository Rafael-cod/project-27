class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 0.2,
            length: 150

        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
    
        push()
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        strokeWeight(2);
        stroke(200,50,50);

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        pop();
    }
}
