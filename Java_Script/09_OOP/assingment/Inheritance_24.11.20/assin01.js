//----------------------------book list assignment : es5 ----------------------------------

/** Step 1 :
 * two types (two constructor functions):
 * book list (props : array of books)
 * book (props : title, author, isbn)
 */

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function BookList(books) {
  this.listOfBooks = Array.from(books);
}

/**Step 2 :
 * to the prototype of bookList add the below :
 * method add(book) adds the book to this.books
 * method delete(isbn) delete the book which has isbn from this.books
 *
 */

BookList.prototype.add = function (book) {
  // when adding an existing book

  let index = this.listOfBooks.findIndex((item) => item.isbn == book.isbn);

  if (index < 0) {
    this.listOfBooks.push(book);
  } else {
    console.error(`BOOK: ${book.isbn} already Exist`);
  }
};
BookList.prototype.delete = function (isbn) {
  // please handle when no isbn found

  let index = this.listOfBooks.findIndex((item) => item.isbn == isbn);
  if (index >= 0) {
    this.listOfBooks.splice(index, 1);
  } else {
    console.error(`ISBN ${isbn} could not be found`);
  }
};

let book = new Book("JAVA", "Ericson", 222);
let book1 = new Book("PHP", "matheos", 2224);

let array = [book, book1];

let listBook = new BookList(array);

//array.pop();
console.log(listBook);
//console.log(array);
listBook.add(book);
console.log(listBook);

listBook.delete(222);
console.log(listBook);
