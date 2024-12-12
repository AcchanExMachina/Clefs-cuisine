// Définir les prénoms, numéros et numéros de chambre
let Samir = ["Samir", "0769178438", "332"];
let Mamadou = ["Mamadou", "0615710137", "?"];
let Doriane = ["Doriane", "0784735326", "?"];
let Cedric = ["Cédric", "0696050648", "?"];
let Maxime = ["Maxime", "0695373005", "?"];
let Maher = ["Maher", "0641291747", "?"];
let Bafode = ["Bafodé", "0789902163", "?"];

// Ajouter les éléments dans le tableau principal
let keysHolder = [Samir, Mamadou, Doriane, Cedric, Maxime, Maher, Bafode];

// Fonction pour changer le contenu des balises
function updateKeysHolder(index) {
    // Vérifie si l'index est valide
    if (index >= 0 && index < keysHolder.length) {
        let selectedKeyHolder = keysHolder[index];

        // Modifier le contenu des balises correspondantes
        document.querySelectorAll(".info")[0].innerText = selectedKeyHolder[0]; // Nom
        document.querySelectorAll(".info")[1].innerText = selectedKeyHolder[1]; // Numéro de téléphone
        document.querySelectorAll(".info")[2].innerText = selectedKeyHolder[2]; // Numéro de chambre
    } else {
        console.error("Index invalide.");
    }
}

// Exemple d'utilisation : mettre à jour avec le premier élément (Samir)
updateKeysHolder(0);
