class ball {
    constructor() {
      var options = {
        isStatic:false,
       restitution:1.2,
       friction:0.5,
       density:1.2
      }
      this.image=loadImage("ball.png");
      this.body = Bodies.circle(56,86,70,options);
      this.radius=70;
      World.add(world, this.body);
    }
    display(){
        
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
  };

  