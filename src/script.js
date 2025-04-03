// Definera array av namn
let people = [
  "Inez",
  "Theo",
  "Kevin",
  "Felicia"
]


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const htmlInput = document.getElementById("searchInput")
  const htmlButton = document.getElementById("searchBtn")
  const htmlResult = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    let writtenName = htmlInput.value
    // 2. Skapa en boolean för found
    let found;
    // 3. Loopa igenom people-arrayen
    for(name of people){
      if(writtenName === name){
        found = true
        htmlResult.innerHTML = "Namn hittades!"
      }
      else if(found != true){
        found = false
        htmlResult.innerHTML = "Namn hittades inte"
      }
     
    }
    // 4. Jämför texten med varje namn i arrayen
    
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});