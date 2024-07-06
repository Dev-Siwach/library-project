const myLibrary = [];

document
  .getElementById("addBookButton")
  .addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  var titleInput = prompt("What is the name of the book? ");
  var authorInput = prompt("Who is the author? ");
  var pagesInput = prompt("How many pages does it have? ");
  var readInput = prompt("Have you read it?");
  Book(titleInput, authorInput, pagesInput, readInput);
  console.table(myLibrary);
  var bookCard = document.createElement("div");
  bookCard.textContent = myLibrary[myLibrary.length - 1].name;
  var bookList = document.getElementById("bookList");
  bookList.appendChild(bookCard);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.array = {
    name: this.title,
    author: this.author,
    pages: this.pages,
    read: this.read,
  };
  myLibrary.push(this.array);
}
