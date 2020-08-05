class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituution:0.3,
            friction:0.1,
           
    }

this.body = Bodies.circle(x, y, 5, options);
this.r= 5;

World.add(world, this.body);
}

display(){

var pos=this.body.position
push();
strokeWeight(3);
fill(255,0,255)
translate(pos.x, pos.y);
ellipse(0,0,this.r,this.r);
pop();
}
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }

}
}