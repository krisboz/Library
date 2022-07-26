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

const updateDOM = () => {
    document.querySelector(".displayed-books").innerHTML = "";


    myLibrary.forEach((el, index) => {
        document.querySelector(".displayed-books").insertAdjacentHTML("beforeend", `
        <div class="book" data-index=${index}>
        <h5 class="name">${el.title}</h5>
        <p class="author">${el.author}</p>
        <p class="pages">${el.pages}</p>
        <p class="read">${el.read}</p>
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

    updateDOM();

}

const deleteBook = (e) => {
    console.log(e.target)
    if (e.target.classList.contains("delete-book")) {
        console.log(myLibrary[e.target.parentNode.dataset.index])
        myLibrary.splice(e.target.parentNode.dataset.index, 1)
        updateDOM();
    }
}

document.getElementById("submitBtn").addEventListener("click", addBookToLibrary)
document.querySelector(".displayed-books").addEventListener("click", e => {
    deleteBook(e)
})


class Example extends Book {
    constructor(title) {
        super(title)
    }

    smallInfo() {
        return ([this.title, "I'm a schmall one"])
    }
}


const openForm = () =>{
    document.querySelector(".user-input").style.display = "block"
}

const closeForm = () => {
    document.querySelector(".user-input").style.display = "none"

}

const lotr = new Book("Lord of the rings", "J.R.R. Tolkien", 654, false)
const bs = new Example("The Stormlight Archives")
//console.log(lotr.info())
//console.log(bs.smallInfo())
//console.log(bs.info())



