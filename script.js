const mainImg = document.querySelector(".gallery-main img");
const thumbnails = document.querySelectorAll(".gallery-thumbnail img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", (event) => {
    mainImg.src = event.target.src;
    mainImg.animate({ opacity: [0, 1] }, 500);
  });
});

// ローディング用
const loadingElement = document.getElementById("loading");

// 進捗状況用数値
let progress = 0;

// 10ミリ秒毎に数値を加算、テキストを更新
const intervalId = setInterval(() => {
  progress++;
  loadingElement.textContent = progress + "%";

  // 100%到達時、ローディングを終了、フェードアウト
  if (progress >= 100) {
    clearInterval(intervalId);
    loadingElement.classList.add("fade-out");
  }
}, 10);
