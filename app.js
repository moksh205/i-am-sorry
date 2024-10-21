document.addEventListener("DOMContentLoaded", () => {
  class Birthday {
      static openBox() {
          let sec = 1;
          const gift = document.getElementById("gift");
          const present = document.getElementById("present");

          const shake = setInterval(function () {
              gift.classList.remove("apply-shake");
              gift.offsetWidth; // Trigger a reflow
              gift.classList.add("apply-shake");
              sec++;

              if (sec === 1) {
                  Birthday.stopShaking(shake);
                  Birthday.fade(present);
                  Birthday.startMain();
                  Birthday.showConfetti();
              }
          }, 1000);
      }

      static fade(element) {
          let op = 1;
          const timer = setInterval(function () {
              if (op <= 0.1) {
                  clearInterval(timer);
                  element.style.display = "none";
              }
              element.style.opacity = op;
              element.style.filter = "alpha(opacity=" + op * 100 + ")";
              op -= op * 0.1;
          }, 50);
      }

      static startMain() {
          let main = document.getElementById("main");
          main.style.display = "block";
          main.classList.add("center");
      }

      static stopShaking(shake) {
          clearInterval(shake);
      }

      static showConfetti() {
          confetti({
              particleCount: 5,
              angle: 180,
              spread: 360,
              origin: { x: 0.8, y: 0 },
          });

          confetti({
              particleCount: 5,
              angle: 360,
              spread: 360,
              origin: { x: 0.2, y: 0 },
          });

          requestAnimationFrame(Birthday.showConfetti);
      }
  }

  const present = document.getElementById("present");
  let click = false;

  present.addEventListener("click", () => {
      if (click) {
          console.log("already clicked");
          return;
      } else {
          console.log("first click");
          Birthday.openBox();
          click = true;
      }
  });
});
