// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const maVariable = ['1', '2', '3'];
console.log(maVariable[1]);
const eleve1 = { nom: 'Lex', age: 100 };
const eleve2 = { nom: 'Tau', age: 100 };
console.log(eleve1.nom);
const eleves = [eleve1, eleve2];
console.log(eleves);
console.log(eleves[1].nom);
eleves.map((eleve, index) => {
  console.log(eleve);
  console.log(index);
});
