document.getElementById("submitNewBook").addEventListener("click",
    function(){
        // console.log("book added!");

        // var url = 'https://csc3221-final-project-back-end.herokuapp.com/api/books';

        var url = 'http://localhost:5000/api/books';

        let name = document.getElementById("namePost").value;
        let author = document.getElementById("authorPost").value;
        let isbn = document.getElementById("isbnPost").value;
        let price = document.getElementById("pricePost").value;

        // var params = {
        //     name: name,
        //     author: author,
        //     isbn: isbn,
        //     price: price
        // }

        var params = 'Name='+name+'&Author='+author+'&ISBN='+isbn+'&Price='+price;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Book added!");
                window.location.href = 'add';
            }
        };

        xhttp.open("POST", url,
            true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(params);
    }
    )

// var redirect = function(){
//     document.location.href="add.html"
// }