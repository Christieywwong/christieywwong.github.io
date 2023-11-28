

let blobs = document.querySelectorAll(".blob");
let container = document.querySelector(".wrapper");
// place our blobs randomly
blobs.forEach(function (blob) {
  blob.style.right = (100 * Math.random()) + '%';
  blob.style.top = (20 + 400 * Math.random()) + '%';
})
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("blob")) {
    event.target.remove();
  }
});

// let blobs = document.querySelectorAll(".blob");
// let container = document.querySelector(".wrapper");

// // Get the dimensions of the container
// let containerWidth = container.offsetWidth;
// let containerHeight = container.offsetHeight+950;

// // Place blobs randomly within the container
// blobs.forEach(function (blob) {
//   let randomX = Math.random() * (containerWidth - blob.offsetWidth);
//   let randomY = Math.random() * (containerHeight - blob.offsetHeight);

//   blob.style.left = randomX + 'px';
//   blob.style.top = randomY + 'px';
// });

// // Remove blobs on click
// container.addEventListener("click", function (event) {
//   if (event.target.classList.contains("blob")) {
//     event.target.remove();
//   }
// });