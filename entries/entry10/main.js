// console.log("hello!");

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


// let body = document.body;

// function turnOnLight() {
//   body.classList.toggle("light");
//   button.classList.toggle("buttonOn");
// }

// let button = document.querySelector(".button");
// button.addEventListener("click", turnOnLight);


let body = document.body;


function Change() {
  document.getElementById("ChangeText").innerHTML = "My dad has a rather simple taste. He prefers and pretty much only has one type of clothing in his closet, which consists of the black and white outfits he wears to work. However, he is a big denim fan for some reason and owns many denim items, including denim jeans, shorts, and jackets in various colors. During weekends, he wears them on different occasions. In particular, he loves to wear one of his denim jackets that has a strong smell attached to it. So now, whenever I wear my denim jacket, I immediately think of my dad.";
  document.getElementById("ChangeTitle").innerHTML = "THE STORY OF MY DAD AND HIS DENIM JACKET";
}


let button = document.querySelector(".button");
button.addEventListener("click", Change);