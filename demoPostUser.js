var url = "https://6503ad7ea0f2c1f3faec1954.mockapi.io/api/nhatlinh/v1/user";
var data = {
    "name" : "Pham Nhat Linh",
    "age" : 21,
    "class" : "DHKTPM16A"
};
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if(xhr.readyState == 4 && xhr.status == "201") {
        console.table("table user :", users);
    } else {
        console.error("error :",users);
    }
}
xhr.send(json);