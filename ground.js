class Ground {
    constructor(x,y,width,height){
        var options= {isStatic:true};
        this.body= Bodies.rectangle(x,y,width,height,options)
    
        this.width= width //give same value as the value in the constructor
        this.height= height //give same value as the value in the constructor
    
        World.add(world,this.body)
    }
display(){

    var pos= this.body.position;
    rectMode(CENTER);
    fill("red");

    rect(pos.x,pos.y,this.width,this.height)
} 










}
