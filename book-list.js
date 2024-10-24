const setEditModal = (isbn)=>{
//implement
}
const deleteBook =  (isbn)=>{

}

const loadBooks = ()=>{

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','http://localhost:3000/books',false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for(let book of books){
        
        const x = `
        <div class="col-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

                <div>Author: ${book.author}</div>
                <div>Publisher: ${book.publisher}</div>
                <div>Number Of Pages: ${book.noOfPages}</div>

                <hr>

                <button class="btn btn-danger" type="button">Delete</button>
                <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#editBookModal" onClick="setEditModal(${book.isbn})">Edit</button>
            </div>
        </div>
    </div>  
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x ;   
    }
}

loadBooks();