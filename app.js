                                                //  variables declarées
let iframe = document.getElementById('iframe');
let area = document.querySelector('textarea');
let btnBold = document.getElementById('btnbold');
let btnItalic = document.getElementById('btnitalic');
let compteur = document.getElementById('compteur');
let maxLength = 200;
let barre = document.getElementById('barre');

compteur.innerHTML = maxLength
barre.setAttribute('max', maxLength);

                                                // Renvoi le texte de "area" dans l'iframe
area.addEventListener('input', () => {
    iframe.innerHTML = area.value;

});
                                                // Affiche les balises au clique du bouton
btnBold.addEventListener('click', () => {
    area.value += '<b></b>';
});
btnItalic.addEventListener('click', () => {
    area.value += '<i></i>';
});
                                                // Compteur
area.addEventListener('input', event => {
    let valueLength = iframe.textContent.length;
    let leftCharLength = maxLength - valueLength;
    let backcount = area.value.length;

    if(leftCharLength < 0) return;
    compteur.innerText = leftCharLength;

    if(leftCharLength==0){
        area.setAttribute('maxlength', backcount)
    }
    else {
        area.setAttribute('maxlength',"")
    }

    barre.setAttribute('value', valueLength);
                                                // changement de couleur selon la value

    let pourcent = (valueLength/maxLength) * 100;
    if(pourcent > 80){
        barre.style.setProperty("--c", "red" );
    }
    else if(pourcent > 50){
        barre.style.setProperty("--c", "orange");
    }
    else{
        barre.style.setProperty("--c", "green");
    }
});
                                                // animation GIF
area.onfocus = () => {
    document.getElementById('img').style.setProperty('visibility','visible');
  }
  area.onblur = () => {
    document.getElementById('img').style.setProperty('visibility','hidden');
  }



