console.log("hello!");

// function turnOnLight() {
//     console.log("Lights on!");
//   }
  
//   let button = document.querySelector(".button");
//   button.addEventListener("click", turnOnLight);

  
// let body = document.body;

// function turnOnLight() {
//   body.classList.add("light");
//   button.classList.add("buttonOn");
// }

// let button = document.querySelector(".button");
// button.addEventListener("click", turnOnLight);


let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);