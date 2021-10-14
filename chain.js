class chain{
   constructor(bodyA,bodyB){
var option={
    bodyA:bodyA,bodyB:bodyB,length:10,stiffness:0.4
}
this.chain1=Constraint.create(option)
World.add(world,this.chain1)
   }
   display(){
       var pointA=this.chain1.bodyA.position
       var pointB=this.chain1.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
   }
}