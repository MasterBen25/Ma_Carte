//Recuperer information formulaire

const civi = document.querySelector('input[name="genre"]:checked');
const nom = document.querySelector('input[name="nom"]');
const prenom = document.querySelector('input[name="prenom"]');
const mail = document.querySelector('input[name="email"]');
const phone = document.querySelector('input[name="phone"]');
const adress = document.querySelector('textarea[name="adresse"]');
const send = document.querySelector('input[name="send"]');

//Valeur changement Couleur

const grey1 = document.querySelector("#grey1");
const grey2 = document.querySelector("#grey2");
const grey3 = document.querySelector("#grey3");
const grey4 = document.querySelector("#grey4");
const grey5 = document.querySelector("#grey5");
const grey6 = document.querySelector("#grey6");
const grey7 = document.querySelector("#grey7");
const grey8 = document.querySelector("#grey8");
const grey9 = document.querySelector("#grey9");
const grey10 = document.querySelector("#grey10");
const grey11 = document.querySelector("#grey11");
const grey12 = document.querySelector("#grey12");
const grey13 = document.querySelector("#grey13");
const grey14 = document.querySelector("#grey14");
const grey15 = document.querySelector("#grey15");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");
const color9 = document.querySelector("#color9");
const color10 = document.querySelector("#color10");
const color11 = document.querySelector("#color11");
const color12 = document.querySelector("#color12");
const color13 = document.querySelector("#color13");
const color14 = document.querySelector("#color14");
const color15 = document.querySelector("#color15");
const lisere = document.querySelector("#lisere");
const bgCarte = document.querySelector("#maCarte");

//Fonction implementer information sur carte

send.addEventListener("click", function() {
  document.querySelector("#civi").innerHTML = `
    <p>${civi.value}</p>
  `;
  document.querySelector("#nom").innerHTML = `
    <p>${nom.value}</p>
  `;
  document.querySelector("#prenom").innerHTML = `
    <p>${prenom.value}</p>
  `;
  document.querySelector("#emailArea").innerHTML = `
    <p>${mail.value}</p>
  `;
  document.querySelector("#phoneArea").innerHTML = `
    <p>${phone.value}</p>
  `;
  document.querySelector("#adressArea").innerHTML = `
    <p>${adress.value}</p>
  `;
})

//Fonction changer couleur arriere plan carte

grey1.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#fff";
})
grey2.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#777";
})
grey3.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#555";
})
grey4.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#333";
})
grey5.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#000";
})
color1.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#4D4C7D";
})
color2.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#B8F1B0";
})
color3.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#FFE69A";
})
color4.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#B22727";
})
color5.addEventListener("click", function() {
  bgCarte.style.backgroundColor = "#C69B7B";
})

//Fonction changer couleur lisere carte

grey6.addEventListener("click", function() {
  lisere.style.border = "5px solid #fff";
})
grey7.addEventListener("click", function() {
  lisere.style.border = "5px solid #777";
})
grey8.addEventListener("click", function() {
  lisere.style.border = "5px solid #555";
})
grey9.addEventListener("click", function() {
  lisere.style.border = "5px solid #333";
})
grey10.addEventListener("click", function() {
  lisere.style.border = "5px solid #000";
})
color6.addEventListener("click", function() {
  lisere.style.border = "5px solid #4D4C7D";
})
color7.addEventListener("click", function() {
  lisere.style.border = "5px solid #B8F1B0";
})
color8.addEventListener("click", function() {
  lisere.style.border = "5px solid #FFE69A";
})
color9.addEventListener("click", function() {
  lisere.style.border = "5px solid #B22727";
})
color10.addEventListener("click", function() {
  lisere.style.border = "5px solid #C69B7B";
})

//Fonction changer couleur police ecriture carte

grey11.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#fff";
  document.querySelector("#nom").style.color = "#fff";
  document.querySelector("#prenom").style.color = "#fff";
  document.querySelector("#emailArea").style.color = "#fff";
  document.querySelector("#phoneArea").style.color = "#fff";
  document.querySelector("#adressArea").style.color = "#fff";
})
grey12.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#777";
  document.querySelector("#nom").style.color = "#777";
  document.querySelector("#prenom").style.color = "#777";
  document.querySelector("#emailArea").style.color = "#777";
  document.querySelector("#phoneArea").style.color = "#777";
  document.querySelector("#adressArea").style.color = "#777";
})
grey13.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#555";
  document.querySelector("#nom").style.color = "#555";
  document.querySelector("#prenom").style.color = "#555";
  document.querySelector("#emailArea").style.color = "#555";
  document.querySelector("#phoneArea").style.color = "#555";
  document.querySelector("#adressArea").style.color = "#555";
})
grey14.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#333";
  document.querySelector("#nom").style.color = "#333";
  document.querySelector("#prenom").style.color = "#333";
  document.querySelector("#emailArea").style.color = "#333";
  document.querySelector("#phoneArea").style.color = "#333";
  document.querySelector("#adressArea").style.color = "#333";
})
grey15.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#000";
  document.querySelector("#nom").style.color = "#000";
  document.querySelector("#prenom").style.color = "#000";
  document.querySelector("#emailArea").style.color = "#000";
  document.querySelector("#phoneArea").style.color = "#000";
  document.querySelector("#adressArea").style.color = "#000";
})
color11.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#4D4C7D";
  document.querySelector("#nom").style.color = "#4D4C7D";
  document.querySelector("#prenom").style.color = "#4D4C7D";
  document.querySelector("#emailArea").style.color = "#4D4C7D";
  document.querySelector("#phoneArea").style.color = "#4D4C7D";
  document.querySelector("#adressArea").style.color = "#4D4C7D";
})
color12.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#B8F1B0";
  document.querySelector("#nom").style.color = "#B8F1B0";
  document.querySelector("#prenom").style.color = "#B8F1B0";
  document.querySelector("#emailArea").style.color = "#B8F1B0";
  document.querySelector("#phoneArea").style.color = "#B8F1B0";
  document.querySelector("#adressArea").style.color = "#B8F1B0";
})
color13.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#FFE69A";
  document.querySelector("#nom").style.color = "#FFE69A";
  document.querySelector("#prenom").style.color = "#FFE69A";
  document.querySelector("#emailArea").style.color = "#FFE69A";
  document.querySelector("#phoneArea").style.color = "#FFE69A";
  document.querySelector("#adressArea").style.color = "#FFE69A";
})
color14.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#B22727";
  document.querySelector("#nom").style.color = "#B22727";
  document.querySelector("#prenom").style.color = "#B22727";
  document.querySelector("#emailArea").style.color = "#B22727";
  document.querySelector("#phoneArea").style.color = "#B22727";
  document.querySelector("#adressArea").style.color = "#B22727";
})
color15.addEventListener("click", function() {
  document.querySelector("#civi").style.color = "#C69B7B";
  document.querySelector("#nom").style.color = "#C69B7B";
  document.querySelector("#prenom").style.color = "#C69B7B";
  document.querySelector("#emailArea").style.color = "#C69B7B";
  document.querySelector("#phoneArea").style.color = "#C69B7B";
  document.querySelector("#adressArea").style.color = "#C69B7B";
})
