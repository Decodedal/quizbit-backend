const openai = require('openai');
const fs = require('fs');
require("dot-env")

// Set up OpenAI API credentials
;
openai.apiKey = process.env.OPENAI_API_KEY;

// Define the prompt and parameters
const prompt = 'Generate a trivia question about dogs with four multiple choice answers.';
const model = 'text-davinci-002';
const maxTokens = 128;
const n = 1;
const temperature = 0.5;

// Call the OpenAI API to generate the question and answer options
openai.Completion.create({
  engine: model,
  prompt: prompt,
  maxTokens: maxTokens,
  n: n,
  temperature: temperature
})
.then(response => {
  const question = response.choices[0].text.trim();
  const options = response.choices[0].options.trim().split('\n');

  // Convert the question and answer options to a JSON string
  const data = {
    question: question,
    options: {
      A: options[0],
      B: options[1],
      C: options[2],
      D: options[3]
    }
  };
  const json = JSON.stringify(data);

  // Write the JSON string to a file
  fs.writeFile('question.json', json, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Question written to question.json');
  });
})
.catch(error => console.error(error));