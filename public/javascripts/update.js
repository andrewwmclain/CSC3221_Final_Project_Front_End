document.getElementById("updateBook").addEventListener("click",
    function(){
        var isbn = document.getElementById("updateInput").value;
        var url = 'http://localhost:5000/api/books/'+isbn;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("updateTable").innerHTML = CreateTable(JSON.parse(this.responseText));
            }
        };

        xhttp.open("GET", url,
            true);
        xhttp.send();
    })


function CreateTable(data){
    let retVal = '';

    // for (let book in data){
        var isbn = data[0]["ISBN"];
        var name = data[0]["Name"];
        var author = data[0]["Author"];
        var price =data[0]["Price"];

        retVal +=
        '<label for="nameUpdate">Name:</label> \n' +
        '<input type="text" id="nameUpdate" name="nameUpdate" value="'+name+'"> \n' +
        '<label for="authorUpdate">Author:</label> \n' +
        '<input type="text" id="authorUpdate" name="authorUpdate" value="'+author+'"> \n' +
        '<label for="isbnUpdate">ISBN:</label> \n' +
        '<input type="text" id="isbnUpdate" name="isbnUpdate" value="'+isbn+'"> \n' +
        '<label for="priceUpdate">Price:</label> \n' +
        '<input type="text" id="priceUpdate" name="priceUpdate" value="'+price+'">'
        ;
    // }

    return retVal;
}

function removeBook(isbn){
    // var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books';

    var url = 'http://localhost:5000/api/books/'+isbn;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Book Removed!");
            // window.location.href = 'add';
        }
    };

    xhttp.open("DELETE", url,
        true);
    // xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send();
}