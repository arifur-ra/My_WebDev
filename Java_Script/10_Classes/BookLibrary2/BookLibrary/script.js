/**
 * create a class named Book
 * constructor
 * build below props :
 * title , author, isbn
 * method change(key, value)
 *
11:25
**
 * create a class named BookList
 * constructor
 * build below props :
 * books // (meant to contain elements from Type Book)
 * methods :
 * addBookToList(book)
 * deleteBook(isbn)
 *
 */

 class Book{
     /**
      * 
      * @param {string} title 
      * @param {string} author 
      * @param {number} isbn 
      */

     constructor (title, author, isbn){
         this.title = title;
         this.author = author;
         this.isbn = isbn;
     }
 }

 class BookList{
     /**
      * 
      * @param {[]} books 
      */
     constructor (books){
         this.books = Array.from(books);
     }

     addBookToList(book){
        //  var i=0;
        //  while(this.books.indexOf(book,i)>=0){
        //      if(this.books[this.books.indexOf(book,i)].isbn == book.isbn) return 'Book already exists.';
        //      i++;
        //  }
        if(this.books.findIndex(x => x.isbn === book.isbn)>=0){
            return 'Book already exists';
        }else{
            this.books.push(book);
            return 'Book added.';
        }
     }

     deleteBook(isbn){
         this.books.forEach(function(item, index, object){
             if (item.isbn == isbn){
                 object.splice(index,1);
                 document.getElementById("display-message").innerHTML = "Book deleted.";
                 return index;
             }
         });
     }
 }

// let book1 = new Book('java', 'safwan', 256987);
// let book2 = new Book('react', 'Glauber', 420420);
// let book3 = new Book('html', 'Adam', 242424);
// let book4 = new Book('css', 'Arif', 39098);
// let book5 = new Book('Bob the King', 'Matheus', 420);
// let list = new BookList([book1, book2, book3, book4]);


// console.log(list);
let listOfBooks = new BookList([]);

class UI{
    addBookToUI(book){
        let tableBody = document.getElementById("display-body");
        tableBody.innerHTML += `<tr id= '${book.isbn}'><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
    }

    deleteBookFromUI(isbn){
        document.getElementById(`${isbn}`).remove();
    }
}

function addBook(){
    let ui = new UI();
    let book = new Book(document.getElementById('title').value,document.getElementById('author').value, document.getElementById('isbn').value);
    document.getElementById("display-message").innerHTML = listOfBooks.addBookToList(book);    
    if(document.getElementById("display-message").innerHTML == 'Book added.') ui.addBookToUI(book);
    console.log(listOfBooks);
}

function removeBook(){
    let ui = new UI();
    listOfBooks.deleteBook(document.getElementById('remove-isbn').value);
    ui.deleteBookFromUI(document.getElementById('remove-isbn').value);
    console.log(listOfBooks);
}



