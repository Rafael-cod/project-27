class Rope{
    constructor(body1, point2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            pointB: point2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    }

    function display(){
        push()
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
    
        strokeWeight(2);

        var Anchor1X = ponitA.x;
        var Anchor1Y = ponitA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        pop();
    }
    
