class Form {
  constructor() {
    this.input=createInput("Name")
    this.button=createButton("Play")
    this.greeting=createElement("H2")
    this.title=createElement("H1")
  }

  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()

  }
  display(){
    
this.title.html("Car Racing Game");
this.title.position(displayWidth/2-50, 20);
    

 this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

    player.name=this.input.value()
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });

  }
}
