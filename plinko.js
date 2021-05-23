class Pinklo {
    constructor(x,y,r){
        var options={
        //bouncy thing
        restitution:0,
        //friction is friction
        friction:0,
        //and density is density
        density:1.2

        }
        this.radius=r;
        this.body=Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body)
    }
    display(){
        var pinkloPos=this.body.position;
        push ()
        //rectMode(CENTER);
        translate (pinkloPos.x,pinkloPos.y)
        //rotate (this.angle)
        ellipse (0,0,this.radius,this.radius)
        pop ()
    }
} 