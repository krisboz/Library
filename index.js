let myLibrary = [];

class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return ([this.title, this.author, this.pages, this.read])
    }

    changeReadStatus() {
        if (this.read === true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}

const changeReadColor = (el) => {
    if (el) {
        return "green"
    } else if (!el) {
        return "red"
    }
}
const openForm = () =>{
    document.querySelector(".user-input").style.display = "block"
}

const closeForm = () => {
    document.querySelector(".user-input").style.display = "none"

}

const displayBooks = () => {
    document.querySelector(".displayed-books").innerHTML = "";


    myLibrary.forEach((el, index) => {
        document.querySelector(".displayed-books").insertAdjacentHTML("beforeend", `
        <div class="book" data-index=${index}>
        <h5 class="name">${el.title}</h5>
        <p class="author">${el.author}</p>
        <p class="pages">${el.pages}</p>
        <div class="readCheck" style="background-color:${changeReadColor(el.read)};"> </div>
        <button class="delete-book"> Delete </button>
    </div>`)
    });
}


const addBookToLibrary = () => {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    myLibrary.push(new Book(title, author, pages, read))

    console.log(myLibrary)

    displayBooks();
    closeForm()
}

const deleteBook = (e) => {
    console.log(e.target)
    if (e.target.classList.contains("delete-book")) {
        console.log(myLibrary[e.target.parentNode.dataset.index])
        myLibrary.splice(e.target.parentNode.dataset.index, 1)
        displayBooks();
    }
}

const test = (e) =>{
    if(e.target.classList.contains("readCheck")) {
        myLibrary[e.target.parentNode.dataset.index].changeReadStatus();
        console.log("i dalje radim")
        displayBooks();
    }
}
     
function submitFunction() {
    const inpForm = document.getElementById("form-test")
    const author = document.getElementById("author")
    if(!inpForm.checkValidity()) {
        console.log(        author.validationMessage)

    } else {
        console.log("valid")
        addBookToLibrary()
    }

}

document.querySelector(".displayed-books").addEventListener("click", e => {
    deleteBook(e)
    test(e)
})






document.querySelector(".add-book").addEventListener("click", (e=>{openForm()}))
document.querySelector(".close").addEventListener("click", (e=>{closeForm()}))









