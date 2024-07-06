/* declare variable for dom elements */
const addBookDialog = document.getElementById("addBookDialog");
const openDialogBoxButton = document.getElementById("openDialogBoxButton");

/* opens dialog box when clicking on add box */
openDialogBoxButton.addEventListener("click", () => {
  addBookDialog.showModal();
});
