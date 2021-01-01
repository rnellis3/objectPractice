const submitBtn = document.querySelector('#submitForm');
const form = document.querySelector('#myForm');
const container = document.querySelector('.container');

let myLibrary = [];
let bookID = 0;

function Book(title, author, pages, completed, bookID){
this.title = title,
this.author = author,
this.pages = pages,
this.completed = completed
this.bookID = bookID
}


function createBook(obj){
    const newDiv = document.createElement('div');
    const newBtn = document.createElement('button');
    newBtn.innerHTML = 'Remove'
    newDiv.classList.add('card')
    newDiv.innerHTML =
    `<h2 class="card__title">Title:${obj.title}</h2>
    <h3>Author:${obj.author}</h3>
    <h3>Pages:${obj.pages}</h3>
    <h3>Completed:${obj.completed}</h3>
    `
    container.appendChild(newDiv)
    newDiv.appendChild(newBtn).addEventListener('click', removeCard);

}

function addBookToLibrary(){
    const newBook = new Book()
    newBook.title = form.title.value
    newBook.author = form.author.value
    newBook.pages = form.pages.value
    newBook.completed = form.completed.value
    newBook.bookID = bookID + 1;
    bookID = newBook.bookID
    myLibrary.push(newBook)
    createBook(newBook)
    //addBooksDOM()
    form.reset()
    togglePopup()
    console.log('pushed')
}

function removeCard(e){
    console.log(e.target)
    e.target.parentElement.remove()
    removeFromLibrary()
}

function removeFromLibrary(test) {
    delete myLibrary[test.bookID == 2]
}

submitBtn.addEventListener('click', addBookToLibrary);



const starBook = new Book('Star wars', 'George Lucas', '42', 'complete')
console.log(starBook)
console.log(myLibrary)



/////////////////MODAL
const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn')

closeBtn.addEventListener('click', togglePopup)
openBtn.addEventListener('click', togglePopup)

function togglePopup(){
    document.getElementById('popup-1').classList.toggle('active')
}
///////////////END MODAL
//addBtn.addEventListener('click', addBookToLibrary)
// for(let i = 0; i < myLibrary.length; i++){
    //     console.log(myLibrary[i])
    //     newDiv.classList.add('card')
    //     newDiv.dataset.dataid = i;
    //     console.log(newDiv.dataset.dataid)
    //     console.log(newDiv)
    //     newDiv.innerHTML = `<h3>Title: ${myLibrary[i].title}</h3>
    //     <h2>Author: ${myLibrary[i].author}</h2>
    //     <h2>Pages: ${myLibrary[i].pages}</h2>
    //     <h2>Completed: ${myLibrary[i].completed}</h2>`;
    //     if(!container.querySelector('[dataid = i]')){
    //         container.appendChild(newDiv)
    //     }

    //this will need to create a new card and append that to the DOM


// function addBookToLibrary(){
//     const newBook = new Book()
//     newBook.title = prompt('book title')
//     newBook.author = prompt('author')
//     newBook.pages = prompt('pages')
//     newBook.completed = prompt('complete')
//     myLibrary.push(newBook)
// }




// function addBooksDOM() {
//     const cards = container.querySelectorAll('.card')
//     cards.forEach(card => container.removeChild(card))
//     for(let i = 0; i < myLibrary.length; i++){
//     createBook(myLibrary[i])
// }
// }