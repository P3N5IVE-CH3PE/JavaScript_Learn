let favoriteBooks = [];

 
class Bookshelf {

    constructor(){
        this.favoriteBooks = [];

    }
 
   addfavoriteBook(bookName){
       
        if (!bookName.includes("Great")){
           this.favoriteBooks.push(bookName);

           console.log(`Added: ${bookName}`);
        } else {
            console.log(`I don't like that book!`);
        }
                                       }




 printFavoriteBooks(){
 
     for (let favoriteBook of this.favoriteBooks){

              console.log(`Favorite Books Are: ${favoriteBook}`);
    }


 }


 addfavoriteBook("The Great Gatsby");
 addfavoriteBook("Crime & Punishment");
 addfavoriteBook("Great Expectations");
 addfavoriteBook("You Don't Know JS");







}


