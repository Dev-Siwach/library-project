/* declare variable for dom elements from main page */
const addBookDialog = document.getElementById("addBookDialog");
const openDialogBoxButton = document.getElementById("openDialogBoxButton");
const bookList = document.getElementById("bookList");

/* opens dialog box when clicking on add box */
openDialogBoxButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

/* array that stores info about the books as objects in it */
const myLibrary = [];

/* variable for dom element in dialog box */
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const bookPagesInput = document.getElementById("bookPagesInput");
const bookReadStatusTrue = document.getElementById("bookReadStatusTrue");
const addBookCardButton = document.getElementById("addBookCardButton");

/* function that adds user input to myLibrary array as obeject */
function turnDataToObject(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.array = {
    title: this.title,
    author: this.author,
    pages: this.pages,
    readStatus: this.readStatus,
  };
  myLibrary.push(this.array);
}

/* This function takes data for turnDataToObject */
function takeUserInputForFunction() {
  if (bookReadStatusTrue.checked) {
    turnDataToObject(
      bookTitleInput.value,
      bookAuthorInput.value,
      bookPagesInput.value,
      "Read",
    );
  } else {
    turnDataToObject(
      bookTitleInput.value,
      bookAuthorInput.value,
      bookPagesInput.value,
      "Not Read Yet",
    );
  }
  console.table(myLibrary);
}

/* This fuction calls for takeUserInputForFunction() and then make a card using the object in array */
function createCardWithArrayElement() {
  takeUserInputForFunction();
  /* -------- */
  const card = document.createElement("div");
  card.id = `card${myLibrary.length - 1}`;
  card.className = "card";
  /*--------------------------------------*/
  const bookTitle = document.createElement("div");
  bookTitle.id = `bookTitle${myLibrary.length - 1}`;
  bookTitle.className = "bookTitle";
  bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
  /*----------------------------------------*/
  const bookAuthor = document.createElement("div");
  bookAuthor.id = `bookAuthor${myLibrary.length - 1}`;
  bookAuthor.className = "bookAuthor";
  bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  /*-----------------------------------------*/
  const bookPages = document.createElement("div");
  bookPages.id = `bookPages${myLibrary.length - 1}`;
  bookPages.className = "bookPages";
  bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
  /*----------------------------------*/
  const bookReadStatus = document.createElement("div");
  bookReadStatus.id = `bookReadStatus${myLibrary.length - 1}`;
  bookReadStatus.className = "bookReadStatus";
  bookReadStatus.textContent = myLibrary[myLibrary.length - 1].readStatus;
  /*--------------------------------------*/
  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(bookReadStatus);
  /*-------------------------------------------*/
  bookList.appendChild(card);
}

/*----------------------------------------------------------------------------------------------------------*/

addBookCardButton.addEventListener("click", () => {
  createCardWithArrayElement();
  addBookDialog.close();
});
