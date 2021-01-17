class Monster{
    constructor(x,y,r){
    var options={
        density:1
        //frictionAir:1
    }
    this.body = Bodies.circle(x,y,r,options);
    this.radius = r
    this.image = loadImage("images/Monster-01.png");
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position
    var ang = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    imageMode(RADIUS);
    image(this.image,0,0,this.radius,100);
    pop();
    }
}
