// Afficher une question avec ces 4 réponses
// L'utilisateur choisi une réponse
// Comparer la réponse de l'utilisateur avec la réponse que l'on attend
// si strictement égal -> "Bravo" si différent -> "Perdu"
// on pose la prochaine question ...


let tab =
    [{
        Question: "Quel est le moteur le moins fiable du moment?",
        A: "1.2 TCE",
        B: "1.2 Puretech",
        C: "0.9 TwinAir",
        D: "la réponse D",

        bonneReponse: "B",
    },
    {
        Question: "Quel constructeur automobile est Roumain (Au départ)?",
        A: "FIAT",
        B: "Pffff, il n'y en a pas, voyons!",
        C: "DACIA",
        D: "PEUGEOT",

        bonneReponse: "C",
    },
    {
        Question: "Peut-on prendre une clé de 13 si une clé de 12 suffit?",
        A: "C'est qui 13?",
        B: "Qui ne tente rien, n'a rien!",
        C: "Jocker",
        D: "Non, juste pour abimer le matériel",

        bonneReponse: "D",
    },
    {
        Question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
        A: "Gris",
        B: "Blanc",
        C: "Stéphanie de Monaco",
        D: "Vous pouvez répéter la question?",

        bonneReponse: "B",
    },
    {
        Question: "Pour finir, kupacronix le grand était un grand roi d'Egypte, épelle-moi cela en 4 lettres?",
        A: "Super moiT-moiT",
        B: "Haha",
        C: "Cela",
        D: "Je demande l'appel à un ami!",

        bonneReponse: "C",
    }]

/*
tab.forEach(objet => {
    let reponseUtilisateur = prompt(`${objet.Question} : \n
        A : ${objet.A} \n
        B : ${objet.B} \n 
        C : ${objet.C} \n
        D : ${objet.D}
        `) // pour chaque objet que tu récupère, prends la question du-dit objet

    if (reponseUtilisateur == objet.bonneReponse) {
        alert("VRAI")   // si la réponse utilisateur est strictement la même que la bonne réponse, alors je marque "vrai"
    }
    else {
        alert(`FAUX, la réponse est ${objet[objet.bonneReponse]}`)  // récupère et affiche la bonne réponse!!!
    }

    alert("Passons à la question suivante")
})
*/
/*
let h3 = document.getElementById("bouton")
h3.addEventListener("click", Jouer)

let div = document.getElementById("div")
div.addEventListener("click", Choisir)

 // fonction jouer, doit donner la bonne réponse, avec "vrai" ou "faux", avec le click sur une réponse
 
function Jouer() {
    tab.forEach(objet => {

        div.innerHTML += `<div>
      
        <p>${objet.Question}</p>
        <ul class="pad fontDiv alignCenter">
            <li>A : ${objet.A}</li>
            <li>B : ${objet.B}</li>
            <li>C : ${objet.C}</li>
            <li>D : ${objet.D}</li>
        </ul>

        </div>`
    })}
        
        
            let reponseUtilisateur = prompt(`${objet.Question} : \n
                A : ${objet.A} \n
                B : ${objet.B} \n 
                C : ${objet.C} \n
                D : ${objet.D}
                `) // pour chaque objet que tu récupère, prends la question du-dit objet
        */

     
let currentIndex = 0;
let div = document.getElementById("div");
let bouton = document.getElementById("bouton");

bouton.addEventListener("click", () => {
    currentIndex = 0;
    afficherQuestion();
});

function afficherQuestion() {
    if (currentIndex >= tab.length) {
        div.innerHTML = "<p>Quiz terminé !</p>";
        return;
    }

    let q = tab[currentIndex];

    div.innerHTML = `
        <p>${q.Question}</p>
        <ul>
            <li><button data-rep="A">${q.A}</button></li>
            <li><button data-rep="B">${q.B}</button></li>
            <li><button data-rep="C">${q.C}</button></li>
            <li><button data-rep="D">${q.D}</button></li>
        </ul>
    `;

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", verifierReponse);
    });
}

function verifierReponse(event) {
    let reponse = event.target.dataset.rep;
    let bonne = tab[currentIndex].bonneReponse;

    if (reponse === bonne) {
        alert("Bravo !");
    } else {
        let bonneTexte = tab[currentIndex][bonne];
        alert(`Perdu ! La bonne réponse était : ${bonne} : ${bonneTexte}`);
    }

    currentIndex++;
    afficherQuestion();
}