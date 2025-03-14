// faire un projet git
// mettre ce script
// mettre des exercices à faire
// consigne pour cette exercice :
// Bonjour nom1, nom2 et nom3


/*let nom = "Montmasson";
let prenom = "Elodie";

console.log(`Bonjour ${prenom} ${nom}`);

nom = "Dupont";
prenom = "Jean";

console.log(`Bonjour ${prenom} ${nom}`);*/
//
// let tabUtilisateurs =
//     [
//         {nom: "Montmasson" , prenom:"Elodie"},
//         {nom: "Dupont" , prenom:"Jean"},
//         {nom: "Truc" , prenom:"Jean"},
//         {nom: "Bidule" , prenom:"Jean"},
//         {nom: "Chouette" , prenom:"Jean"}
//     ]
// // un code qui récupère des données issus d'une application backend
// et les mettra dans un tableau
/*console.log(tabUtilisateurs[0].nom);

console.log(tabUtilisateurs[1].nom);
console.log(tabUtilisateurs[2].nom);
console.log(tabUtilisateurs[3].nom);*/


// for(let index = 0; index < tabUtilisateurs.length; index = index+1) {
//
//
//     console.log("Bonjour "+ tabUtilisateurs[index].nom +" "+ tabUtilisateurs[index].prenom);
// }

// index = 0
// index = 1
// X index = 2

// quand le tableau a 3 éléments
// à la ligne (index) 0, on a le premier élément
// à la ligne (index) 1, on a le deuxième élément
// à la ligne (index) 2, on a le troisième élément


// let utilisateurs = [
//     {nom: "Alice Dupont" , email: "alice.dupont@email.com" }, // ligne 0, colonne nom : "Alice Dupont"
//     {nom: "Bob Martin" , email: "bob.martin@email.com"},
//     {nom: "Charlie Durand", email: "charlie.durand@email.com"}
// ]

createUserHtml();


async function createUserHtml() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const utilisateurs = await reponse.json();

// récupère l'élément de la div
    let divUser = document.getElementById("divUser");

// si le tableau des utilisateurs contient plus d'une valeur
    if(utilisateurs.length > 0) {

        let tableUtilisateur = document.createElement("table");
        // <table>
        // <tr>
        //     <td></td>
        // <tr>
        // </table>

        for(let ligneTableau = 0; ligneTableau < utilisateurs.length; ligneTableau = ligneTableau +1 ) {

            // création d'une nouvelle ligne
            let ligneHtmlTableau = document.createElement("tr");
            // création d'une colonnne
            let colonneNomHtmlTableau = document.createElement("td");
            // on met le nom de l'utilisateur dans la colonne
            colonneNomHtmlTableau.innerText = utilisateurs[ligneTableau].name;
            // on ajoute la colonne à la ligne
            ligneHtmlTableau.appendChild(colonneNomHtmlTableau);


            // création d'une colonnne
            let colonneEmailHtmlTableau= document.createElement("td")
            // on met l'email de l'utilisateur dans la colonne
            colonneEmailHtmlTableau.innerText = utilisateurs[ligneTableau].email;
            // on ajoute la colonne à la ligne
            ligneHtmlTableau.appendChild(colonneEmailHtmlTableau)

            // on ajout la ligne au tableau html
            tableUtilisateur.appendChild(ligneHtmlTableau);

        }

        // on ajoute le tableau html à la div
        divUser.appendChild(tableUtilisateur);
    }
    else {
        let noUser = document.createElement("span");
        noUser.innerText = "Il n'y a pas d'utilisateur.";
        divUser.appendChild(noUser);
    }
}






