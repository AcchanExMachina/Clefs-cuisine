// Définir les prénoms et numéros
let Samir = ["Samir", "0769178438"];
let Mamadou = ["Mamadou", "0615710137"];
let Doriane = ["Doriane", "0784735326"];
let Cedric = ["Cédric", "0696050648"];
let Maxime = ["Maxime", "0695373005"];
let Maher = ["Maher", "0641291747"];
let Bafode = ["Bafodé", "0789902163"];

// Ajouter les éléments dans le tableau principal
let keysHolder = [Samir, Mamadou, Doriane, Cedric, Maxime, Maher, Bafode];

// Fonction pour changer le contenu des balises
function updateKeysHolder(index) {
    // Vérifie si l'index est valide
    if (index >= 0 && index < keysHolder.length) {
        
        let selectedKeyHolder = keysHolder[index];
        // Modifier le contenu des balises
        document.getElementById("forename").innerText = selectedKeyHolder[0];
        document.getElementById("number").innerText = selectedKeyHolder[1];
    } else {
        console.error("Index invalide.");
    }
}

// Exemple d'utilisation
updateKeysHolder(1); // Affiche Mamadou et son numéro
