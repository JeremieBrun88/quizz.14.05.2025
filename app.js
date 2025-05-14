// Afficher une question avec ces 4 réponses
// L'utilisateur choisi une réponse
// Comparer la réponse de l'utilisateur avec la réponse que l'on attend
// si strictement égal -> "Bravo" si différent -> "Perdu"
// on pose la prochaine question ...


let tab =
    [{
        Question: "Quel est le moteur le moins fiable du moment?",
        A: "1.2 TCE",
        B: "1.2 Puretech Turbo",
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
        Question: "Selon vous, cette question est utile?",
        A: "La réponse D",
        B: "Fraise des bois",
        C: "Jocker",
        D: "J'ai rien dit moi!",

        bonneReponse: "D",
    },
    {
        Question: "Quel est la couleur du cheval blanc d'henri IV ?",
        A: "Gris",
        B: "Blanc",
        C: "Stéphanie de Monaco",
        D: "Vous pouvez répéter la question?",

        bonneReponse: "B",
    },
    {
        Question: "Pour finir, kupacronix le grand était un grand roi d'Egypte, épelles-moi cela en 4 lettres?",
        A: "Pfff",
        B: "Haha",
        C: "Cela",
        D: "Je demande l'appel à un ami!",

        bonneReponse: "C",
    }]


tab.forEach(objet => {
    let reponseUtilisateur = prompt(`${objet.Question} : \n
        A : ${objet.A} \n
        B : ${objet.B} \n 
        C : ${objet.C} \n
        D : ${objet.D}
        `) // pour chaque objet que tu récupère, prends la question du-dit objet

    if (reponseUtilisateur == objet.bonneReponse) {
        alert("VRAI")
    } // si la réponse utilisateur est strictement la même que la bonne réponse, alors je marque "vrai"
    else {
        alert(`FAUX, la réponse est ${objet.bonneReponse}`)
    }

})

