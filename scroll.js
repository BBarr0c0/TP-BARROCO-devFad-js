// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"

let laBar = document.querySelector('.bar');

document.addEventListener('scroll', function(){
console.log("document.body.scrollHeight: ", document.body.scrollHeight);
console.log("innerHeight: ", window.innerHeight);
console.log("scrollY: ", window.scrollY);
let scrollMax = document.body.scrollHeight - window.innerHeight;
let onEstOu = (window.scrollY / scrollMax) * 100;
laBar.style.width = onEstOu + "%";
});





