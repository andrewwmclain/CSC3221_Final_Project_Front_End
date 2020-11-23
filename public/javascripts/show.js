var url = 'http://localhost:5000/api/books';

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("showTable").innerHTML = CreateTable(JSON.parse(this.responseText));
    }
};

xhttp.open("GET", url,
    true);
// xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp.send();

function CreateTable(data){
    let retVal = '';


    retVal =
    //     '<div class="jumbotron"> \n' +
    //     '<h2>' + data["StopName"] + '</h2> \n' +
    //     '<table class="table table-bordered table-hover"> \n' +
    //     '	<thead> \n' +
    //     '		<tr> \n' +
    //     '			<th scope="col">Route ID</th> \n' +
    //     '			<th scope="col">Direction</th> \n' +
    //     '			<th scope="col">Estimated Minutes</th> \n' +
    //     '			<th scope="col">Vehicle ID</th> \n' +
    //     '		</tr> \n' +
        '	<table> \n' +
        '	<tbody> \n';
    //
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
    //     '</div> \n ' ;
    return retVal;
}