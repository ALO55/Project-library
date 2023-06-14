let myLibrary = [];

function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title, author, pages, read; 
    }
}

function addBookToLibrary() {
  const book1 = new Book('titulo', 'autor', '150', 'not read it')
  const book2 = new Book('titulo2', 'autor2', '200', 'read it')
  myLibrary.push(book1, book2);
}

addBookToLibrary();

function loopLibrary() {
  myLibrary.forEach((book)=>{
    console.log(book.info());
  })
}

loopLibrary()