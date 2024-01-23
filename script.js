const modalContainer = document.querySelector(".modal-container");

const modalDeclencheur = document.querySelectorAll(".modal-declencheur");

modalDeclencheur.forEach(declencheur => declencheur.addEventListener("click", toggleModal));
 
function toggleModal() {
   modalContainer.classList.toggle("active");
}

// Pour l'onglet

const tabs = [...document.querySelectorAll('.tab')];

const tabContent = [...document.querySelectorAll('.tab-content')];

tabs.forEach(tab => tab.addEventListener("click", tabsAnimation));

function tabsAnimation(e) {

   const indexToRemove = tabs.findIndex(tab => tab.classList.contains('active-tab'));

   // Partie Acessibilité 
   
   tabs[indexToRemove].setAttribute("aria-selected", "false");
   tabs[indexToRemove].setAttribute("tabindex", "-1");

   tabs[indexToRemove].classList.remove("active-tab");
   tabContent[indexToRemove].classList.remove("active-tab-content");

   // index a montrée

   const indexToShow = tabs.indexOf(e.target);

   // Partie Acessibilité 

   tabs[indexToShow].setAttribute("aria-selected", "true");
   tabs[indexToShow].setAttribute("tabindex", "0");

   tabs[indexToShow].classList.add("active-tab");
   tabContent[indexToShow].classList.add("active-tab-content");
}

// 925DEV