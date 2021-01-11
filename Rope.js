class Rope{
    consructor(bodyA,pointB){
var option={
    bodyA:bodyA.body,
    pointB:pointB,
    stiffness:1.2,
    length :250
}
this.rope=Contraint.create(option);
World.add(world,this.rope);
this.pointB=pointB;
    }

    display(){
        console.log(this.rope.bodyA.position);
        console.log(this.pointB);
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(2);
        stroke("black");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}