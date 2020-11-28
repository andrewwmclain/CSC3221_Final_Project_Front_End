document.getElementById("removeBook").addEventListener("click",
    function(){
        var isbn = document.getElementById("removeInput").value;
        var url = 'http://localhost:5000/api/books/'+isbn;

        var re = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
        match = re.exec(isbn);

        if(match) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("removeTable").innerHTML = CreateTable(JSON.parse(this.responseText));
                }else{
                    document.getElementById("removeTable").innerHTML = '<b>Book with ISBN '+isbn+
                        ' not found!</b>';
                }
            };

            xhttp.open("GET", url,
                true);
            xhttp.send();
        }else{
            alert("Invalid ISBN format!");
        }
    })


function CreateTable(data){
    let retVal = '';

    retVal =
        // '	<table> \n' +
        // '	<tbody> \n';
        '<table class="table"> \n' +
        '<thead>' +
        '<tr>' +
        '<th> Name </th>' +
        '<th> Author </th>' +
        '<th> ISBN </th>' +
        '<th> Price </th>' +
        '<th></th>'
        '</tr>' +
        '</thead>' +
        '	<tbody> \n'
    ;

    for (let book in data) {
        var isbn = data[book]["ISBN"];
        console.log(isbn);
        retVal +=
            '<tr> \n' +
            '	<td>' + data[book]["Name"] + '</td> \n' +
            '	<td>' + data[book]["Author"] + '</td> \n' +
            '	<td>' + data[book]["ISBN"] + '</td> \n' +
            '	<td>' + data[book]["Price"] + '</td> \n' +
            '   <td><button type="button" class="btn btn-danger" id="remove" onclick="removeBook(\'' +
             isbn + '\')">Delete</button></td>\n' + '</tr> \n';
    }
    retVal +=
        '</tbody> \n' +
        '</table> \n';

    return retVal;
}

function removeBook(isbn){
        // var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books';

        var url = 'http://localhost:5000/api/books/'+isbn;

        alert(url);
        alert(isbn);

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