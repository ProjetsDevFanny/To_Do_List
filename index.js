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
const firstLi = document.getElementById("firstLi");

// récupère le texte qui est tapé en temps réel dans l'input:
// inputText.addEventListener("input", (e) => {
//   inputTodo = e.target.value;
// });

// Vérifie si la liste est vide et affiche firstLi si nécessaire
function checkEmptyList() {
  if (todoList.children.length === 0) {
    todoList.prepend(firstLi); // Remet firstLi au début de la liste
  }
}

// Ajoute un écouteur d'événements pour le formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputTodo = inputText.value.trim(); // Récupère la valeur de l'input

  // Stockage de la liste dans le local storage
  // window.localStorage.box = inputText.value;
  // let databox = window.localStorage.box;
  // console.log(databox);

  // Stockage de la liste dans le local storage (meilleure méthode)
  localStorage.setItem("maboite", inputText.value);
  let valeur = localStorage.getItem("maboite");
  console.log(valeur); // "Je stock ces données

  if (inputTodo !== "") {
    // Si l'input n'est pas vide
    const newLi = document.createElement("li"); // Crée un nouvel élément <li>
    newLi.textContent = inputTodo; // Ajoute le texte de l'input à la nouvelle <li>
    firstLi.remove();

    // Ajout d'évènements au click sur newLi:
    newLi.addEventListener("click", (e) => {
      let isClicked = newLi.classList.contains("beforeChecked"); // Vérifie si l'élément a déjà été cliqué
      if (!isClicked) {
        newLi.classList.add("beforeChecked", "afterSuppr"); // if (e.target.classList.contains("beforeChecked")) {  // Vérifie si
      } else {
        newLi.remove(); // Supprime l'élément du DOM au deuxième clic
        checkEmptyList();
      }
    });

    todoList.appendChild(newLi); // Ajoute la nouvelle <li> à la liste
    inputText.value = ""; // Vider l'input
  }
});
