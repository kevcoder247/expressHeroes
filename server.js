const express = require('express');
const app = express();
const PORT = 3000;

const superheroes = [
  {
    name:'Superman',
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
  {
    name: 'Wonder Woman',
    powers: ['flight', 'invulnerability', 'super strength']
  },
  {
    name: 'Black Panther',
    powers: ['Agility', ' reflexes', 'superhumanly acute']
  }
];

//Index
app.get('/superheroes', (req, res) => {
  res.send(superheroes)
  console.log(superheroes)
})

//Show 
app.get('/superheroes/:index', (req, res) => {
  //Reference variable that captures the superheroes name from the array of objects
  const superHeroName = superheroes[req.params.index].name;
  //Reference variable that captures the  superheroes power array
  const powers = superheroes[req.params.index].powers;

  //loop through the powers array and create a new <li> and place it in the ul in the res.send in order to display powers as a ul.
  const singlePower = powers.map(power => `<li>${power}</li>`).join('');

  res.send(`
    <h1>Name: ${superHeroName}</h1>
    <h3>Powers</h3>
    <ul>
      ${singlePower}
    </ul>
    `)
})


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})