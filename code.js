const myLibrary = []

let submitButton = document.querySelector(".submit")
let dialog = document.querySelector("dialog")
let overlay = document.querySelector(".overlay")

let getBookInfo = () => {
    let title = document.querySelector('#title').value
    let pages = document.querySelector('#pages').value
    let author = document.querySelector('#author').value
    let read = document.querySelector('#read').value
}

function Book(title,pages,author,read) {
    self.title = title
    self.pages = pages
    self.author = author
    self.read = read
    self.text = `${self.title} by ${self.author}, ${self.pages}, ${self.read}`
}

submitButton.addEventListener('click',(event) => {
    dialog.close()
    overlay.style.opacity = "0"
    event.preventDefault()
})

let button = document.querySelector(".showDialog")
button.addEventListener('click',(event) => {
    dialog.showModal()
    overlay.style.opacity = "0.5"
    event.preventDefault()
})

function Book(title,author,pages,read) {
this.title =  title;
this.author = author;
this.pages = pages;
this.read = read;
}

function addBookToLibrary() {

}