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

/* take note :
- beforeSend: function (xhr) { ... }: Đây là một hàm callback được gọi trước khi yêu cầu AJAX được gửi đi.
*/