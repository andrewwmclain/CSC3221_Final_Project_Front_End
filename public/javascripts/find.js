document.getElementById("findBook").addEventListener("click",
    function(){
        var e = document.getElementById("findChoice");

        var match = true;

        if(e.options[e.selectedIndex].value == "isbn"){
            var isbn = document.getElementById("findInput").value;
            var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books/'+isbn;
            // var url = 'http://localhost:5000/api/books/'+isbn;

            var re = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
            match = re.exec(isbn);
        }else{
            var author = document.getElementById("findInput").value;
            var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books?author='+author;
            // var url = 'http://localhost:5000/api/books?author='+author;
        }

        if(match) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("findTable").innerHTML = CreateTable(JSON.parse(this.responseText));
                }else{
                    document.getElementById("findTable").innerHTML = '<b>Book with ISBN '+isbn+
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
        '<th> Title </th>' +
        '<th> Author </th>' +
        '<th> ISBN </th>' +
        '<th> Price </th>' +
        '</tr>' +
        '</thead>' +
        '	<tbody> \n'
    ;

    for (let book in data){
        retVal +=
            '<tr> \n' +
            '	<td>' + data[book]["Name"] + '</td> \n' +
            '	<td>' + data[book]["Author"] + '</td> \n' +
            '	<td>' + data[book]["ISBN"] + '</td> \n' +
            '	<td>' + data[book]["Price"] + '</td> \n' +
            '</tr> \n';

    }
    retVal +=
        '</tbody> \n' +
        '</table> \n';

    return retVal;
}