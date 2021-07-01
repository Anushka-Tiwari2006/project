class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("hydra.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<4){
        push ()
      var pos =this.body.position;
      imageMode(CENTER);
      fill("black");
      image(this.image,pos.x, pos.y, this.width+280, this.height+20);

      pop ()
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility = this.visibility-5;
      pop();


    }
  }
  };