class Start
{
    constructor()
    {}

    page()
    {
        if(appState == "start"){
            form = new Form();
            form.display();
        }
        if(appState == "child" || appState == "parent"){
            app = new App();
            app.display();
        }
        if(appState == "start"){

        }
    }  
}