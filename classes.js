class Page {

    constructor(text) {

    this.text = text;

    } 

    print(){
        
        console.log(this.text);
    }
}

var test = new Page("Bob");

test.print();


class Notebook {

    constructor(){
    
        this.pages = [];

    }

    addPage(text){
        
        var page = new Page(text);
        this.pages.push(page);

    }
    print(){

    for (let page of this.pages){

            page.print();
            
            } 

    }

}

var mathNotes = new NoteBook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos ta.");

mathNotes.print();







