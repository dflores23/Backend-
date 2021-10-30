// Import Dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json')

// Create our app object
const app = express();

// Create middleware
app.use(cors());

// Home route for testing our app

app.get("/", (req, res)=> {
    res.json(home);
});

// Route for retrieving projects
app.get("/projects", (req,res)=>{
    res.json(projects);
});

// Route for retrieving about
app.get("/about", (req,res)=> {
    res.json(about);
});

// Declare a variable for our post number
const PORT = process.env.PORT || 4000;

// Turn on the server listener
app.listen(PORT, ()=> console.log('Listining on port ${PORT}'))
