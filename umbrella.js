class Umbrella{
    constructor(x,y,radius){

    this.image=loadImage("umbrella.jpg")
  
        var options={
            isStatic:true,
        }
    
    this.body = Bodies.circle(x, y, 50, options);
    this.r= 50;
 
    World.add(world, this.body);
    }

 display(){


    var pos=this.body.position
   
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,300,300);
 
}
    }
