// Demo Jquery Ajax

const urlBacon = "https://jsonplaceholder.typicode.com/comments";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log('data ducoment :', data);
        })
        .fail(function() {
            alert("Data get from jsonplaceholder: ");
        });
})()