//Opdracht 1 Een click event vastmaken aan een button.
document.getElementById("mybutton");
// Wanneer er op de button geklikt wordt, geef een alert: "button clicked" 
mybutton.addEventListener("click", () => alert("button clicked!"));



//Opdracht 2 Gebruik defer om te wachten met het draaien van JavaScript totdat de HTML pagina is geladen.
// Dit was al gedaan in de gegeven HTML doorgegeven #feedback.

//Zorg ervoor dat het click event pas aan de button wordt vastgemaakt, op het moment dat de HTML pagina volledig is geladen.
// Dit doet defer toch?

//Opdracht 3: Voeg een tweede button toe aan je HTML met de tekst "Change Background" is Done!

//Voeg de volgende CSS toe in je CSS file. is Done!

//Geef de body tag de class "blue-background" is Done!

//Maak een nieuwe functie die de volgende functionaliteiten in zich heeft: Maak een klik event vast aan de nieuwe button
document.getElementById("mychangebutton");

//Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 
mychangebutton.addEventListener("click", toggleColor);
let toggleStatus = 0;
/* Opdracht 4:

We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er
op de knop wordt geklikt. De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer
afgehaald en er weer opgezet, etc.
 */
function toggleColor() {
  if (toggleStatus == 0) {
    document.body.style.backgroundColor = 'red';
    toggleStatus = 1;
  } else {
    document.body.style.backgroundColor = 'blue';
    toggleStatus = 0;
  }
}

