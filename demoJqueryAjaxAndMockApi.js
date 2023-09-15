const url = "https://6503ad7ea0f2c1f3faec1954.mockapi.io/api/nhatlinh/v1/user";
(function() {
    $.ajax({
            method: "GET",
            url: url,
            dataType: "json"
        })
        .done(function(data) {
            console.log('data ducoment :', data);
        })
        .fail(function() {
            alert("Data get from jsonplaceholder: ");
        });
})()