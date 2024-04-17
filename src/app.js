/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Generador de excusas");
};

let generateExcuse = () => {
  let pronoun = ["Un ", "El "];
  let subjet = [" pajaro", " vecino", " profesor", " vagabundo", " gato"];
  let action = ["me robó", "se comió", "me quemó", "me aprobó", "me tiró"];
  let possetion = [
    "mis deberes",
    "mi bici",
    "mi coche",
    "mi zapato",
    "mi pañal"
  ];
  let where = [
    "en la calle",
    "en la escuela",
    "en el espacio",
    "en la playa",
    "en el coche"
  ];
  2;

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjetIndex = Math.floor(Math.random() * subjet.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return [
    pronoun[pronounIndex],
    subjet[subjetIndex],
    action[actionIndex],
    possetion[possetionIndex],
    where[whereIndex]
  ].join(" ");
};
