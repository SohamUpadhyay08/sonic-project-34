class Hero{
    constructor(x,y,width,height){
      var options ={ 
        density:1,
        frictionAir:0.5
      }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.image = loadImage("sonic1.png")
      this.width = width;
      this.height = height;
      
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
}