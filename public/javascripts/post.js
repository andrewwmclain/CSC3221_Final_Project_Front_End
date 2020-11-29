document.getElementById("submitNewBook").addEventListener("click",
    function(){
        var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books';
        var match = true;

        // var url = 'http://localhost:5000/api/books';

        let name = document.getElementById("namePost").value;
        let author = document.getElementById("authorPost").value;
        let isbn = document.getElementById("isbnPost").value;
        let price = document.getElementById("pricePost").value;

        var params = 'Name='+name+'&Author='+author+'&ISBN='+isbn+'&Price='+price;

        var re = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
        match = re.exec(isbn);

        if(match){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Book added!");
                    // window.location.href = 'add';
                }
            };

            xhttp.open("POST", url,
                true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send(params);
        }else{
            alert("Invalid ISBN format!");
        }
    }
    )

// var redirect = function(){
//     document.location.href="add.html"
// }