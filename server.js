const express = require("express");
const app = express();
const port = 3000;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', async(req,res) =>{
    const response = await fetch(apiEndpoint);
    const body = await response.text();

    // console.log(body);
    res.send(body)
})

app.listen(4000, () =>{
    console.log("app running on port 4000 yo")
})


const apiEndpoint = "https://the-trivia-api.com/api/questions?limit=10&region=US&difficulty=hard"
// web adress https://the-trivia-api.com/docs/#getQuestion