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

// récupère le texte qui est tapé en temps réel dans l'input:
input.addEventListener("input", (e) => {
  todo = e.target.value;
});

// Annuler le changement de page quand on presse sur "Valider" dans un formulaire:
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log("yes !");
