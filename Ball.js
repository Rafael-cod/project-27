class Ball {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.2,
          'friction':0.1,
          'density':1.7
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }
  