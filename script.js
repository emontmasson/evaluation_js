// exercice 1
/*
    let utilisateur = {nom: "Alice Dupont" , email: "alice.dupont@email.com" };
    console.log(utilisateur.nom, utilisateur.email);
*/

// exercice 2 

// let utilisateurs = [
//     {nom: "Alice Dupont" , email: "alice.dupont@email.com" }, // ligne 0, colonne nom : "Alice Dupont"
//     {nom: "Bob Martin" , email: "bob.martin@email.com"},
//     {nom: "Charlie Durand", email: "charlie.durand@email.com"}
// ]
/*
     for(let ligneTableau = 0; ligneTableau < utilisateurs.length; ligneTableau = ligneTableau +1 ) {
         console.log(utilisateurs[ligneTableau].nom, utilisateurs[ligneTableau].email);
     }
*/

// exercice 3 

// let utilisateurs = [
//     {nom: "Alice Dupont" , email: "alice.dupont@email.com" }, // ligne 0, colonne nom : "Alice Dupont"
//     {nom: "Bob Martin" , email: "bob.martin@email.com"},
//     {nom: "Charlie Durand", email: "charlie.durand@email.com"}
// ]

/*
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

*/



// exercice 4

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






