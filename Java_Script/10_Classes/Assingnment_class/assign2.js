/**Step : 1 in java script file  *
 **define two classes Book , BookList *
 **Book has the below props :
 * title , author, isbn
 * methods : change
 *
 *
 **BookList has the below props :
 * books (instances would have array of elements of Book type)
 * methods : add, delete , replace
 *
 */

// ...................ES6 class: Inheritance...............

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    change(key, value) {
        this[key] = value; // using bracket notation
    }
}
class BoolList {
    constructor(books) {
        this.books = Array.from(books); // 
    }
    add(book) {
        this.books.push(book);
    }
    delete(book) {
        this.books.splice(
            this.books.findIndex(item => item.isbn == book), 1); // delete the isbn from book
    }

    replace(oldbook, newbook) {
        this.books.splice(this.books.indexOf(oldbook), 1, newbook);
    }
}
let book = new Book('java', 'Ericson', 2222);
let book1 = new Book('CSS', 'Ericson', 22422);
let book2 = new Book('Javascript', 'cson', 22522);
let book3 = new Book('SCSS', 'Arif', 22522);
let book4 = new Book('Bootstrap', 'Carlos', 22522);




let list = new BoolList([book, book1, book2]);
console.log(list);

list.add(book3);
console.log('After Adding:', list);

list.delete(book);
console.log('After Deleting:', list);

list.replace(book3, book4);
console.log('After Replacing:', list);