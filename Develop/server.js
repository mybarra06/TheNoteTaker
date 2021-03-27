//import modules needed
const express= require("express");
const app= express();//init express
const PORT = process.env.PORT || 5000;//grabs port
// const path = require("path");
// const fs = require("fs");
// const notes = [];
const htmlRoutes = require("./db/routes/html-routes");
const apiRoutes = require("./db/routes/api_routes")


app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.use(express.urlencoded({ extended: true }));//handle url encoded data
app.use(express.json());// body parser
app.use(express.static("public"));// sets public folder to static

app.get("*", function (req,res) { 
    res.send("I am the heroku test app"); //heroku
});



app.listen(PORT, ()=> console.log("App listening on port "+ PORT));



