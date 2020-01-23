var express = require("express");
var app = express();

app.use(express.json())

app.use(express.static(__dirname+"/Pages"))


app.get("/", function(req, res)
{
    res.send('index.html');
});

app.get("/todo", function(req,res)
{
    res.sendFile(__dirname+"/Pages/todo.json");
});

app.get("/read-todo", function(req, res)
{
    res.sendFile(__dirname+"/Pages/read-todo.html");
})

app.listen(3000, function()
{
    console.log("Server is running on port 3000");
});
