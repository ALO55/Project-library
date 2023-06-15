let myLibrary = [];
let addBook = document.querySelector('#add-btn');


// create a new book
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
//this function is very specific
function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary)
}

//make the form visible in the page
addBook.addEventListener('click', () => {
  let bookForm = document.querySelector('form');
  bookForm.style.display = "block";
})

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
})

