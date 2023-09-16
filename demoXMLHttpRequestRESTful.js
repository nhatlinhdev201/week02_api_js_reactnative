//Get all users 
var url = "https://6503ad7ea0f2c1f3faec1954.mockapi.io/api/nhatlinh/v1/user";
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);