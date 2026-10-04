/* ================================
   NISHO'S BIRTHDAY WEBSITE
   From: Mishi
================================ */

/* PASSWORD */

const correctPassword = "831";
const passwordHint = "Count: I Like You";

const passwordHintElement = document.getElementById("passwordHint");

if (passwordHintElement) {
    passwordHintElement.textContent = "💗 Hint: " + passwordHint;
}


/* ================================
   ELEMENTS
================================ */

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


/* ================================
   SCREEN CHANGE
================================ */

function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(id);

    if (targetScreen) {
        targetScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================
   FLOATING HEARTS
================================ */

function burstHearts(amount = 25) {

    const layer = document.getElementById("heartLayer");

    if (!layer) return;

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("span");

        heart.className = "float-heart";

        heart.textContent = [
            "♡",
            "♥",
            "💗",
            "💖",
            "💕"
        ][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom =
            Math.random() * 25 + "vh";

        heart.style.animationDelay =
            Math.random() * 0.8 + "s";

        heart.style.fontSize =
            12 + Math.random() * 22 + "px";

        layer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}


/* ================================
   CONFETTI
================================ */

function confettiBurst(amount = 45) {

    const layer =
        document.getElementById("confettiLayer");

    if (!layer) return;

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti";

        piece.style.left = "50vw";
        piece.style.top = "42vh";

        piece.style.setProperty(
            "--x",
            (Math.random() - 0.5) * 90 + "vw"
        );

        piece.style.setProperty(
            "--y",
            (Math.random() - 0.2) * 85 + "vh"
        );

        piece.style.animationDelay =
            Math.random() * 0.25 + "s";

        layer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 2300);
    }
}


/* ================================
   PASSWORD UNLOCK
================================ */

function unlock() {

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        passwordError.textContent = "";

        passwordInput.classList.remove("shake");

        showScreen("birthdayScreen");

        burstHearts(25);

        confettiBurst(25);

    } else {

        passwordError.textContent =
            "Oops! That password is not correct. 💗";

        passwordInput.classList.add("shake");

        setTimeout(() => {

            passwordInput.classList.remove("shake");

        }, 500);
    }
}


if (unlockBtn) {

    unlockBtn.addEventListener(
        "click",
        unlock
    );
}


if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                unlock();
            }

        }
    );
}


/* ================================
   BIRTHDAY SCREEN
================================ */

if (birthdayContinue) {

    birthdayContinue.addEventListener(
        "click",
        () => {

            showScreen(
                "giftQuestionScreen"
            );

            burstHearts(15);
        }
    );
}


/* ================================
   YES BUTTON
================================ */

if (yesBtn) {

    yesBtn.addEventListener(
        "click",
        startCountdown
    );
}


/* ================================
   COUNTDOWN
================================ */

function startCountdown() {

    showScreen("countdownScreen");

    let count = 3;

    countdownNumber.textContent = count;

    burstHearts(15);

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdownNumber.textContent =
                count;

            countdownNumber.style.animation =
                "none";

            void countdownNumber.offsetWidth;

            countdownNumber.style.animation =
                "countdownPop .8s ease both";

        } else {

            clearInterval(timer);

            countdownNumber.textContent =
                "💗";

            setTimeout(() => {

                showScreen("chooseScreen");

                confettiBurst(55);

                burstHearts(35);

            }, 750);
        }

    }, 900);
}


/* ================================
   NO BUTTON
================================ */

if (noBtn) {

    noBtn.addEventListener(
        "click",
        () => {

            noReaction.classList.remove(
                "hidden"
            );

            noBtn.classList.add(
                "hidden"
            );

            burstHearts(8);
        }
    );
}


/* ================================
   TRY AGAIN
================================ */

if (tryAgainBtn) {

    tryAgainBtn.addEventListener(
        "click",
        () => {

            noReaction.classList.add(
                "hidden"
            );

            noBtn.classList.remove(
                "hidden"
            );
        }
    );
}


/* ================================
   GIFT CHOICES
================================ */

document
    .querySelectorAll(".gift-choice")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                mainWebsite.classList.remove(
                    "hidden"
                );

                screens.forEach(screen => {
                    screen.classList.remove(
                        "active"
                    );
                });

                const target =
                    document.getElementById(
                        button.dataset.target
                    );

                if (target) {

                    setTimeout(() => {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 80);
                }

                burstHearts(25);
            }
        );
    });


/* ================================
   SCROLL TO SECTION
================================ */

function scrollToSection(id) {

    mainWebsite.classList.remove(
        "hidden"
    );

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    burstHearts(10);
}

window.scrollToSection =
    scrollToSection;


/* ================================
   MUSIC
================================ */

function updateMusicButtons(
    isPlaying
) {

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


async function toggleMusic() {

    if (!birthdaySong) return;

    if (birthdaySong.paused) {

        try {

            birthdaySong.volume = 1;

            await birthdaySong.play();

            updateMusicButtons(true);

        } catch (error) {

            console.error(
                "Music could not play:",
                error
            );

            updateMusicButtons(false);

            alert(
                "The music could not be played. Please make sure birthday-song.mp3 is inside the music folder. 🎵"
            );
        }

    } else {

        birthdaySong.pause();

        updateMusicButtons(false);
    }
}


if (musicButton) {

    musicButton.addEventListener(
        "click",
        toggleMusic
    );
}


if (heroMusicButton) {

    heroMusicButton.addEventListener(
        "click",
        toggleMusic
    );
}


if (birthdaySong) {

    birthdaySong.addEventListener(
        "play",
        () => updateMusicButtons(true)
    );

    birthdaySong.addEventListener(
        "pause",
        () => updateMusicButtons(false)
    );
}


/* ================================
   SURPRISE BOX
================================ */

if (openBox) {

    openBox.addEventListener(
        "click",
        () => {

            if (
                surpriseBox.classList.contains(
                    "open"
                )
            ) {
                return;
            }

            surpriseBox.classList.add(
                "open"
            );


            document
                .querySelectorAll(
                    ".box-video video"
                )
                .forEach(video => {

                    video.play().catch(
                        () => {}
                    );

                });


            if (surpriseMessage) {

                surpriseMessage.textContent =
                    "Surprise! 💗 I hope these little memories make you smile.";
            }


            openBox.textContent =
                "You found it! 💕";


            confettiBurst(65);

            burstHearts(60);
        }
    );
}


/* ================================
   CLICK ANYWHERE HEART
================================ */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "button, input, video, .gallery-item, .photo-viewer"
            )
        ) {
            return;
        }

        const heart =
            document.createElement("span");

        heart.className =
            "float-heart";

        heart.textContent = [
            "♡",
            "♥",
            "💗",
            "✨"
        ][Math.floor(
            Math.random() * 4
        )];

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.position =
            "fixed";

        heart.style.fontSize =
            "20px";

        const layer =
            document.getElementById(
                "heartLayer"
            );

        if (layer) {

            layer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2300);
        }
    }
);


/* ================================
   GALLERY VIEWER
================================ */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );

const photoViewer =
    document.getElementById(
        "photoViewer"
    );

const viewerImage =
    document.getElementById(
        "viewerImage"
    );

const viewerCaption =
    document.getElementById(
        "viewerCaption"
    );

const viewerClose =
    document.getElementById(
        "viewerClose"
    );

const viewerPrev =
    document.getElementById(
        "viewerPrev"
    );

const viewerNext =
    document.getElementById(
        "viewerNext"
    );


let currentPhoto = 0;

const galleryPhotos = [];


galleryItems.forEach(
    (item, index) => {

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


        item.addEventListener(
            "click",
            () => {

                currentPhoto = index;

                showPhoto(
                    currentPhoto
                );

                if (photoViewer) {

                    photoViewer.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);


/* ================================
   SHOW PHOTO
================================ */

function showPhoto(index) {

    if (
        !galleryPhotos.length ||
        !viewerImage
    ) {
        return;
    }

    viewerImage.src =
        galleryPhotos[index].src;

    if (viewerCaption) {

        viewerCaption.textContent =
            galleryPhotos[index].caption;
    }
}


/* ================================
   CLOSE GALLERY
================================ */

if (viewerClose) {

    viewerClose.addEventListener(
        "click",
        () => {

            photoViewer.classList.remove(
                "active"
            );
        }
    );
}


/* ================================
   NEXT PHOTO
================================ */

if (viewerNext) {

    viewerNext.addEventListener(
        "click",
        () => {

            if (!galleryPhotos.length)
                return;

            currentPhoto =
                (
                    currentPhoto + 1
                ) %
                galleryPhotos.length;

            showPhoto(
                currentPhoto
            );
        }
    );
}


/* ================================
   PREVIOUS PHOTO
================================ */

if (viewerPrev) {

    viewerPrev.addEventListener(
        "click",
        () => {

            if (!galleryPhotos.length)
                return;

            currentPhoto =
                (
                    currentPhoto - 1 +
                    galleryPhotos.length
                ) %
                galleryPhotos.length;

            showPhoto(
                currentPhoto
            );
        }
    );
}


/* ================================
   CLOSE VIEWER BY CLICKING OUTSIDE
================================ */

if (photoViewer) {

    photoViewer.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                photoViewer
            ) {

                photoViewer.classList.remove(
                    "active"
                );
            }
        }
    );
}


/* ================================
   GALLERY KEYBOARD CONTROLS
================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            !photoViewer ||
            !photoViewer.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            photoViewer.classList.remove(
                "active"
            );
        }


        if (event.key === "ArrowRight") {

            if (viewerNext)
                viewerNext.click();
        }


        if (event.key === "ArrowLeft") {

            if (viewerPrev)
                viewerPrev.click();
        }
    }
);


/* ================================
   GENTLE FLOATING HEARTS
================================ */

setInterval(() => {

    if (
        document.visibilityState ===
        "visible"
    ) {

        burstHearts(1);
    }

}, 900);