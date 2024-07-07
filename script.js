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
  /* ------------------------------------------------------ */
  const card = document.createElement("div");
  card.id = `card${myLibrary.length - 1}`;
  card.className = "card";
  /*---------------------------------------------------------*/
  const bookTitle = document.createElement("div");
  bookTitle.id = `bookTitle${myLibrary.length - 1}`;
  bookTitle.className = "bookTitle cardContent";
  bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
  /*--------------------------------------------------------*/
  const bookAuthor = document.createElement("div");
  bookAuthor.id = `bookAuthor${myLibrary.length - 1}`;
  bookAuthor.className = "bookAuthor cardContent";
  bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  /*-------------------------------------------------------*/
  const bookPages = document.createElement("div");
  bookPages.id = `bookPages${myLibrary.length - 1}`;
  bookPages.className = "bookPages cardContent";
  bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
  /*-----------------------------------------------------*/
  const bookReadStatus = document.createElement("div");
  bookReadStatus.id = `bookReadStatus${myLibrary.length - 1}`;
  bookReadStatus.className = "bookReadStatus cardContent";
  bookReadStatus.textContent = myLibrary[myLibrary.length - 1].readStatus;
  /*---------------------------------------------------------*/
  const cardHeading0 = document.createElement("div");
  cardHeading0.id = `cardHeading0${myLibrary.length - 1}`;
  cardHeading0.className = "cardHeading0 cardHeading";
  cardHeading0.textContent = `Card no. ${myLibrary.length - 1}`;
  /*--------------------------------------------------------*/
  const cardHeading1 = document.createElement("div");
  cardHeading1.id = `cardHeading1${myLibrary.length - 1}`;
  cardHeading1.className = "cardHeading1 cardHeading";
  cardHeading1.textContent = "Book Name";
  /*--------------------------------------------------------*/
  const cardHeading2 = document.createElement("div");
  cardHeading2.id = `cardHeading2${myLibrary.length - 1}`;
  cardHeading2.className = "cardHeading2 cardHeading";
  cardHeading2.textContent = "Author";
  /*--------------------------------------------------------*/
  const cardHeading3 = document.createElement("div");
  cardHeading3.id = `cardHeading3${myLibrary.length - 1}`;
  cardHeading3.className = "cardHeading3 cardHeading";
  cardHeading3.textContent = "Number Of Pages";
  /*--------------------------------------------------------*/
  const cardHeading4 = document.createElement("div");
  cardHeading4.id = `cardHeading4${myLibrary.length - 1}`;
  cardHeading4.className = "cardHeading4 cardHeading";
  cardHeading4.textContent = "Status";
  /*--------------------------------------------------------*/
  card.appendChild(cardHeading0);
  card.appendChild(cardHeading1);
  card.appendChild(bookTitle);
  card.appendChild(cardHeading2);
  card.appendChild(bookAuthor);
  card.appendChild(cardHeading3);
  card.appendChild(bookPages);
  card.appendChild(cardHeading4);
  card.appendChild(bookReadStatus);
  /*-------------------------------------------*/
  bookList.appendChild(card);
}

/*-----------------------------------------------*/
addBookCardButton.addEventListener("click", () => {
  createCardWithArrayElement();
  addBookDialog.close();
});
/*----------------------------------------------*/
const removeBookDialogButton = document.getElementById(
  "removeBookDialogButton",
);
const removeBookDialog = document.getElementById("removeBookDialog");
removeBookDialogButton.addEventListener("click", () => {
  removeBookDialog.showModal();
});
/*----------------------------------------------*/
const removeCardInput = document.getElementById("removeCardInput");

function removeCardFunction() {
  const tempCardId = `card${removeCardInput.value}`;
  const tempCard = document.getElementById(tempCardId);
  tempCard.remove();
  removeBookDialog.close();
}
/*----------------------------------------------*/
const removeBookCardButton = document.getElementById("removeBookCardButton");

removeBookCardButton.addEventListener("click", removeCardFunction);
