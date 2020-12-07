class Paper{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.6,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,width,height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
  }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        strokeWeight(1);
        stroke("white");
        fill("white");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}