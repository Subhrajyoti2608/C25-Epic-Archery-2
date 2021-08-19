class PlayerArcher {
    constructor(x, y, width, height, angle){
       var options={
           
           isStatic : true
       } 
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.angle=angle
       this.image = loadImage("./assets/playerArcher.png");
   
       World.add(world, this.body);
     
    }
    display() {
        
            if (keyIsDown(UP_ARROW) && this.angle < 1.77){
                this.angle = 0.1
            }
    
            if(keyIsDown(DOWN_ARROW) && this.angle > 1.47){
               this.angle = -0.1
            }
            
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
    
        pop();
      }
}

