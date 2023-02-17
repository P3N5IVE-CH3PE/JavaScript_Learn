let favoriteBooks = [];
  
   function addfavoriteBook(bookName){
       
        if (!bookName.includes("Great")){
           favoriteBooks.push(bookName);

           console.log(`Added: ${bookName}`);
        } else {
            console.log(`I don't like that book!`);
        }
                                       }

  
   


 addfavoriteBook("The Great Gatsby");
 addfavoriteBook("Crime & Punishment");
 addfavoriteBook("Great Expectations");
 addfavoriteBook("You Don't Know JS");

 
 
 
 function printFavoriteBooks(){
 
     for (let favoriteBook of favoriteBooks){

              console.log(`Favorite Books Are: ${favoriteBook}`);
    }


 }



