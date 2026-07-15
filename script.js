const messages = [
  "最高の笑顔で、勝利のダンスを踊ろうね！",
  "赤黒のハートを燃やして！全力応援☆",
  "私たちの声援で、ドームを熱くしちゃおう！",
  "輝く笑顔とステップで、勝利を呼び込もう！",
  "一緒に歌って、踊って、最高の時間を！",
];

let current = 0;

document.getElementById("change-btn").addEventListener("click", function () {
  current = (current + 1) % messages.length;
  document.querySelector(".message").textContent = messages[current];
});

const defaultName = "信太　梨里碧";
const hoverName = "瀧口　風子";
const dollsName = document.getElementById("dolls_name");
const profileImageFrame = document.querySelector(".profile-image-frame");

profileImageFrame.addEventListener("mouseenter", function () {
  dollsName.textContent = hoverName;
});

profileImageFrame.addEventListener("mouseleave", function () {
  dollsName.textContent = defaultName;
});
