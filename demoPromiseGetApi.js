var url = "https://6503ad7ea0f2c1f3faec1954.mockapi.io/api/nhatlinh/v1/user";

var myfn = (resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(xhttp.responseText);
            resolve(users);
        }
    };
    xhttp.open("GET",url, true );
    xhttp.send();
}

var promise = new Promise(myfn);
console.log(promise);
promise.then((data) => {
    console.log(data);
    const lst = document.getElementById("list");
    const lstName = data.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        return listItem;
    }) 
    lstName.forEach(item => {
        lst.appendChild(item);
    });
});