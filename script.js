// ================================
// NISHO BIRTHDAY WEBSITE
// ================================

const CORRECT_PASSWORD = "831";

// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // GET ELEMENTS
    // ================================

    const passwordInput = document.getElementById("passwordInput");
    const unlockBtn = document.getElementById("unlockBtn");
    const passwordError = document.getElementById("passwordError");

    const passwordScreen = document.getElementById("passwordScreen");
    const birthdayScreen = document.getElementById("birthdayScreen");
    const giftQuestionScreen = document.getElementById("giftQuestionScreen");
    const countdownScreen = document.getElementById("countdownScreen");
    const chooseScreen = document.getElementById("chooseScreen");

    const birthdayContinue = document.getElementById("birthdayContinue");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    const noReaction = document.getElementById("noReaction");

    const countdownNumber = document.getElementById("countdownNumber");

    const musicButton = document.getElementById("musicButton");
    const heroMusicButton = document.getElementById("heroMusicButton");
    const birthdaySong = document.getElementById("birthdaySong");

    const openBox = document.getElementById("openBox");
    const boxLid = document.getElementById("boxLid");
    const surpriseMessage = document.getElementById("surpriseMessage");

    const photoViewer = document.getElementById("photoViewer");
    const viewerImage = document.getElementById("viewerImage");
    const viewerCaption = document.getElementById("viewerCaption");
    const viewerClose = document.getElementById("viewerClose");
    const viewerPrev = document.getElementById("viewerPrev");
    const viewerNext = document.getElementById("viewerNext");

    // ================================
    // SCREEN FUNCTION
    // ================================

    function showScreen(screen) {

        const screens = document.querySelectorAll(".screen");

        screens.forEach(function (item) {
            item.classList.remove("active");
        });

        if (screen) {
            screen.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // ================================
    // HEART ANIMATION
    // ================================

    function createHeart() {

        const heartLayer = document.getElementById("heartLayer");

        if (!heartLayer) {
            return;
        }

        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        heartLayer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);
    }

    function heartBurst(amount) {

        for (let i = 0; i < amount; i++) {

            setTimeout(function () {
                createHeart();
            }, i * 100);

        }
    }

    // ================================
    // CONFETTI
    // ================================

    function confettiBurst() {

        const layer = document.getElementById("confettiLayer");

        if (!layer) {
            return;
        }

        for (let i = 0; i < 40; i++) {

            const piece = document.createElement("span");

            piece.className = "confetti-piece";

            piece.style.left = Math.random() * 100 + "%";
            piece.style.animationDelay = Math.random() * 0.5 + "s";

            layer.appendChild(piece);

            setTimeout(function () {
                piece.remove();
            }, 4000);
        }
    }

    // ================================
    // 🔐 UNLOCK
    // ================================

    function unlockWebsite() {

        const enteredPassword = passwordInput.value.trim();

        console.log("Unlock button clicked");
        console.log("Entered password:", enteredPassword);

        if (enteredPassword === CORRECT_PASSWORD) {

            console.log("Correct password!");

            passwordError.textContent = "";

            confettiBurst();
            heartBurst(12);

            showScreen(birthdayScreen);

        } else {

            console.log("Wrong password!");

            passwordError.textContent = "Wrong password 💗 Try again!";

            passwordInput.value = "";
            passwordInput.focus();

        }
    }

    // Unlock button
    if (unlockBtn) {

        unlockBtn.addEventListener("click", function (event) {

            event.preventDefault();

            unlockWebsite();

        });

    }

    // Press Enter inside password box
    if (passwordInput) {

        passwordInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                unlockWebsite();

            }

        });

    }

    // ================================
    // BIRTHDAY CONTINUE
    // ================================

    if (birthdayContinue) {

        birthdayContinue.addEventListener("click", function () {

            showScreen(giftQuestionScreen);

            heartBurst(8);

        });

    }

    // ================================
    // YES BUTTON
    // ================================

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            showScreen(countdownScreen);

            let number = 3;

            countdownNumber.textContent = number;

            const countdown = setInterval(function () {

                number--;

                if (number > 0) {

                    countdownNumber.textContent = number;

                } else {

                    clearInterval(countdown);

                    showScreen(chooseScreen);

                    confettiBurst();
                    heartBurst(15);

                }

            }, 1000);

        });

    }

    // ================================
    // NO BUTTON
    // ================================

    if (noBtn) {

        noBtn.addEventListener("click", function () {

            noReaction.classList.remove("hidden");

            noBtn.style.display = "none";

        });

    }

    // ================================
    // TRY AGAIN
    // ================================

    if (tryAgainBtn) {

        tryAgainBtn.addEventListener("click", function () {

            noReaction.classList.add("hidden");

            noBtn.style.display = "inline-flex";

        });

    }

    // ================================
    // GIFT OPTIONS
    // ================================

    const giftChoices = document.querySelectorAll(".gift-choice");

    giftChoices.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetID = button.getAttribute("data-target");

            const mainWebsite = document.getElementById("mainWebsite");

            if (mainWebsite) {
                mainWebsite.classList.remove("hidden");
            }

            showScreen(null);

            setTimeout(function () {

                const target = document.getElementById(targetID);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 200);

        });

    });

    // ================================
    // SCROLL TO SECTION
    // ================================

    window.scrollToSection = function (sectionID) {

        const mainWebsite = document.getElementById("mainWebsite");

        if (mainWebsite) {
            mainWebsite.classList.remove("hidden");
        }

        const target = document.getElementById(sectionID);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    };

    // ================================
    // MUSIC
    // ================================

    function toggleMusic() {

        if (!birthdaySong) {
            return;
        }

        if (birthdaySong.paused) {

            birthdaySong.play()
                .then(function () {

                    if (musicButton) {
                        musicButton.textContent = "🎵 Music: ON";
                    }

                    if (heroMusicButton) {
                        heroMusicButton.textContent = "🎵 Music: ON";
                    }

                })
                .catch(function (error) {

                    console.log("Music could not start:", error);

                });

        } else {

            birthdaySong.pause();

            if (musicButton) {
                musicButton.textContent = "🎵 Play Birthday Music";
            }

            if (heroMusicButton) {
                heroMusicButton.textContent = "🎵 Music: OFF";
            }

        }

    }

    if (musicButton) {
        musicButton.addEventListener("click", toggleMusic);
    }

    if (heroMusicButton) {
        heroMusicButton.addEventListener("click", toggleMusic);
    }

    // ================================
    // SURPRISE BOX
    // ================================

    if (openBox) {

        openBox.addEventListener("click", function () {

            if (boxLid) {
                boxLid.classList.toggle("open");
            }

            

            if (surpriseMessage) {

                surpriseMessage.textContent =
                    "Surprise! I hope this makes you smile. 💗";

            }

            openBox.textContent = "Gift Opened 💗";

            confettiBurst();
            heartBurst(15);

        });

    }

    // ================================
    // FULLSCREEN VIDEO
    // ================================

    window.openVideoFullscreen = function (videoID) {

        const video = document.getElementById(videoID);

        if (!video) {
            return;
        }

        if (video.requestFullscreen) {

            video.requestFullscreen();

        } else if (video.webkitRequestFullscreen) {

            video.webkitRequestFullscreen();

        } else if (video.msRequestFullscreen) {

            video.msRequestFullscreen();

        }

    };

    // ================================
    // GALLERY
    // ================================

    const galleryItems = document.querySelectorAll(".gallery-item");

    let currentPhoto = 0;

    const galleryPhotos = [];

    galleryItems.forEach(function (item, index) {

        const image = item.querySelector("img");
        const caption = item.querySelector("p");

        if (image) {

            galleryPhotos.push({
                src: image.src,
                caption: caption ? caption.textContent : ""
            });

            item.addEventListener("click", function () {

                currentPhoto = index;

                openPhoto(currentPhoto);

            });

        }

    });

    function openPhoto(index) {

        if (!photoViewer || !viewerImage) {
            return;
        }

        if (!galleryPhotos[index]) {
            return;
        }

        viewerImage.src = galleryPhotos[index].src;

        if (viewerCaption) {
            viewerCaption.textContent = galleryPhotos[index].caption;
        }

        photoViewer.classList.add("show");

    }

    function closePhoto() {

        if (photoViewer) {
            photoViewer.classList.remove("show");
        }

    }

    if (viewerClose) {
        viewerClose.addEventListener("click", closePhoto);
    }

    if (viewerNext) {

        viewerNext.addEventListener("click", function () {

            if (galleryPhotos.length === 0) {
                return;
            }

            currentPhoto++;

            if (currentPhoto >= galleryPhotos.length) {
                currentPhoto = 0;
            }

            openPhoto(currentPhoto);

        });

    }

    if (viewerPrev) {

        viewerPrev.addEventListener("click", function () {

            if (galleryPhotos.length === 0) {
                return;
            }

            currentPhoto--;

            if (currentPhoto < 0) {
                currentPhoto = galleryPhotos.length - 1;
            }

            openPhoto(currentPhoto);

        });

    }

    // Close viewer by clicking outside image
    if (photoViewer) {

        photoViewer.addEventListener("click", function (event) {

            if (event.target === photoViewer) {
                closePhoto();
            }

        });

    }

    // Escape closes gallery
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closePhoto();
        }

    });
// ================================
// SURPRISE VIDEOS - ONE AT A TIME
// ================================

const surpriseVideos = document.querySelectorAll(".box-video video");

surpriseVideos.forEach(function (video) {

    video.addEventListener("play", function () {

        surpriseVideos.forEach(function (otherVideo) {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});
    // ================================
    // FLOATING HEARTS
    // ================================

    setInterval(function () {

        if (document.visibilityState === "visible") {
            heartBurst(1);
        }

    }, 1200);

    // ================================
    // READY
    // ================================

    console.log("💗 Nisho Birthday Website JavaScript loaded successfully!");

});