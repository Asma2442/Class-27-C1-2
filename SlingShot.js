class SlingShot {
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        strokeWeight(4)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}