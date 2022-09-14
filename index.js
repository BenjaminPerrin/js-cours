// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let mail = 'bob@bob.com';
let mdp = 'boby';
let checkMail;
let checkMdp;
check();
if (mail === checkMail && mdp === checkMdp) {
  console.log('bienvenu');
} else {
  console.log('mail or mdp not working');
  check();
}

function check() {
  checkMail = prompt('mail ?');
  checkMdp = prompt('mdp ?');
}
