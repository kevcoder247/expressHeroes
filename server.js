const express = require('express');
const app = express();
const PORT = 3000;

const superheroes = ['Superman', 'Wonder Woman', 'Black Panther'];

//Index
app.get('/superheroes', (req, res) => {
  res.send(superheroes)
  console.log(superheroes)
})

//Show 
app.get('/superheroes/:index', (req, res) => {
  console.log(superheroes[req.params.index])
  const superHero = superheroes[req.params.index];
  res.send(`<h1>${superHero}</h1>`)
})


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})