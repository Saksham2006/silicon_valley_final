class Form{
    constructor(){
      this.title = createElement('h1');
      this.greeting = createElement('h2');
      this.startButton = createButton('Start');
      }
    hide(){
      this.title.hide();
      this.startButton.hide();
    }
    buttons(){
      this.helperButton.mousePressed(()=>{
        appState = "child";
        child = new Child();
      });
      this.parentButton.mousePressed(()=>{
        appState = "parent";
        parent = new Parent(); 
      });
    }
    display(){
      //var title = createElement('h1');
      this.title.html("Welcome to ");
      this.title.position(520, 70);
      this.startButton.position(700,250);
      this.startButton.mousePressed(()=>{
        this.title.hide();
        this.startButton.hide();
        this.input = createInput("Name"); 
        this.input.Visibility=255;
        this.helperButton = createButton('Child');
      this.parentButton = createButton('Parent');
      this.helperButton.position(displayWidth/2+30, displayHeight/2);
      this.parentButton.position(displayWidth/2-60, displayHeight/2);
        this.parentButton.Visibility=255;
        this.helperButton.Visibility=255;
        this.input.position(600, 200);
        this.greeting.position(500,500);
        helper.name = this.input.value();
        helper.update();
        this.greeting.html("Welcome, "+helper.name+", Please choose");
        appState = "chooseButton"
            });
        /*this.helperButton.mousePressed(()=>{
          appState = "child";
          child = new Child();
        });
        this.parentButton.mousePressed(()=>{
          appState = "parent";
          parent = new Parent(); 
        });*/
    }
}