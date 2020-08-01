class App{
    constructor(){
        this.name = null;
        //Chat, call, video call, order stuff, emergency contact numbers, reminders for checkup
        //GPS Tracker, pay bills/insurance
        this.chat = createButton('Chat');
        this.order = createButton('Orders');
        this.contacts = createButton('Contacts');
        this.settings = createButton('Settings');
        this.reminders = createButton('Reminders');
    }
    chat(){
      
    }
    order(){

    }
    contacts(){
      
    }
    pay(){

    }
    reminders(){
        
    }  
    display(){
        this.chat.position=(displayWidth/4, displayHeight/4);
        this.order.position=(displayWidth/4, displayHeight/3);
        this.contacts.position=(displayWidth/4, displayHeight/2);
        this.settings.position=(displayWidth/4, displayHeight/2+50);
        this.reminders.position=(displayWidth/4, displayHeight/2+100);
        this.chat.mousePressed(()=>{
            appState = "chat";
        });
        this.order.mousePressed(()=>{
            appState = "order";
        });
        this.contacts.mousePressed(()=>{
            appState = "contacts";
        });
        this.settings.mousePressed(()=>{
            appState = "pay";
        });
        this.reminders.mousePressed(()=>{
            appState = "reminders";
        });
    }
}