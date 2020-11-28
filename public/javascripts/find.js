document.getElementById("findBook").addEventListener("click",
    function(){
        var e = document.getElementById("findChoice");

        var match = true;

        if(e.options[e.selectedIndex].value == "isbn"){
            var isbn = document.getElementById("findInput").value;
            var url = 'http://localhost:5000/api/books/'+isbn;

            var re = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
            match = re.exec(isbn);
        }else{
            var author = document.getElementById("findInput").value;
            var url = 'http://localhost:5000/api/books?author='+author;
        }

        if(match) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("findTable").innerHTML = CreateTable(JSON.parse(this.responseText));
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