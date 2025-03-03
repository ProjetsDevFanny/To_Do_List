// Créer un form pour taper les todos

// Ajouter sur le DOM ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo quand on click dessus: (.remove()) => bubbles
// eventlistener au click

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter des todos

// --------------------------------------------------------------------------------------------------------------

const form = document.querySelector("form");
let todo = "";
const li = document.querySelector("li");

// récupère le texte qui est tapé en temps réel dans l'input:
input.addEventListener("input", (e) => {
  todo = e.target.value;
  console.log(todo);
});

// Ajouter un todo à la liste au submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".items > ul").innerHTML += `
  <li>${todo}</li>`;
});

// Supprimer un todo quand on click dessus: (.remove()) => bubbles)
li.addEventListener("click", () => {
  console.log("test");
  li.remove();
});
