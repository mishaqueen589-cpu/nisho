const CORRECT_PASSWORD = '831';

const screens = document.querySelectorAll('.screen');
const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const passwordError = document.getElementById('passwordError');
const birthdayContinue = document.getElementById('birthdayContinue');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const noReaction = document.getElementById('noReaction');
const mainWebsite = document.getElementById('mainWebsite');
const countdownNumber = document.getElementById('countdownNumber');
const birthdaySong = document.getElementById('birthdaySong');
const musicButton = document.getElementById('musicButton');
const heroMusicButton = document.getElementById('heroMusicButton');
const surpriseBox = document.getElementById('surpriseBox');
const openBox = document.getElementById('openBox');
const surpriseMessage = document.getElementById('surpriseMessage');

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function burstHearts(amount = 25) {
  const layer = document.getElementById('heartLayer');
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = ['♡','♥','💗','💖','💕'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = (Math.random() * 25) + 'vh';
    heart.style.animationDelay = (Math.random() * .8) + 's';
    heart.style.fontSize = (12 + Math.random() * 22) + 'px';
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function confettiBurst(amount = 45) {
  const layer = document.getElementById('confettiLayer');
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = '50vw';
    piece.style.top = '42vh';
    piece.style.setProperty('--x', ((Math.random() - .5) * 90) + 'vw');
    piece.style.setProperty('--y', ((Math.random() - .2) * 85) + 'vh');
    piece.style.animationDelay = (Math.random() * .25) + 's';
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 2300);
  }
}

unlockBtn.addEventListener('click', unlock);
passwordInput.addEventListener('keydown', e => { if (e.key === 'Enter') unlock(); });

function unlock() {
  if (passwordInput.value.trim() === CORRECT_PASSWORD) {
    passwordError.textContent = '';
    showScreen('birthdayScreen');
    burstHearts(25);
    confettiBurst(25);
  } else {
    passwordError.textContent = 'Oops! That password is not correct. 💗';
    passwordInput.classList.add('shake');
    setTimeout(() => passwordInput.classList.remove('shake'), 500);
  }
}

birthdayContinue.addEventListener('click', () => {
  showScreen('giftQuestionScreen');
  burstHearts(15);
});

yesBtn.addEventListener('click', startCountdown);

function startCountdown() {
  showScreen('countdownScreen');
  let count = 3;
  countdownNumber.textContent = count;
  burstHearts(15);

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countdownNumber.textContent = count;
      countdownNumber.style.animation = 'none';
      void countdownNumber.offsetWidth;
      countdownNumber.style.animation = 'countdownPop .8s ease both';
    } else {
      clearInterval(timer);
      countdownNumber.textContent = '💗';
      setTimeout(() => {
        showScreen('chooseScreen');
        confettiBurst(55);
        burstHearts(35);
      }, 750);
    }
  }, 900);
}

noBtn.addEventListener('click', () => {
  noReaction.classList.remove('hidden');
  noBtn.classList.add('hidden');
  burstHearts(8);
});

tryAgainBtn.addEventListener('click', () => {
  noReaction.classList.add('hidden');
  noBtn.classList.remove('hidden');
});

/* Gift choices */
document.querySelectorAll('.gift-choice').forEach(button => {
  button.addEventListener('click', () => {
    mainWebsite.classList.remove('hidden');
    screens.forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById(button.dataset.target);
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    burstHearts(25);
  });
});

function scrollToSection(id) {
  mainWebsite.classList.remove('hidden');
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  burstHearts(10);
}
window.scrollToSection = scrollToSection;

/* Music */
async function toggleMusic() {
  if (birthdaySong.paused) {
    try {
      await birthdaySong.play();
      updateMusicButtons(true);
    } catch (error) {
      updateMusicButtons(false);
      alert('Tap the music button once more to start the music. 🎵');
    }
  } else {
    birthdaySong.pause();
    updateMusicButtons(false);
  }
}

function updateMusicButtons(isPlaying) {
  musicButton.textContent = isPlaying ? '⏸ Pause Birthday Music' : '🎵 Play Birthday Music';
  heroMusicButton.textContent = isPlaying ? '🎵 Music: ON' : '🎵 Music: OFF';
}

musicButton.addEventListener('click', toggleMusic);
heroMusicButton.addEventListener('click', toggleMusic);

/* Surprise box */
openBox.addEventListener('click', () => {
  if (surpriseBox.classList.contains('open')) return;

  surpriseBox.classList.add('open');
  document.querySelectorAll('.box-video video').forEach(video => {
    video.play().catch(() => {});
  });

  surpriseMessage.textContent = 'Surprise! 💗 I hope these little memories make you smile.';
  openBox.textContent = 'You found it! 💕';
  confettiBurst(65);
  burstHearts(60);
});

/* Click anywhere = tiny heart sticker */
document.addEventListener('click', e => {
  if (e.target.closest('button, input, video, .gallery-item, .photo-viewer')) return;
  const heart = document.createElement('span');
  heart.className = 'float-heart';
  heart.textContent = ['♡','♥','💗','✨'][Math.floor(Math.random() * 4)];
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.position = 'fixed';
  heart.style.fontSize = '20px';
  document.getElementById('heartLayer').appendChild(heart);
  setTimeout(() => heart.remove(), 2300);
});

/* Gallery viewer */
const galleryItems = document.querySelectorAll('.gallery-item');
const photoViewer = document.getElementById('photoViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerCaption = document.getElementById('viewerCaption');
const viewerClose = document.getElementById('viewerClose');
const viewerPrev = document.getElementById('viewerPrev');
const viewerNext = document.getElementById('viewerNext');
let currentPhoto = 0;
const galleryPhotos = [];

galleryItems.forEach((item, index) => {
  const image = item.querySelector('img');
  const caption = item.querySelector('.gallery-caption p');
  galleryPhotos.push({ src: image.src, caption: caption.textContent });

  item.addEventListener('click', () => {
    currentPhoto = index;
    showPhoto(currentPhoto);
    photoViewer.classList.add('active');
  });
});

function showPhoto(index) {
  viewerImage.src = galleryPhotos[index].src;
  viewerCaption.textContent = galleryPhotos[index].caption;
}
viewerClose.addEventListener('click', () => photoViewer.classList.remove('active'));
viewerNext.addEventListener('click', () => { currentPhoto = (currentPhoto + 1) % galleryPhotos.length; showPhoto(currentPhoto); });
viewerPrev.addEventListener('click', () => { currentPhoto = (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length; showPhoto(currentPhoto); });
photoViewer.addEventListener('click', e => { if (e.target === photoViewer) photoViewer.classList.remove('active'); });

document.addEventListener('keydown', e => {
  if (!photoViewer.classList.contains('active')) return;
  if (e.key === 'Escape') photoViewer.classList.remove('active');
  if (e.key === 'ArrowRight') viewerNext.click();
  if (e.key === 'ArrowLeft') viewerPrev.click();
});

/* Gentle floating hearts forever */
setInterval(() => {
  if (document.visibilityState === 'visible') burstHearts(1);
}, 900);
