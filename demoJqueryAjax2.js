// https://api.jquery.com/jquery.ajax/
const url = "https://jsonplaceholder.typicode.com/todos/1";
$.ajax({
        url: url,
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });

/* take note :
- beforeSend: function (xhr) { ... }: Đây là một hàm callback được gọi trước khi yêu cầu AJAX được gửi đi.
*/