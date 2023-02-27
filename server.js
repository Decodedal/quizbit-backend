const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("hello world")
})

app.listen(4000, () =>{
    console.log("app running on port 4000 yo")
})


const apiEndpoint = "https://the-trivia-api.com/api/questions?limit=10&region=US&difficulty=hard"
// web adress https://the-trivia-api.com/docs/#getQuestion