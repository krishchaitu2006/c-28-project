class Chain{

    constructor(bodyA,bodyB) {

        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 300,
            stiffness : 1,
        }

        this.chain = constraint.create(options);

        World.add(world,this.chain);

    }


    
     display(){


        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(4);
        stroke("red");

        line(pointA.x,pointA.y,pointB.x,pointB.y);


    }
    


}