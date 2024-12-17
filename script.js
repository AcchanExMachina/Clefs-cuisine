// Définir les prénoms, numéros et numéros de chambre
let Samir = ["Samir", "07 69 17 84 38", "332"];
let Mamadou = ["Mamadou", "06 15 71 01 37", "213"];
let Doriane = ["Doriane", "07 84 73 53 26", "?"];
let Cedric = ["Cédric", "06 96 05 06 48", "?"];
let Maxime = ["Maxime", "06 95 37 30 05", "?"];
let Maher = ["Maher", "06 41 29 17 47", "326"];
let Bafode = ["Bafodé", "07 89 90 21 63", "?"];
let Thomas = ["Thomas", "07 49 05 71 94"]

// Ajouter les éléments dans le tableau principal
let keysHolder = [Samir, Mamadou, Doriane, Cedric, Maxime, Maher, Bafode, Thomas];

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
// updateKeysHolder(7);

// Récupérer l'élément du menu déroulant
const personSelect = document.getElementById("personSelect");

// Écouter le changement de sélection
personSelect.addEventListener("change", function () {
    // Récupérer la valeur de l'option sélectionnée (l'index)
    const selectedIndex = parseInt(personSelect.value);

    localStorage.setItem("lastSelectedIndex", selectedIndex);

    // Appeler la fonction pour mettre à jour les informations
    updateKeysHolder(selectedIndex);
});

// Vérifier si un index est sauvegardé dans le localStorage
const savedIndex = localStorage.getItem("lastSelectedIndex");

// Si un index existe, on le charge, sinon on affiche le premier élément
if (savedIndex !== null) {
    document.getElementById("personSelect").value = savedIndex;
    updateKeysHolder(parseInt(savedIndex));
} else {
    updateKeysHolder(1); // Valeur par défaut si rien n'est sauvegardé
}
