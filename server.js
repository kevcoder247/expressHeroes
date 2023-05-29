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

const villians = [
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: [
      "ability to fit in Black Panther's suit",
      "internet agreement that he looks badass",
    ],
  },
]

//Index
app.get('/characters', (req, res) => {
 const characters = {
  superheroes: superheroes,
  villians : villians
 }
 res.send(characters);
 //console.log(characters.superheroes[0])
})

//Show 
app.get('/characters/:index', (req, res) => {
  //Reference variable that captures the superheroes name from the array of objects
  const superHeroName = superheroes[req.params.index].name;

  //Reference variable that captures the  superheroes power array
  const superHeroPowers = superheroes[req.params.index].powers;

  //loop through the powers array and create a new <li> and place it in the ul in the res.send in order to display powers as a ul.
  const singlePower = superHeroPowers.map(power => `<li>${power}</li>`).join('');
  
  //Reference variable that captures the villans name from the array of objects
  const villanName = villians[req.params.index].name;

  //Reference variable that captures the  Villans power array
   const villanPowers = villians[req.params.index].powers;

   //loop through the powers array and create a new <li> and place it in the ul in the res.send in order to display powers as a ul.
   const singleVillanPower = villanPowers.map(power => `<li>${power}</li>`).join('');

  
  res.send(`
    <h1>Name: ${superHeroName}</h1>
    <h3>Powers</h3>
    <ul>
      ${singlePower}
    </ul>
 
    <hr/>

    <h1>Name: ${villanName}</h1>
    <h3>Powers</h3>
    <ul>
      ${singleVillanPower}
    </ul>
    `)
})


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})