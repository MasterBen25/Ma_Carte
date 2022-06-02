const civi = document.querySelector('input[name="genre"]:checked');
const nom = document.querySelector('input[name="nom"]');
const prenom = document.querySelector('input[name="prenom"]');
const mail = document.querySelector('input[name="email"]');
const phone = document.querySelector('input[name="phone"]');
const adress = document.querySelector('textarea[name="adresse"]');
const send = document.querySelector('input[name="send"]');


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

const grey1 = document.querySelector("#grey1");
const grey2 = document.querySelector("#grey2");
const grey3 = document.querySelector("#grey3");
const grey4 = document.querySelector("#grey4");
const grey5 = document.querySelector("#grey5");

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");

const lisere = document.querySelector("#lisere");
const textColor = document.querySelector(".colorTextCard");

grey1.addEventListener("click", function() {
  textColor.classList.add("red");
})
