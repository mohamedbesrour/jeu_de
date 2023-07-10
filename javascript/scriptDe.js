// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDe = function () {
    // Générer un nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)
  
    // Retourner ce nombre
    return nombre
  }
//-------------Affiche le texte:
  const deTexte = {
    '1': 'Un',
    '2': 'Deux',
    '3': 'Trois',
    '4': 'Quatre',
    '5': 'Cinq',
    '6': 'Six',
  }

//-------------Affiche le Dessin:
  const deDessin = {
    '1':
`
|     |
|  o  |
|     |
`,
    '2':
`
|o    |
|     |
|    o|
`,
    '3':
`
|o    |
|  o  |
|    o|
`,
    '4':
` 
|o   o|
|     |
|o   o|
`,
    '5':
` 
|o   o|
|  o  |
|o   o|
`,
    '6':
`
|o   o|
|o   o|
|o   o|
`,
  }
  
  
  // Afficher le résultat sous forme de nombre
  // Afficher le résultat sous forme de text
  const resultat = lancerDe()
  console.log(resultat + ' (' + deTexte[resultat] + ')')
  
  // Afficher le résultat sous forme de dé
  console.log(deDessin[resultat])





// TEST___________________________________________TEST

// les deux boutons avec lequelles on joue
let button = document.querySelector('#nbrde');
let holder = document.querySelector('#finalNbr');

let image = document.querySelector('#image');


//début de partie 
let currentScore = 0;
let playerActif = '1';
let finalResult =[];
finalResult['1']=0;
finalResult['2']=0;
let nbr = 0;
let img = document.createElement("img");

//nombre aléatoir entre 6 et 1
let nbrRandom =(max,min)=>{
  return Math.floor(Math.random() * 6 + 1);
}


//changer de joueur
let changePlayer = () => {

  if (playerActif == '1') {
    playerActif = '2';
  } else {
    playerActif = '1'
  }  
 
  document.querySelector('.player1').classList.toggle("actif");
  document.querySelector('.player2').classList.toggle("actif");
};


//lancer le dé
button.addEventListener('click', ()=>{

  nbr = nbrRandom();

  if (nbr !== 1) {
    currentScore += nbr;
    document.querySelector(".score" + playerActif).innerHTML = currentScore;

  } else {
    currentScore = 0;
    document.querySelector(".score" + playerActif).innerHTML = currentScore;
 
    changePlayer()
  }
  //img.src = "images/" + nbr + ".png";
  //image.appendChild(img)
  image.innerHTML = nbr
});



// attribuer les scores
holder.addEventListener('click',()=>{  

    finalResult[playerActif] += currentScore;

    document.querySelector(".finalScore"+ playerActif).innerHTML= finalResult[playerActif];
    document.querySelector(".score"+playerActif).innerHTML =0;

    if(finalResult[playerActif] >= 100){
      document.querySelector(".finalScore"+[playerActif]).textContent = "WINNER"

    }else{
      changePlayer()

      
    }
  
}) 
 


