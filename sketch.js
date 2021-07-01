const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "title"
var pc,stair,stairGroup;
var sound1,background;
var zBack6
var score = 0;
var life = 1
 var power=0
var chain,chain2,chain3,chain4,chain5;

function preload(){
   zImage = loadImage("26.png");
   zImage2 = loadImage("32.png");
   zImage3 = loadImage("33.png");
   pcImg  = loadImage("34.png");
   zBack = loadImage("1 back.jpeg")
   log  = loadImage("35.png");
   gImg  = loadImage("36.png");
   sImg = loadImage("skull.png");
   dImg = loadImage("29.png");
   dImg2 = loadImage("28.png");
   sound1 = loadSound("level1.mp3")
   sound2 = loadSound("level2.mp3")
   pcImg = loadImage("34.png")
   pcImg2 = loadImage("pc2.png")
   gaintImg = loadImage("24.png")
   mImg = loadImage("25.png")
   mImg2 = loadImage("501.png")
   sword = loadImage("sw.png")
   fly = loadImage("butter.png")
   
   aback3 = loadImage("13.png")
   
   sback = loadImage("3back.jpeg")
   poly = loadImage("pcpwer.png")
   borisImg = loadImage("boris.png")
   coin = loadSound("mario_pick_coin.mp3")
   sound3 = loadSound("music.mp3");
   hydraImg = loadImage("hydra.png")
   bushes = loadImage("bushes.png")
   bushes2 = loadImage("bushes2.png")
   bushes3 = loadImage("bushes3.png")
   l = loadImage("lava1.png");
   l2 = loadImage("lava2.png");
   bImg = loadImage("beam.png")
   slide1= loadImage("story1.png")
   slide2= loadImage("story2.png")
   slide3= loadImage("story3.png")
   title= loadImage("title.png")
   rule1 = loadImage("level1.png")
   rule2 = loadImage("level2.png")
   rule3 = loadImage("level3.png")
   playerOut = loadImage("end.png")
   overImg = loadImage("over2.png")
   overImg2 = loadImage("over3.png")

  

 }
function setup() {
  createCanvas(1320,650);
  engine = Engine.create();
  world = engine.world;

 
  background1 = createSprite(800,300,10,100);
  background1.addImage(zBack);
  

  stairGroup = new Group();
  zombGroup = new Group();
  skullGroup = new Group();
  scoreGroup = new Group();
  bodyGroup = new Group();
   //level2
   monsterGroup = createGroup();
   monsterGroup2 = createGroup()
   gaintGroup = createGroup();
   weaponGroup = createGroup()
   //level3
   hydraGroup = createGroup()
   lavaGroup = createGroup()
   lavaGroup2 = createGroup()
   beamGroup = createGroup()
   frostGroup = createGroup()
  
  

  pc = createSprite(100, 200, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.56;
  pc.setCollider("rectangle",0,0,200,340);

  ground = createSprite(99,368,800,20);
  ground.addImage(gImg);
  ground.scale = 0.6;
  ground.setCollider("rectangle",0,0,400,100);

  ground2 = createSprite(20,508,63050,80);
  ground2.shapeColor = "black";
 
  skull2 = createSprite(12710,400,20,80);
  skull2.addImage(sImg)
  skull2.scale = 0.9;
  
  
  for(s = 700;s<12710;s=s+1500){
    body = createSprite(s,480,20,80);
    body.addImage(dImg)
    body.scale = 0.3;

    var img = Math.round(random(1,2));
    switch(img){
     case 1: body.addImage(dImg);
        break;
     case 2: body.addImage(dImg2); 
        break;
        default:break;
    }

    bodyGroup.add(body)
    }
   
    for(a = 300;a<12710;a=a+250){
    score = createSprite(a,100,20,80);
    score.addImage(fly)
    score.scale = 0.8;
    score.setCollider("circle",0,-30,20)

    scoreGroup.add(score);

  }
  
  
  for(var i =300;i<12710;i=i+250){ 
    stair = createSprite(i,random(30,350),80,10);
    stair.addImage(log);
    stair.scale = 0.3
    stair.setCollider("rectangle",0,0,300,100)
  
    stairGroup.add(stair);
    
  }

  pc2 = createSprite(12000,610,20,20)
   pc2.addImage(pcImg)
   pc2.scale = 0.7
   pc2.setCollider("rectangle",0,0,200,340);

   
 
 
  score = 0

  
 
    
    //#stack2
    h15= new Ground(6000, 600, 70, 70);
    h16= new Ground(6070, 600, 70, 70);
    h17= new Ground(6140, 600, 70, 70);
    h18= new Ground(6210, 600, 70, 70);
    h19= new Ground(6280, 600, 70, 70);
    h20= new Ground(6350, 600, 70, 70);

    h21 = new Ground(6070, 525, 70, 70);
    h22 = new Ground(6140, 525, 70, 70);
    h23 = new Ground(6210, 525, 70, 70);
    h24 = new Ground(6280, 525, 70, 70);
    h25 = new Ground(6140, 460, 70, 70);
    h26 = new Ground(6210, 460, 70, 70);
    h27 = new Ground(6180, 390, 70, 70);

    
   
    staticGround3 = new Ground2(5980,620,1000,10);

    Polygon = Bodies.circle(5890,400,20,25);
    World.add(world,Polygon);

  //  Polygon2 = Bodies.circle(1600,400,20,25);
   /// World.add(world,Polygon2);

  //  Polygon3 = Bodies.circle(5890,400,20,25);
  //  World.add(world,Polygon3);

    //Polygon4 = Bodies.circle(8950,400,20,25);
    //World.add(world,Polygon4);

   // Polygon5 = Bodies.circle(11950,400,20,25);
   // World.add(world,Polygon5);

    
    

    

    chain = new SlingShot(this.Polygon,{x:5890,y:400})
  
    m1 = createSprite(9044, 400, 30, 200);
    m2 = createSprite(9080, 480, 120, 30);
    m3 = createSprite(9140, 400, 80, 50);
    m4 = createSprite(9300, 300, 30, 150);
    m5 = createSprite(9200, 320, 90, 30);
    m6 = createSprite(9250, 600, 30, 100);
    m7 = createSprite(9300, 540, 150, 30);
    m8 = createSprite(9400, 460, 30, 180);
    m9 = createSprite(9400, 280, 170, 30);
    m10 = createSprite(9500, 225, 30, 140);
    m11 = createSprite(9620, 230, 100, 30);
    m12 = createSprite(9600, 315, 30, 200);
    m13 = createSprite(9580, 430, 180, 30);
    m14 = createSprite(9580, 510, 30, 100); 
    
    m1.setCollider("rectangle",0,0,200,600)
    m4.setCollider("rectangle",0,0,200,600)
    m6.setCollider("rectangle",0,0,200,500)
    m8.setCollider("rectangle",0,0,200,600)
    m10.setCollider("rectangle",0,0,200,500)
    m12.setCollider("rectangle",0,0,200,600)
    m14.setCollider("rectangle",0,0,200,500)
    m2.setCollider("rectangle",0,0,600,200)
    m3.setCollider("rectangle",0,0,600,200)
    m5.setCollider("rectangle",0,0,600,200)
    m7.setCollider("rectangle",0,0,600,200)
    m9.setCollider("rectangle",0,0,600,200)
    m11.setCollider("rectangle",0,0,600,200)
    m13.setCollider("rectangle",0,0,600,200)
    
    m1.addImage(bushes2)  
    m2.addImage(bushes)  
    m3.addImage(bushes)  
    m4.addImage(bushes3)  
    m5.addImage(bushes)  
    m6.addImage(bushes3)  
    m7.addImage(bushes)  
    m8.addImage(bushes2)  
    m9.addImage(bushes)  
    m10.addImage(bushes3)  
    m11.addImage(bushes)  
    m12.addImage(bushes3)  
    m13.addImage(bushes)  
    m14.addImage(bushes3)
    m1.scale = 0.2 
    m2.scale = 0.2  
    m3.scale = 0.2
    m4.scale = 0.2
    m5.scale = 0.2 
    m6.scale = 0.2 
    m7.scale = 0.2 
    m8.scale = 0.2 
    m9.scale = 0.2 
    m10.scale = 0.2 
    m11.scale = 0.2 
    m12.scale = 0.2 
    m13.scale = 0.2 
    m14.scale = 0.2 

  h1 = createSprite(11000,570,20,20)
  h2 = createSprite(13000,570,20,20)
  h1.addImage(hydraImg)
  h2.addImage(hydraImg)
  h1.setCollider("rectangle",0,0,400,500)
  h2.setCollider("rectangle",0,0,400,500)
  h1.debug = true

  boris = createSprite(15000,570,20,20)
  boris.addImage(borisImg)
  boris.scale = 0.83

 
 

}
function draw() {
  background("black")
  Engine.update(engine);
  console.log(pc2.x,mouseY)

 

  if(gameState === "title"){
  
    background(title)
    if(keyDown("a")){
      gameState="slideA"
    }  
      
  }

  else if(gameState === "slideA"){
    
   
    background(slide1)
    
    if(keyDown("b")){
      gameState="slideB"
    }  
  }
  else if(gameState === "slideB"){
    background(slide2)

    if(keyDown("c")){
      gameState="slideC"
    }  
  }
  else if(gameState === "slideC"){

    background(slide3)
    if(keyDown("d")){
      gameState="rulesA"
    }  
  }
  else if(gameState === "rulesA"){
  
    background(rule1)
    if(keyDown("e")){
      gameState="levelA"
    }  
    
 
  }

 

  else if(gameState==="levelA"){

   // sound1.play()
    
   
    background1.addImage(zBack);
    background1.scale = 1;
    pc2.visible = false;
    

  if(pc.isTouching(scoreGroup)){
    score = score+1
    scoreGroup[0].destroy();
    coin.play()
  }

  pc.visible = true

  if(keyDown("up")&&pc.y>1 ) {
    pc.velocityY = -18;
    pc.velocityX = 5; 
    }
  
  pc.velocityY = pc.velocityY + 0.8;
   
  pc.collide(stairGroup);
  pc.collide(ground);


  
  zombies();
  skullFun();
  camera.position.x  = pc.x;
  camera.position.y = 200;

  if(pc.isTouching(zombGroup)||pc.isTouching(skullGroup)||pc.isTouching(ground2)){
    gameState = "end";
    }

    else if(score>=1){
      gameState = "rules2"
    }

    

    
    
  drawSprites();
  fill("white")
  textSize(25)
  text("Energy level : "+score,10,-50)
        
  }
  else if(gameState==="rules2"){
    background(rule2)
    if(keyDown("f")){
      gameState ="levelB"
    }
    
  
   
  }

  else if(gameState === "levelB"){
    //sound1.stop()
   // sound2.play()
    
  ground .visible = false
  skull2.visible = false;
  bodyGroup.destroyEach();
  ground2.visible  = false;
  zombGroup.destroyEach();
  skullGroup.destroyEach();
  stairGroup.destroyEach();
  scoreGroup.destroyEach();


 

  background1.addImage(aback3)
  background1.x  = 10
  background1.scale = 0.75
  pc2.visible =false
    
  // background1.changeImage(zBack3)

  ground = createSprite(10,700,100000,70) 
  ground.shapeColor = "black"

  if(keyCode===37){
    pc.velocityX -=4
    pc.addImage(pcImg)
  }
  if(keyCode===39){
    pc.velocityX +=4
    pc.addImage(pcImg2)
  }
  if(keyCode===38){
    pc.velocityY -=4
    pc.addImage(pcImg)
  }
  if(keyCode===40){
    pc.velocityY +=4
    pc.addImage(pcImg)
  }
    
  if(weaponGroup.isTouching(gaintGroup)){
    gaint2.destroy();
    
    life = life +1
    coin.play();
    
    if(life>1){

      butter = createSprite(140,200,10,10)
    butter.addImage(fly);
  
    }
    if(life>2){
      butter2 = createSprite(200,200,10,10)
    butter2.addImage(fly);
  
    }
    if(life>3){
      butter3 = createSprite(260,200,10,10)
    butter3.addImage(fly);
  
    }
    if(life>4){
      butter4 = createSprite(340,200,10,10)
    butter4.addImage(fly);
  
    }
    if(life>5){
      butter5 = createSprite(400,200,10,10)
    butter5.addImage(fly);
  
    }
    if(life>6){
      butter6 = createSprite(460,200,10,10)
    butter6.addImage(fly);
  
    }
    if(life>7){
      butter7 = createSprite(80,200,10,10)
      butter7.addImage(fly);
    
    }
    if(life>8){
      butter8 = createSprite(80,200,10,10)
    butter8.addImage(fly);
  
    }
    if(life>9){
      butter9 = createSprite(80,200,10,10)
    butter9.addImage(fly);
  
    }
    if(life>10){
      butter10 = createSprite(80,200,10,10)
    butter10.addImage(fly);
  
    }
    }

    else if(life===0||gaintGroup.isTouching(pc)||monsterGroup.isTouching(pc)||monsterGroup2.isTouching(pc)){
        //gameState = "end"
      }
    else if(life>=2){
        gameState = "rulesC"
      }

  gaintFun();
  monsterFun();
  weaponFun();
  drawSprites();

  fill("white")
  textSize(20)
  text("Energy : "+life,50,100)

  pc.x = 100
  pc.y = 400
  camera.position.x = pc.x
  camera.position.y = pc.y

  }

  else if(gameState === "rulesC"){
    background(rule3)
    if(keyDown("g")){
      gameState = "levelC"
    }
  }   

  else if(gameState === "levelC"){
   
   background1.addImage(sback)
   background1.scale = 1.2
   background1.y = 450

   pc2.visible =true;
   
   monsterGroup.destroyEach()
   gaintGroup.destroyEach();
   monsterGroup2.destroyEach()
   ground.y = 760

   

  
if (keyDown("up")) {
    pc2.velocityX = 0;
    pc2.velocityY = -6;
  }
if (keyDown("down")) {
  pc2.velocityX = 0;
  pc2.velocityY = 6;
}
if (keyDown("left")) {
  pc2.velocityX = -6;
  pc2.velocityY = 0;
}
if (keyDown("right")) {
  pc2.velocityX = 6;
  pc2.velocityY = 0;
}
if (keyWentUp("up")|| keyWentUp("down")) {
  pc2.velocityY = 0;
}
if (keyWentUp("left")|| keyWentUp("right")) {
  pc2.velocityX = 0;
}
  if(keyDown("enter")){
    pc2.scale = 0.2
  }
  if(keyDown("a")){
    pc2.scale = 0.7
  }
 
  if (pc2.isTouching(m1)||pc2.isTouching(m2)||pc2.isTouching(m3)||pc2.isTouching(m4)||pc2.isTouching(m5)||pc2.isTouching(m6)||pc2.isTouching(m7)||pc2.isTouching(m8)||pc2.isTouching(m9)||pc2.isTouching(m10)||pc2.isTouching(m11)||pc2.isTouching(m12)||pc2.isTouching(m13)||pc2.isTouching(m14)) {
    pc2.x = 8500;
    pc2.y = 400;
    pc2.scale = 0.7
  }
  

    
    else if(lavaGroup.isTouching(pc2)||lavaGroup2.isTouching(pc2)||beamGroup.isTouching(pc2)||pc2.isTouching(h1)||pc2.isTouching(h2)){
      gameState="end"
    }
    if(frostGroup.isTouching(boris)){
      boris.destroy() 
      frostGroup[0].destroy()
      gameState = "overGame" 
      }
    else if(frostGroup.isTouching(h1)){
      h1.destroy() 
      frostGroup[0].destroy() 
      }
    else if(frostGroup.isTouching(h2)){
      h2.destroy()
      frostGroup[0].destroy() 
      }
    else if(frostGroup.isTouching(lavaGroup)){
      lavaGroup[0].destroy()
      frostGroup[0].destroy() 
      }
    else if(frostGroup.isTouching(lavaGroup2)){
      lavaGroup2[0].destroy()
      frostGroup[0].destroy() 
      }
    else if(frostGroup.isTouching(beamGroup)){
    beamGroup[0].destroy()
    frostGroup[0].destroy() 
      }

      


  
   
   


   frostNova();
   beamOfDestruction();
   waveOfLava();
   drawSprites();
   
   
   
    camera.position.x = pc2.x;
    camera.position.y = 460;
    
    h15.display();
    h16.display();
    h17.display();
    h18.display();
    h19.display();
    h20.display();
    h21.display();
    h22.display();
    h23.display();
    h24.display();
    h25.display();
    h26.display();
    h27.display();
    staticGround3.display();
    chain.display();
    
    
   imageMode(CENTER);
   image(poly, Polygon.position.x, Polygon.position.y, 200, 200); 
     
     
  
   
   
       
       
     
    }

    else if(gameState === "overGame"){
      background(overImg2)
      if(keyDown("q")){
        gameState = "overGame2"
      }
    }

    else if(gameState === "overGame2"){
      background(overImg)
    }
    else if(gameState === "end"){
      background(playerOut)
      
    }
    
    
    

     

    // imageMode(CENTER);
     //image(poly, Polygon2.position.x, Polygon2.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon3.position.x, Polygon3.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon4.position.x, Polygon4.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon5.position.x, Polygon5.position.y, 200, 200); 
      
}
 
  
  
 
 

 function zombies(){
  
  if(frameCount%20===0){
   zomb = createSprite(1,460,20,20);
   zomb.velocityX =random(4,8);
   
  var rand = Math.round(random(1,3));
  switch(rand){
   case 1: zomb.addImage(zImage);
      break;
   case 2: zomb.addImage(zImage2); 
      break;
   case 3: zomb.addImage(zImage3);
      break;  
      default:break;

      }
  zomb.scale = 0.4;
  //zomb.debug = true
  zomb.setCollider("rectangle",40,0,200,340);
  zombGroup.add(zomb)
  } 
 }

 function skullFun(){
  if(frameCount%20===0){
    sk = createSprite(random(8000,13050),10,10,10);
    sk.velocityY = 6;
    sk.addImage(sImg)
    sk.scale = 0.2
    //sk.debug = true
    sk.setCollider("circle",0,-40,80)
    skullGroup.add(sk)
  }
 }

 function gaintFun(){
  if(frameCount%200===0){
    gaint2 = createSprite(1,400,30,30);
    gaint2.addImage(gaintImg);
    gaint2.scale = 0.6;
    gaint2.velocityX = -4;
    gaint2.y = random(50,800);
    gaintGroup.add(gaint2);
    

    gaint2.setCollider("rectangle",0,0,100,200)
  }
 }

 function monsterFun(){
  if(frameCount%180===0){
    monster = createSprite(1,400,10,10)
    monster.addImage(mImg2)
    monster.scale = 0.3
    monster.velocityX  = -4
    monster.y = random(50,800)
    
    monster.setCollider("rectangle",0,0,100,200)


    monsterGroup.add(monster)
    
    
  }
  if(frameCount%240===0){
    monster2 = createSprite(1,400,10,10)
    monster2.addImage(mImg)
    monster2.scale = 0.3
    monster2.velocityX = 4
    monster2.y = random(50,800)
    
    monster2.setCollider("rectangle",0,0,100,200)


    monsterGroup2.add(monster2)
  } 
 }

 function weaponFun(){
  if(keyDown("space")){
    weapon = createSprite(1,1,10,10)
    weapon.velocityX = 6
    weapon.addImage(sword)
    weapon.scale = 0.4;
    weapon.x = pc.x;
    weapon.y = pc.y;
    
    weapon.lifetime = 300
    weapon.setCollider("rectangle",0,0,300,200)


    weaponGroup.add(weapon)
  }
 }

 function mouseDragged(){

  Matter.Body.setPosition(this.Polygon,{x:mouseX,y:mouseY})
 
  }
  
  function mouseReleased(){
     chain.fly() 
     
  }
  function keyPressed(){
    if(keyCode === 32){
        chain.attach(Polygon);
        
    }
  }

  function waveOfLava(){
    if(pc2.x>10000)
   { if (frameCount%60===0){
      lava = createSprite(11000,random(400,580),10,10)
      lava.velocityX = -5

      var rand = Math.round(random(1,2))
      switch(rand){
        case 1: lava.addImage(l)
        break;
        case 2: lava.addImage(l2)
        break;
        
      }
      lava.scale = 0.28;
      
      lava.setCollider("rectangle",0,0,200,200)
      lavaGroup.add(lava)

  }}

  if(pc2.x>11400)
  { if (frameCount%60===0){
     lava2 = createSprite(13000,random(400,580),10,10)
     lava2.velocityX = -5

     var rand2 = Math.round(random(1,2))
     switch(rand2){
       case 1: lava2.addImage(l)
       break;
       case 2: lava2.addImage(l2)
       break;
       default:break;
     }
     lava2.scale = 0.28
    
     lava2.setCollider("rectangle",0,0,200,200)
     lavaGroup2.add(lava2)
 }}
 
}

function beamOfDestruction(){
  if(pc2.x>14000){
    if(frameCount%100===0){
      beam = createSprite(15000,random(400,580),40,40)
      beam.velocityX = -5
      beam.addImage(bImg)
      beam.scale = 0.2
      beam.debug =true
      beamGroup.add(beam)
    }
  
  }
  
}

function frostNova(){
  if(keyWentDown("f")){
    
    frost = createSprite(1,1,10,10)
    frost.velocityX = 6
    frost.addImage(poly)
    frost.scale = 0.4;
    frost.x = pc2.x;
    frost.y = pc2.y;
    
    frost.setCollider("rectangle",0,0,160,300)
    frostGroup.add(frost)}

  
}
