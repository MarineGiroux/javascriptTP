const valeur1 = 1;
const valeur2 = 2;
const valeur3 = 3;

if (valeur1 === valeur2 && valeur2 === valeur3) {
    console.log("Les trois variables sont identiques");
} else if (valeur1 === valeur2 || valeur1 === valeur3 || valeur2 === valeur3) {
    console.log("Deux des variables sont identiques");
} else {
    console.log("Toutes les variables sont différentes");
}

