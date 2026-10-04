```javascript
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PASSWORD
  ========================= */

  const CORRECT_PASSWORD = "831";

  const screens = document.querySelectorAll(".screen");

  const passwordInput = document.getElementById("passwordInput");
  const unlockBtn = document.getElementById("unlockBtn");
  const passwordError = document.getElementById("passwordError");

  const birthdayContinue = document.getElementById("birthdayContinue");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const tryAgainBtn = document.getElementById("tryAgainBtn");
  const noReaction = document.getElementById("noReaction");

  const mainWebsite = document.getElementById("mainWebsite");

  const countdownNumber = document.getElementById("countdownNumber");

  const birthdaySong = document.getElementById("birthdaySong");
  const musicButton = document.getElementById("musicButton");
  const heroMusicButton = document.getElementById("heroMusicButton");

  const surpriseBox = document.getElementById("surpriseBox");
  const openBox = document.getElementById("openBox");
  const surpriseMessage = document.getElementById("surpriseMessage");

  const heartLayer = document.getElementById("heartLayer");
  const confettiLayer = document.getElementById("confettiLayer");


  /* =========================
     SCREEN NAVIGATION
  ========================= */

  function showScreen(id) {

    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(id);

    if (!targetScreen) {
      console.error("Screen not found:", id);
      return;
    }

    targetScreen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* =========================
     HEART ANIMATION
  ========================= */

  function burstHearts(amount = 20) {

    if (!heartLayer) return;

    for (let i = 0; i < amount; i++) {

      const heart = document.createElement("span");

      heart.className = "float-heart";

      const hearts = ["♡", "♥", "💗", "💖", "💕"];

      heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.bottom =
        Math.random() * 25 + "vh";

      heart.style.animationDelay =
        Math.random() * 0.8 + "s";

      heart.style.fontSize =
        12 + Math.random() * 22 + "px";

      heartLayer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }


  /* =========================
     CONFETTI
  ========================= */

  function confettiBurst(amount = 40) {

    if (!confettiLayer) return;

    for (let i = 0; i < amount; i++) {

      const piece = document.createElement("span");

      piece.className = "confetti";

      piece.style.left = "50vw";
      piece.style.top = "42vh";

      piece.style.setProperty(
        "--x",
        ((Math.random() - 0.5) * 90) + "vw"
      );

      piece.style.setProperty(
        "--y",
        ((Math.random() - 0.2) * 85) + "vh"
      );

      piece.style.animationDelay =
        Math.random() * 0.25 + "s";

      confettiLayer.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 2300);
    }
  }


  /* =========================
     PASSWORD
  ========================= */

  function unlock() {

    if (!passwordInput) return;

    const enteredPassword =
      passwordInput.value.trim();

    if (enteredPassword === CORRECT_PASSWORD) {

      if (passwordError) {
        passwordError.textContent = "";
      }

      showScreen("birthdayScreen");

      burstHearts(25);
      confettiBurst(25);

    } else {

      if (passwordError) {

        passwordError.textContent =
          "Oops! That password is not correct. 💗";

      }

      passwordInput.classList.remove("shake");

      void passwordInput.offsetWidth;

      passwordInput.classList.add("shake");

      setTimeout(() => {
        passwordInput.classList.remove("shake");
      }, 500);
    }
  }


  if (unlockBtn) {
    unlockBtn.addEventListener("click", unlock);
  }

  if (passwordInput) {

    passwordInput.addEventListener("keydown", event => {

      if (event.key === "Enter") {
        unlock();
      }

    });

  }


  /* =========================
     BIRTHDAY CONTINUE
  ========================= */

  if (birthdayContinue) {

    birthdayContinue.addEventListener("click", () => {

      showScreen("giftQuestionScreen");

      burstHearts(15);

    });

  }


  /* =========================
     YES BUTTON / COUNTDOWN
  ========================= */

  function startCountdown() {

    if (!countdownNumber) return;

    showScreen("countdownScreen");

    let count = 3;

    countdownNumber.textContent = count;

    countdownNumber.style.animation =
      "countdownPop .8s ease both";

    burstHearts(15);

    const timer = setInterval(() => {

      count--;

      if (count > 0) {

        countdownNumber.textContent = count;

        countdownNumber.style.animation = "none";

        void countdownNumber.offsetWidth;

        countdownNumber.style.animation =
          "countdownPop .8s ease both";

      } else {

        clearInterval(timer);

        countdownNumber.textContent = "💗";

        setTimeout(() => {

          showScreen("chooseScreen");

          confettiBurst(55);
          burstHearts(35);

        }, 750);
      }

    }, 900);
  }


  if (yesBtn) {
    yesBtn.addEventListener("click", startCountdown);
  }


  /* =========================
     NO BUTTON
  ========================= */

  if (noBtn && noReaction) {

    noBtn.addEventListener("click", () => {

      noReaction.classList.remove("hidden");
      noBtn.classList.add("hidden");

      burstHearts(8);

    });

  }


  if (tryAgainBtn && noReaction && noBtn) {

    tryAgainBtn.addEventListener("click", () => {

      noReaction.classList.add("hidden");
      noBtn.classList.remove("hidden");

    });

  }


  /* =========================
     GIFT CHOICES
  ========================= */

  document.querySelectorAll(".gift-choice").forEach(button => {

    button.addEventListener("click", () => {

      if (!mainWebsite) return;

      mainWebsite.classList.remove("hidden");

      screens.forEach(screen => {
        screen.classList.remove("active");
      });

      const targetId =
        button.getAttribute("data-target");

      const target =
        document.getElementById(targetId);

      if (target) {

        setTimeout(() => {

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 100);

      }

      burstHearts(25);

    });

  });


  /* =========================
     SCROLL TO SECTION
  ========================= */

  function scrollToSection(id) {

    if (!mainWebsite) return;

    mainWebsite.classList.remove("hidden");

    const target =
      document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    burstHearts(10);
  }

  window.scrollToSection = scrollToSection;


  /* =========================
     MUSIC
  ========================= */

  async function toggleMusic() {

    if (!birthdaySong) return;

    if (birthdaySong.paused) {

      try {

        await birthdaySong.play();

        updateMusicButtons(true);

      } catch (error) {

        console.error("Music could not start:", error);

        updateMusicButtons(false);

        alert(
          "Tap the music button once more to start the music. 🎵"
        );

      }

    } else {

      birthdaySong.pause();

      updateMusicButtons(false);

    }
  }


  function updateMusicButtons(isPlaying) {

    if (musicButton) {

      musicButton.textContent =
        isPlaying
          ? "⏸ Pause Birthday Music"
          : "🎵 Play Birthday Music";

    }

    if (heroMusicButton) {

      heroMusicButton.textContent =
        isPlaying
          ? "🎵 Music: ON"
          : "🎵 Music: OFF";

    }
  }


  if (musicButton) {
    musicButton.addEventListener("click", toggleMusic);
  }

  if (heroMusicButton) {
    heroMusicButton.addEventListener("click", toggleMusic);
  }


  /* =========================
     SURPRISE BOX
  ========================= */

  if (openBox && surpriseBox) {

    openBox.addEventListener("click", () => {

      if (surpriseBox.classList.contains("open")) {
        return;
      }

      surpriseBox.classList.add("open");

      document
        .querySelectorAll(".box-video video")
        .forEach(video => {

          video.play().catch(() => {});

        });

      if (surpriseMessage) {

        surpriseMessage.textContent =
          "Surprise! 💗 I hope these little memories make you smile.";

      }

      openBox.textContent =
        "You found it! 💕";

      confettiBurst(65);
      burstHearts(60);

    });

  }


  /* =========================
     VIDEO FULLSCREEN
  ========================= */

  function openVideoFullscreen(videoId) {

    const video =
      document.getElementById(videoId);

    if (!video) {
      console.error("Video not found:", videoId);
      return;
    }


    /* Safari / iPhone */

    if (
      typeof video.webkitEnterFullscreen ===
      "function"
    ) {

      video.webkitEnterFullscreen();

      return;
    }


    /* Chrome / Edge / Firefox */

    if (
      typeof video.requestFullscreen ===
      "function"
    ) {

      video.requestFullscreen().catch(error => {

        console.error(
          "Fullscreen error:",
          error
        );

      });

      return;
    }


    /* Older WebKit */

    if (
      typeof video.webkitRequestFullscreen ===
      "function"
    ) {

      video.webkitRequestFullscreen();

      return;
    }

    alert(
      "Fullscreen is not supported by this browser."
    );
  }


  window.openVideoFullscreen =
    openVideoFullscreen;


  /* =========================
     CLICK ANYWHERE = HEART
  ========================= */

  document.addEventListener("click", event => {

    if (
      event.target.closest(
        "button, input, video, .gallery-item, .photo-viewer"
      )
    ) {
      return;
    }

    if (!heartLayer) return;

    const heart =
      document.createElement("span");

    heart.className = "float-heart";

    const hearts =
      ["♡", "♥", "💗", "✨"];

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
      event.clientX + "px";

    heart.style.top =
      event.clientY + "px";

    heart.style.position = "fixed";
    heart.style.fontSize = "20px";

    heartLayer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2300);

  });


  /* =========================
     GALLERY VIEWER
  ========================= */

  const galleryItems =
    document.querySelectorAll(".gallery-item");

  const photoViewer =
    document.getElementById("photoViewer");

  const viewerImage =
    document.getElementById("viewerImage");

  const viewerCaption =
    document.getElementById("viewerCaption");

  const viewerClose =
    document.getElementById("viewerClose");

  const viewerPrev =
    document.getElementById("viewerPrev");

  const viewerNext =
    document.getElementById("viewerNext");

  let currentPhoto = 0;

  const galleryPhotos = [];


  galleryItems.forEach((item, index) => {

    const image =
      item.querySelector("img");

    const caption =
      item.querySelector(
        ".gallery-caption p"
      );

    if (!image) return;

    galleryPhotos.push({

      src: image.src,

      caption:
        caption
          ? caption.textContent
          : ""

    });


    item.addEventListener("click", () => {

      currentPhoto = index;

      showPhoto(currentPhoto);

      if (photoViewer) {
        photoViewer.classList.add("active");
      }

    });

  });


  function showPhoto(index) {

    if (
      !galleryPhotos.length ||
      !viewerImage ||
      !viewerCaption
    ) {
      return;
    }

    viewerImage.src =
      galleryPhotos[index].src;

    viewerCaption.textContent =
      galleryPhotos[index].caption;

  }


  if (viewerClose && photoViewer) {

    viewerClose.addEventListener("click", () => {

      photoViewer.classList.remove("active");

    });

  }


  if (viewerNext) {

    viewerNext.addEventListener("click", () => {

      if (!galleryPhotos.length) return;

      currentPhoto =
        (currentPhoto + 1) %
        galleryPhotos.length;

      showPhoto(currentPhoto);

    });

  }


  if (viewerPrev) {

    viewerPrev.addEventListener("click", () => {

      if (!galleryPhotos.length) return;

      currentPhoto =
        (currentPhoto - 1 +
          galleryPhotos.length) %
        galleryPhotos.length;

      showPhoto(currentPhoto);

    });

  }


  if (photoViewer) {

    photoViewer.addEventListener("click", event => {

      if (event.target === photoViewer) {

        photoViewer.classList.remove("active");

      }

    });

  }


  /* =========================
     KEYBOARD GALLERY CONTROLS
  ========================= */

  document.addEventListener("keydown", event => {

    if (
      !photoViewer ||
      !photoViewer.classList.contains("active")
    ) {
      return;
    }

    if (event.key === "Escape") {

      photoViewer.classList.remove("active");

    }

    if (event.key === "ArrowRight") {

      if (viewerNext) {
        viewerNext.click();
      }

    }

    if (event.key === "ArrowLeft") {

      if (viewerPrev) {
        viewerPrev.click();
      }

    }

  });


  /* =========================
     GENTLE FLOATING HEARTS
  ========================= */

  setInterval(() => {

    if (
      document.visibilityState === "visible"
    ) {

      burstHearts(1);

    }

  }, 900);


  /* =========================
     DEBUG MESSAGE
  ========================= */

  console.log(
    "💗 Nisho Birthday Website loaded successfully!"
  );

});
```
