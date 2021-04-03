class Ball {

    constructor(x,y){

    var options = {
        'restitution':1.5,
        'friction':1,
        'density':1, 
    }

    this.body = Bodies.rectangle(x,y,60,40,options);
    this.width = 30;
    this.height = 30;

    World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("gold");
        fill("white");
        ellipse(0,-15,this.width,this.height);
        pop();

    }

}