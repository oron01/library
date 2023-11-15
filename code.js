const myLibrary = []

let submitButton = document.querySelector(".submit")
let dialog = document.querySelector("dialog")
let overlay = document.querySelector(".overlay")

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