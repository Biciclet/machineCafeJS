function cafe() {

var court = 1;
// var long = 2;
// var lait = 3;

var choix = prompt("1 café court - 2 café long - 3 café au lait");
if (choix == court) {
var piece = prompt("insérez votre monnaie");
}

// else if (choix == long) {
//   var piece = prompt("insérez votre monnaie")
// }

var rendu = piece - court;

if (piece == court) {
alert("préparation café court");
}

  else if (piece > court) {
      alert("préparation café court");
      alert("voici votre monnaie: " + rendu + " €. Merci!");
    }

else if(piece < court) {
  alert("montant minimal 1€");
}
}

var gobelets = 11;
for (var i = 0; i < 11; i++) {
  console.log("gobelets restants: ", gobelets);
  gobelets --;
  cafe();
}
alert("machine hors service");
console.log("machine hors service");


  // else if (piece == long) {
  //     alert("préparation café long");
  //     }
  //     else if (piece == lait) {
  //         alert("préparation café au lait");
  //         }
  //     else {
  //       alert("insérez 1, 2 ou 3 €");
  //     }
