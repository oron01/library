// const myLibrary = []

const myLibrary = [
    { author: "John Smith", title: "The Mystery", pages: 45, read: "yes" },
    { author: "Alice Johnson", title: "Hidden Secrets", pages: 72, read: "no" },
    { author: "David Miller", title: "Echoes of Time", pages: 30, read: "yes" },
    { author: "Emma White", title: "Whispers in the Wind", pages: 58, read: "no" },
    { author: "James Brown", title: "Silent Shadows", pages: 81, read: "yes" },
    { author: "Sophie Green", title: "Fading Memories", pages: 14, read: "no" },
    { author: "Michael Gray", title: "Lost Horizon", pages: 93, read: "yes" },
    { author: "Olivia Reed", title: "Dancing Stars", pages: 67, read: "no" },
    { author: "Daniel Taylor", title: "Eternal Flames", pages: 49, read: "yes" }
];

myLibrary.forEach(book => {
    book.text = `${book.title} by ${book.author}, ${book.pages} pages long, ${book.read}`;
});



// let libraryInfo.selectedBook= null
// let libraryStartValue = 0
let libraryInfo = {
    selectedBook: null,
    libraryStartValue : 0,


}

let submitButton = document.querySelector(".submit")
let dialog = document.querySelector("dialog")
let overlay = document.querySelector(".overlay")
let books = document.querySelectorAll(".book")
let form = document.querySelector("form")
let prevButton = document.querySelector(".prevBookButton")
let nextButton = document.querySelector(".nextBookButton")
let selectedBookDescription = document.querySelector(".selectedBookDescription")

if (books[0].textContent !== "") {books[0].classList.add("selectedBook")}

let displayBooks = () => {
    for (let i = 0, booksI = libraryInfo.libraryStartValue ; i < books.length; i++, booksI++) {
    if (myLibrary[i] !== undefined && myLibrary[i] !== null) {
        books[i].textContent = myLibrary[booksI].title
    }}
}

let moveBooksByOne = (mark) => {
/*     default movement */
    if (libraryInfo.selectedBook== null) {libraryInfo.selectedBook= 0}
    else {   libraryInfo.selectedBook+= mark
    }  
    /* innermovement */
    if (libraryInfo.selectedBook > -1 && libraryInfo.selectedBook < 8) {
        for (i = 0, bookI = libraryInfo.libraryStartValue ; i < books.length; i++, bookI++) {
            if (i == libraryInfo.selectedBook) {
                books[i].classList.remove("selectedBook")
                books[i].classList.add("selectedBook")
                
                if (myLibrary[bookI] !== undefined && myLibrary[bookI].text !== undefined) {
                selectedBookDescription.textContent = myLibrary[bookI].text}
                else {
                selectedBookDescription.textContent = ""}
            }
            else {
                books[i].classList.remove("selectedBook")
            }
        }
    }
    /* outmovement */
    else if (libraryInfo.selectedBook < 0) {
        if (myLibrary.length > 8 && libraryInfo.libraryStartValue < 0) {libraryInfo.libraryStartValue += -1}
        else {libraryInfo.libraryStartValue = 0}
        libraryInfo.selectedBook = 0
        selectedBookDescription.textContent = myLibrary[libraryInfo.libraryStartValue + libraryInfo.selectedBook].text
        displayBooks()
    }
    else if (libraryInfo.selectedBook > 7) {
        if (myLibrary.length > 8 && (libraryInfo.libraryStartValue + 8) < myLibrary.length) {libraryInfo.libraryStartValue += 1}
        libraryInfo.selectedBook = 7
        selectedBookDescription.textContent = myLibrary[libraryInfo.libraryStartValue + libraryInfo.selectedBook].text
        displayBooks()
    }
    // return selectedBook
}

// let moveBooksByOneNew = (mark) => {
//     if (libraryInfo.selectedBook== null) {libraryInfo.selectedBook= 0}
//     else {    libraryInfo.selectedBook+= mark
//     }  
//     if (libraryInfo.selectedBook< 0) {libraryInfo.selectedBook= 7}
//     if (libraryInfo.selectedBook>= myLibrary.length) {libraryInfo.selectedBook= 0}

//     return selectedBook
// }

prevButton.addEventListener('click',moveBooksByOne.bind(null,-1))
nextButton.addEventListener('click',moveBooksByOne.bind(null,1))

let getBookInfo = () => {
    let title = document.querySelector('#title').value
    let pages = document.querySelector('#pages').value
    let author = document.querySelector('#author').value
    let read = document.querySelector('#read').value
    return {title,pages,author,read}
}

function Book(title,pages,author,read) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.text = `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}`;
}

let setNewBook = () => {
    let {title,pages,author,read} = getBookInfo()
    console.log(`title,pages,author,read ${title} ${pages}, ${author}, ${read}`)
    let newBook = new Book(title,pages,author,read)
    myLibrary.push(newBook)
}

let resetForm = () => { 
    document.querySelector('#title').value = ""
    document.querySelector('#pages').value = ""
    document.querySelector('#author').value = ""
    document.querySelector('#yes').checked = false
    document.querySelector('#no').checked = false

}

submitButton.addEventListener('click',(event) => {
    if (form.checkValidity() == true) {
    setNewBook()
    event.preventDefault()
    dialog.close()
    overlay.style.opacity = "0"
    displayBooks()
    resetForm()
}
    else {
        form.reportValidity()
        event.preventDefault()
    }
})

let button = document.querySelector(".showDialog")
button.addEventListener('click',(event) => {
    dialog.showModal()
    overlay.style.opacity = "0.5"
    event.preventDefault()
})

// function Book(title,author,pages,read) {
// this.title =  title;
// this.author = author;
// this.pages = pages;
// this.read = read;
// }

function addBookToLibrary() {

}

displayBooks()
