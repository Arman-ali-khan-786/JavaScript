showData();
class Book{
    constructor (name, author, type) {
            this.name = name;
            this.author = author;
            this.type = type;
    }
}
function showData(){
        let tableBody = document.getElementById('tableBody');
        let libBooks = localStorage.getItem('libBooks');
        let libAuthor = localStorage.getItem('libAuthor');
        let libType = localStorage.getItem('libType');
        let libBooksArr,libAuthorArr,libTypeArr;
        if(libBooks == null){
            libBooksArr = [];
            libAuthorArr = [];
            libTypeArr = [];
        }else{
            libBooksArr = JSON.parse(libBooks);
            libAuthorArr = JSON.parse(libAuthor);
            libTypeArr = JSON.parse(libType);
        }
        let html="";
        libBooksArr.forEach((ele , index)=>{
            html += `
                <tr>
                    <td>${ele}</td>
                    <td>${libAuthorArr[index]}</td>
                    <td>${libTypeArr[index]}</td>
                </tr>
            `;
        })
        tableBody.innerHTML = html;
}
class Display{
    add(book) {
        // console.log("book", ele)
        let tableBody = document.getElementById('tableBody');
        let libBooks = localStorage.getItem('libBooks');
        let libAuthor = localStorage.getItem('libAuthor');
        let libType = localStorage.getItem('libType');
        let libBooksArr,libAuthorArr,libTypeArr;
        if(libBooks == null){
            libBooksArr = [];
            libAuthorArr = [];
            libTypeArr = [];
        }else{
            libBooksArr = JSON.parse(libBooks);
            libAuthorArr = JSON.parse(libAuthor);
            libTypeArr = JSON.parse(libType);
        }
        libBooksArr.push(book.name);
        libAuthorArr.push(book.author);
        libTypeArr.push(book.type);
        localStorage.setItem('libBooks', JSON.stringify(libBooksArr))
        localStorage.setItem('libAuthor', JSON.stringify(libAuthorArr))
        localStorage.setItem('libType', JSON.stringify(libTypeArr))
        showData();
    }
    clear () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate (book) {
        if ((book.name.length <= 2) || (book.name.length <= 2)) {
            return false;
        } else {
            return true;
        }
    
    }
    show (type,msg){
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
}

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