// ** addEventListener - capter un évènement "click" - coord x - coord y
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Tjrs dans la Fonction dans addEventListener, dans une variable monImg, créer une img html
// TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
// TODO 6: sur monImg, modifier dans style, la position en "absolute"
// TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
// TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
// TODO 9: placer monImg dans la page


document.addEventListener("click", function(unEvent) {
    console.log(unEvent);
    let x = unEvent.clientX;
    let y = unEvent.clientY;
    let monImg = document.createElement("img");
    monImg.src = "https://via.placeholder.com/150";
    monImg.style.position = "absolute";
    monImg.style.left = x + "px";
    monImg.style.top = y + "px";
    document.body.appendChild(monImg);
});