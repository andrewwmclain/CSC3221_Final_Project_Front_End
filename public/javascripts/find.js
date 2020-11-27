document.getElementById("findBook").addEventListener("click",
    function(){
        var url = 'http://localhost:5000/api/books/978-0439708180';

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("findTable").innerHTML = CreateTable(JSON.parse(this.responseText));
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