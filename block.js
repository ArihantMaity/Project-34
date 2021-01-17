class Block{
    constructor(x,y){
    var options = {
        restitution:0.8,
        friction:1,
        density:20
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50
    this.height = 50
    
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var ang = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        strokeWeight(4)
        stroke(0);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}