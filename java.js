let myLibrary = [];
let addBook = document.querySelector('#add-btn');
const container = document.querySelector('.container');
let bookForm = document.querySelector('form');
let cancelBtn = document.querySelector('#cancel-btn');

// create a new book
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//this function saves the book in the container of the html document
function showBook (){ 
  container.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]; 
    let card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    for (let j = 0; j < Object.values(book).length; j++){
      let infoBook = document.createElement('div');
      infoBook.classList.add('books');
      infoBook.textContent = `${Object.values(book)[j]}`
      card.appendChild(infoBook);
    }

    //button to change read status
    let changeRead = document.createElement('button');
    changeRead.innerHTML = 'Change read status';
    changeRead.classList.add('read-btn');
    card.appendChild(changeRead);
    changeRead.addEventListener('click', () =>{
      toggleRead(`${i}`)
    })

    //button to eliminate the book 
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.classList.add('remove-btn');
    card.appendChild(removeBtn);
    removeBtn.addEventListener('click', () =>{
      removeBook(`${i}`);
    })
  }
} 

//this function is very specific
function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  title = "Title: " + title;
  let author = document.querySelector('#author').value;
  author = "Author: " + author;
  let pages = document.querySelector('#pages').value;
  pages = "Pages: " + pages;
  let read = document.querySelector('#read').checked;
  read = read ? "Read it" : "Not read it";
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBook();
}

//make the form visible in the page
addBook.addEventListener('click', () => {
  bookForm.style.display = "block";
})

//submit the information of the new book 
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  bookForm.style.display = "none";
})

//cancel to submit the information
cancelBtn.addEventListener('click', () =>{
  bookForm.style.display = "none";
})

function removeBook(index){
  myLibrary.splice(index, 1);
  showBook();
}

//switch read status
Book.prototype.toggleRead = function (){
  if(this.read === 'Read it'){
    this.read = true;
  } else {
    this.read = false;
  } 

  this.read = !this.read;
  this.read = this.read ? 'Read it' : 'Not read it';
}

function toggleRead (index){
  myLibrary[index].toggleRead();
  showBook();
}
