class Player{
    constructor(x, y, d){
        this.body = Bodies.circle(x,y,d)
        this.d = d
        World.add(world,this.body)
    }
    show(){
        let pos = this.body.position
        push()
        ellipseMode(CENTER)
        noStroke()
        fill(255, 255, 255)
        ellipse(pos.x, pos.y, this.d)
        pop()
    }

}