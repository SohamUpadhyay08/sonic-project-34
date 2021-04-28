/*class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5 ,
            lenght:10           
        }
    
       this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
   
   display(){

        
     
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
           
                strokeWeight(7);
                fill("black")
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}*/

class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            fill("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}