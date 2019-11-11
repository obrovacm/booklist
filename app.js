// Book Class: represents a book
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

};

// UI Class: handle UI tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'book one',
        author: 'Pera Petrovic',
        isbn: '1251255'
      },
      {
        title: 'book two',
        author: 'Stojadinka Misic',
        isbn: '74448845'
      }
    ];

    const books = StoredBooks;
    books.forEach(book => { UI.addBookToList(book)});
    
  }

  static addBookToList(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class: handles storage


// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a books
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent acutal submit
  e.preventDefault();
  
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  
  // instantiate book
  const book = new Book(title, author, isbn);
  
  // clear input fields
  document.querySelector('#book-form').reset();

  // add book to UI
  UI.addBookToList(book);
})

// Event: remove a books