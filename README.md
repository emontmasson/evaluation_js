# 📝 Exercice 1 : Créer un objet utilisateur

## Consigne :
- Crée un objet utilisateur avec les propriétés suivantes :
  - **nom** → "Alice Dupont"
  - **email** → "alice.dupont@email.com"
- Affiche cet objet dans la console.

### 🛠 Aide :
Utilise la notation `{ key: value }` pour créer l’objet.

---

# 📝 Exercice 2 : Créer un tableau d’utilisateurs

## Consigne :
- Crée un tableau `utilisateurs` contenant trois objets représentant des utilisateurs.
- Affiche ce tableau dans la console.

### 📌 Exemple attendu :
```js
[
  { nom: "Alice Dupont", email: "alice.dupont@email.com" },
  { nom: "Bob Martin", email: "bob.martin@email.com" },
  { nom: "Charlie Durand", email: "charlie.durand@email.com" }
]
```

---

# 📝 Exercice 3 : Afficher les utilisateurs dans le DOM

## Consigne :
- Dans le fichier HTML, ajoute un `<div>` avec l’ID **container**.
- En JavaScript, ajoute un `<h1>` avec le texte **"Liste des utilisateurs"** dans `#container`.
- Si le tableau `utilisateurs` contient des éléments, affiche un tableau `<table>` contenant chaque utilisateur dans un `<tr>`  avec son **nom** et **email**, dans un `<td>`, chacun.
- S’il est vide, affiche **"Aucun utilisateur trouvé"**.

### 🛠 Aide :
- Vérifie `if (utilisateurs.length > 0)`.
- Utilise `.forEach()` pour parcourir le tableau.

---

# 📝 Exercice 4 : Faire un Fetch pour récupérer des utilisateurs

## Consigne :
- Déclare une constante `API_URL` contenant l’URL :
  ```
  https://jsonplaceholder.typicode.com/users
  ```
- Ajoute un bouton **"Charger les utilisateurs"** dans `#container`.
- Lorsqu’on clique dessus :
  1. Affiche un message **"Chargement en cours..."**.
  2. Fais un `fetch` vers `API_URL`.
  3. Récupère la réponse en JSON et stocke-la dans un tableau `utilisateursFetch`.
  4. Affiche ces nouveaux utilisateurs dans le DOM.
- Si aucun utilisateur n’est trouvé, affiche **"Aucun utilisateur trouvé"**.

### 🛠 Aide :
- Utilise `fetch()` et `.then(response => response.json())`.

