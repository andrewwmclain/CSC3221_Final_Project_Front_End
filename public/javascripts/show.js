// var url = 'http://localhost:5000/api/books';
var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books';


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("showTable").innerHTML = CreateTable(JSON.parse(this.responseText));
    }
};

xhttp.open("GET", url,
    true);
xhttp.send();

function CreateTable(data){
    let retVal = '';


    retVal =
        '	<table class="table"> \n' +
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