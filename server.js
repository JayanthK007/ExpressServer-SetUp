const express = require("express");
const app = express();

app.get("/",function(request,response){
  response.send("Hello");
});

app.get("/Contact",function(req,res){
  res.send("contact me at: AngelaYu@gmail.com");
});
app.get("/about",function(req,res){
  res.send("I'm angela yu from london app brewry website");
});
app.get("/hobbies",function(req,res){
  res.send("coffee, tea, reading");
});
app.listen(3000, function(){
  console.log("server started on port 3000");
});
