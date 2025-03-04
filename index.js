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
const todoList = document.querySelector(".todoList");
let inputTodo = "";
let firstLi = document.getElementById("firstLi");
// let newLiUl = document.querySelector(".items > ul");

// récupère le texte qui est tapé en temps réel dans l'input:
inputText.addEventListener("input", (e) => {
  inputTodo = e.target.value;
});

// Ajoute un écouteur d'événements pour le formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTodo !== "") {
    // Si l'input n'est pas vide
    const newLi = document.createElement("li"); // Crée un nouvel élément <li>
    newLi.textContent = inputTodo; // Ajoute le texte de l'input à la nouvelle <li>
    firstLi.remove();

    // Ajout d'évènements au click :
    newLi.addEventListener("click", (e) => {
      let isClicked = newLi.classList.contains("beforeChecked"); // Vérifie si l'élément a déjà été cliqué
      if (!isClicked) {
        newLi.classList.add("beforeChecked");
        newLi.classList.add("afterSuppr"); // if (e.target.classList.contains("beforeChecked")) {  // Vérifie si
      } else {
        newLi.remove(); // Supprime l'élément du DOM au deuxième clic
      }
    });

    todoList.appendChild(newLi); // Ajoute la nouvelle <li> à la liste
    input.value = ""; // Vider l'input
  }
});

// Explications:
// Que fait e.target.tagName === "LI" ?
// Dans l'événement click, e.target représente l'élément exact sur lequel tu as cliqué.

// Avec e.target.tagName, on récupère le nom de la balise de cet élément (en majuscules).

// Donc, if (e.target.tagName === "LI") signifie :
// 👉 "Si l'élément cliqué est une <li>, alors fais quelque chose" (ici, le supprimer).
