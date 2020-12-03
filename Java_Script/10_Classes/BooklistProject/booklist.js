// using class constructor;
/**
 * create a class named Book
 * constructor
 * build below props :
 * title , author, isbn
 * method change(key, value)
 *
 * create a class named BookList
 * constructor
 * build below props :
 * books // (meant to contain elements from Type Book)
 * methods :
 * addBookToList(book)
 * deleteBook(isbn)
 *
 */

class Book {
  /**
   * @param {string} title
   * @param {string} author
   * @param {number} isbn
   */
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  change(key, value) {
    this[key] = value;
  }
}

class BookList {
  /**
   * @param {Book[]} books
   */
  constructor(books) {
    this.books = Array.from(books);
  }

  addBookToList(book) {
    let index = this.books.findIndex((item) => item.isbn == book.isbn);

    if (index >= 0) {
      return "Book already exist, could not added";
    } else {
      this.books.push(book);
      return "Book added Successfully";
    }
  }
  deleteBook(isbn) {
    // let index = this.books.findIndex((item) => item.isbn == isbn);
    // if (index < 0) {
    //   return {
    //     msg: `Book is not in the list`,
    //     flag: false,
    //   };
    // }
    // this.books.splice(index, 1); {
    //   return {
    //     msg: `Book deleted Successfully`,
    //     flag: true,
    //   };
    // }
    this.books.forEach((item, index, object) => {
      if (item.isbn == isbn) {
        object.splice(index, 1);
        document.getElementById("display-message").innerHTML =
          "Book deleted Successfully.";
        return index;
      }
    });
  }
}

let listOfBooks = new BookList([]);

class UI {
  /**
   * @param {Book} book
   */
  addBookToUI(book) {
    let result = document.getElementById("result");
    //result.innerHTML = " ";

    // bookList.books.forEach((item) => {
    result.innerHTML += `
        <tr id="${book.isbn}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        </tr>
        
        `;
    // });
  }

  /**
   * @param {HTML element} element
   */
  deleteBookFromUI(isbn) {
    document.getElementById(`${isbn}`).remove();
    //element.remove();
  }
}
/*
 * please handle onclick Event of the submit button
 * in html file, please add to the button onclick='addBook()'
 * in the js file , define addBook() function
 * bring the value of the inputs
 * create book instance from Book with the values (title , author , isbn)
 * add the Book to the Book list
 * define a ui instance from UI
 * use ui.addBooktoUI(book)
 *
 */
function addBook(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;
  let book = new Book(title, author, isbn);

  let ui = new UI();

  let message = document.getElementById("display-message");
  message.innerHTML = listOfBooks.addBookToList(book);
  if (message.innerHTML == "Book added Successfully") ui.addBookToUI(book);
  console.log(listOfBooks);
}
// Remove the book

function removeBook(event) {
  event.preventDefault();
  let ui = new UI();
  let removeBook = document.getElementById("removeBook").value;

  //listOfBooks.deleteBook(removeBook);
  ui.deleteBookFromUI(removeBook);

  console.log(listOfBooks);
}