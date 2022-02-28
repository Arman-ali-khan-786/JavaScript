/* 
// featues to be implemented in future
    -> store all data to localStorage
    -> give another column Option to delete the book
    -> add scroll bar to the view
*/



// contructor  of Book

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor

function Display() {

}

//--->> Add methos to display prototype

// implementing the add function

Display.prototype.add = function (book) {
    // console.log("book", ele)
    let tableBody = document.getElementById('tableBody');
    let html = `
    <tr>
    <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
    `;
    tableBody.innerHTML += html;

}
// implementing the clear function 

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implementing the validate function

Display.prototype.validate = function (book) {
    if ((book.name.length <= 2) || (book.name.length <= 2)) {
        return false;
    } else {
        return true;
    }

}

// implementing the show function

Display.prototype.show = function (type,msg){
    let message = document.getElementById("message");
    message.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message !</strong> ${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
    `;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}

// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let gymnastic = document.getElementById('gymnastic');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (gymnastic.checked) {
        type = gymnastic.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','Your Book has been added successfully,')

    } else {
        // to show an error
        display.show('danger' , 'Sorry there  was an error adding your book')
    }


})