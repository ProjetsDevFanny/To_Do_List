// Créer un form pour taper les todos

// Ajouter sur le DOM ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo quand on click dessus: (.remove()) => bubbles
// eventlistener au click

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter des todos

// --------------------------------------------------------------------------------------------------------------

const form = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');
let inputTodo = "";
let newLi = document.querySelector(".items > ul");
const todoListContainer = document.querySelector(".todolist-container");
// let size = 30; // Taille initiale

// récupère le texte qui est tapé en temps réel dans l'input:
inputText.addEventListener("input", (e) => {
  inputTodo = e.target.value;
});

// Ajouter un todo à la liste au submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newLi.innerHTML += `
  <li>${inputTodo}</li>`;
  input.value = ""; // Vider l'input
  // size += 5;
  // todoListContainer.style.height = size + "%";
});

// Changement de l'icône et du texte en after au survole et au clik du todo :
newLi.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.add("beforeChecked");
    e.target.classList.add("afterSuppr");
    // if (e.target.classList.contains("beforeChecked")) {  // Vérifie si l'élément possède la classe "to-remove"
    //   e.target.remove();  // Supprime l'élément du DOM
    // }
  }
});

// Explications:
// Que fait e.target.tagName === "LI" ?
// Dans l'événement click, e.target représente l'élément exact sur lequel tu as cliqué.

// Avec e.target.tagName, on récupère le nom de la balise de cet élément (en majuscules).

// Donc, if (e.target.tagName === "LI") signifie :
// 👉 "Si l'élément cliqué est une <li>, alors fais quelque chose" (ici, le supprimer).
