const btnChange = document.querySelector(".gallery-main img");
const thumbnails = document.querySelectorAll(".gallery-thumbnail img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", (event) => {
    mainImg.src = event.target.src;
    mainImg.animate({ opacity: [0, 1] }, 500);
  });
});
