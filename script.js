function apparition(pika){
    let i = document.createElement('img');
    i.src = pika.image;
    document.body.appendChild(i);

    let n = document.createElement('p');
    n.textContent = pika.nom;
    document.body.appendChild(n);

    let t = document.createElement('p');
    t.textContent = pika.type;
    document.body.appendChild(t);

    let pdv = document.createElement("p");
    pdv.textContent = pika.pointsDeVie;
    document.body.appendChild(pdv);

    let a = document.createElement("p");
    a.textContent = pika.attaque;
    document.body.appendChild(a);

    let d = document.createElement("p");
    d.textContent = pika.defense;
    document.body.appendChild(d);
};
  
class Pokemon {
    constructor(nom, type, pointsDeVie, attaque, defense, image){
        this.nom = nom;
        this.type = type;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.defense = defense;
        this.image = image;
    }
}

let papilusion = new Pokemon("papilusion", "insecte", 30, 40, 20, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png");
let tortank = new Pokemon("tortank", "eau", 60, 90, 50, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png");
let roucool = new Pokemon("roucool", "normal", 40, 50, 35, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png");
let dracaufeu = new Pokemon("dracaufeu", "feu", 60, 80, 55, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png");
let pika = {
    nom: "Pikachu",
    type: "electricité",
    pointsDeVie: 35,
    attaque: 55,
    defense: 40,
    image: "https://static.printler.com/cache/1/f/c/7/2/8/1fc7280e4991deb9ba5e946a7fc0e5e151174f58.jpg"
}

let tousReuni = [papilusion, tortank, roucool, dracaufeu, pika];
for(let i = 0; i<tousReuni.length; i++){
    apparition(tousReuni[i]);
}



let apparence = document.getElementById(title);  
    title.style.color="blue";
    title.style.fontSize=50 + "px";




