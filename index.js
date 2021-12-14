const express = require('express');
const ejs = require("ejs");

//express app
const app = new express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


//home route
app.get("/", (req, res) => {
    res.render("../views/home.ejs");
});

app.get("/events", (req, res) => {
    res.render("../views/events.ejs");
});

app.get("/orgs", (req, res) => {
    res.render("../views/orgs.ejs");
});

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> (console.log(`Server started on PORT NO. ${PORT}`)));