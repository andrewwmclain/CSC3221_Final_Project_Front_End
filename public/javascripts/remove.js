document.getElementById("removeBook").addEventListener("click",
    function(){
        var isbn = document.getElementById("removeInput").value;
        var url = 'http://localhost:5000/api/books/'+isbn;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("removeTable").innerHTML = CreateTable(JSON.parse(this.responseText));
            }
        };

        xhttp.open("GET", url,
            true);
        xhttp.send();
    })


function CreateTable(data){
    let retVal = '';


    retVal =
        '	<table> \n' +
        '	<tbody> \n';

    for (let book in data){
        var isbn = data[book]["ISBN"];
        retVal +=
            '<tr> \n' +
            '	<td>' + data[book]["Name"] + '</td> \n' +
            '	<td>' + data[book]["Author"] + '</td> \n' +
            '	<td>' + data[book]["ISBN"] + '</td> \n' +
            '	<td>' + data[book]["Price"] + '</td> \n' +
            '   <td><button id="remove" onclick="removeBook('+isbn+')">Delete</button></td>\n' +
            '</tr> \n';
    }
    retVal +=
        '</tbody> \n' +
        '</table> \n';

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