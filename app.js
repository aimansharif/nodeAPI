var request = require("request");

//JSON using API nodeJS
request("https://jsonplaceholder.typicode.com/users/1", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData.name + " lives in " + parsedData["address"]["city"]);
    }
});