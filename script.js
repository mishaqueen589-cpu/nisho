* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

:root {
--pink: #e98ca8;
--dark-pink: #c95d7d;
--soft-pink: #fce5ec;
--cream: #fffaf6;
--beige: #f5e9df;
--brown: #604c4c;
--dark: #382d31;
--white: #ffffff;
--shadow: 0 18px 45px rgba(120, 70, 80, 0.12);
}

html {
scroll-behavior: smooth;
}

body {
min-height: 100vh;
background:
radial-gradient(circle at 10% 10%, rgba(255, 190, 210, 0.35), transparent 25%),
radial-gradient(circle at 90% 20%, rgba(255, 220, 190, 0.35), transparent 25%),
linear-gradient(135deg, #fffaf7, #fff0f4 50%, #fffaf7);
color: var(--brown);
font-family: Georgia, "Times New Roman", serif;
overflow-x: hidden;
}

body.viewer-open {
overflow: hidden;
}

button,
input {
font: inherit;
}

button {
cursor: pointer;
}

.hidden {
display: none !important;
}

/* ---------------- SCREENS ---------------- */

.screen {
min-height: 100vh;
display: none;
align-items: center;
justify-content: center;
padding: 30px 18px;
position: relative;
overflow: hidden;
}

.screen.active {
display: flex;
animation: screenIn 0.7s ease;
}

@keyframes screenIn {
from {
opacity: 0;
transform: translateY(18px);
}

to {
opacity: 1;
transform: translateY(0);
}
}

/* ---------------- CARD ---------------- */

.paper-card {
width: min(720px, 94vw);
background: rgba(255, 255, 255, 0.91);
border: 1px solid rgba(233, 140, 168, 0.25);
border-radius: 30px;
padding: 48px 35px;
text-align: center;
box-shadow: var(--shadow);
position: relative;
backdrop-filter: blur(8px);
}

.password-card {
max-width: 650px;
}

.choose-card {
max-width: 900px;
}

.eyebrow,
.section-number {
color: var(--dark-pink);
text-transform: uppercase;
letter-spacing: 3px;
font-size: 12px;
font-weight: bold;
}

.paper-card h1 {
margin: 12px 0 18px;
color: var(--dark);
font-size: clamp(30px, 5vw, 54px);
line-height: 1.12;
}

.soft-text {
color: #806d6e;
line-height: 1.8;
font-size: 16px;
}

.pink-text {
color: var(--dark-pink);
}

.sticker-hero {
font-size: 58px;
margin-bottom: 10px;
animation: gentleFloat 3s ease-in-out infinite;
}

@keyframes gentleFloat {
0%, 100% {
transform: translateY(0) rotate(-4deg);
}

50% {
transform: translateY(-10px) rotate(4deg);
}
}

/* ---------------- PASSWORD ---------------- */

.password-wrap {
display: flex;
gap: 10px;
margin-top: 28px;
}

.password-wrap input {
flex: 1;
min-width: 0;
border: 2px solid #f1ccd8;
background: #fffafa;
border-radius: 16px;
padding: 15px 16px;
outline: none;
color: var(--dark);
transition: 0.25s;
}

.password-wrap input:focus {
border-color: var(--pink);
box-shadow: 0 0 0 4px rgba(233, 140, 168, 0.12);
}

.hint {
margin-top: 15px;
font-size: 13px;
color: #aa9295;
}

.error-message {
min-height: 20px;
margin-top: 10px;
color: #c95d7d;
font-size: 14px;
}

.shake {
animation: shake 0.45s ease;
}

@keyframes shake {
0%, 100% {
transform: translateX(0);
}

25% {
transform: translateX(-8px);
}

75% {
transform: translateX(8px);
}
}

/* ---------------- BUTTONS ---------------- */

.pink-btn,
.dark-btn,
.outline-btn,
.music-button {
border-radius: 999px;
padding: 13px 22px;
border: none;
transition: 0.25s ease;
font-weight: bold;
}

.pink-btn {
color: white;
background: linear-gradient(135deg, #e98ca8, #d76f91);
box-shadow: 0 9px 20px rgba(215, 111, 145, 0.22);
}

.pink-btn:hover {
transform: translateY(-3px);
box-shadow: 0 13px 25px rgba(215, 111, 145, 0.3);
}

.dark-btn {
color: white;
background: #554246;
}

.dark-btn:hover {
transform: translateY(-3px);
}

.outline-btn {
color: var(--dark-pink);
background: rgba(255, 255, 255, 0.8);
border: 2px solid #e9a3b7;
}

.outline-btn:hover {
background: var(--soft-pink);
}

.big-btn {
padding: 15px 28px;
}

.music-button {
color: var(--dark-pink);
background: #fff0f4;
border: 1px solid #f1c3d1;
}

.music-button:hover {
transform: translateY(-2px);
background: #fce0e9;
}

/* ---------------- BIRTHDAY ---------------- */

.animated-cake {
font-size: 75px;
animation: cakeBounce 1.5s ease-in-out infinite;
}

@keyframes cakeBounce {
0%, 100% {
transform: translateY(0);
}

50% {
transform: translateY(-10px);
}
}

.birthday-message {
max-width: 580px;
margin: 0 auto;
line-height: 1.8;
color: #806d6e;
}

.mini-stickers {
display: flex;
justify-content: center;
gap: 20px;
margin: 25px 0;
font-size: 25px;
}

/* ---------------- YES NO ---------------- */

.floating-gift {
font-size: 70px;
animation: gentleFloat 2.5s ease-in-out infinite;
}

.yes-no {
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
flex-wrap: wrap;
margin-top: 28px;
}

.no-reaction {
margin-top: 25px;
padding: 20px;
background: #fff1f5;
border-radius: 20px;
}

.sad-sticker {
font-size: 55px;
margin-bottom: 8px;
}

/* ---------------- COUNTDOWN ---------------- */

.countdown-card {
max-width: 500px;
}

#countdownNumber {
font-size: clamp(100px, 20vw, 180px);
color: var(--dark-pink);
font-weight: bold;
line-height: 1;
margin: 25px 0;
animation: countdownPop 1s ease;
}

@keyframes countdownPop {
0% {
transform: scale(0.4);
opacity: 0;
}

70% {
transform: scale(1.12);
}

100% {
transform: scale(1);
opacity: 1;
}
}

.countdown-stickers {
display: flex;
justify-content: center;
gap: 20px;
font-size: 28px;
}

/* ---------------- GIFT CHOICES ---------------- */

.gift-options {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 18px;
margin: 30px 0;
}

.gift-choice {
border: 1px solid #efd1da;
border-radius: 24px;
background: linear-gradient(145deg, #fff, #fff3f6);
padding: 25px 15px;
color: var(--dark);
transition: 0.3s;
}

.gift-choice:hover {
transform: translateY(-8px) rotate(-1deg);
box-shadow: 0 15px 30px rgba(130, 75, 90, 0.13);
border-color: #e9a3b7;
}

.gift-emoji {
display: block;
font-size: 48px;
margin-bottom: 12px;
}

.gift-choice strong {
display: block;
font-size: 19px;
margin-bottom: 8px;
}

.gift-choice small {
color: #8d7b7d;
line-height: 1.5;
}

/* ---------------- MAIN WEBSITE ---------------- */

#mainWebsite {
width: 100%;
}

.hero-section {
min-height: 92vh;
padding: 90px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
overflow: hidden;
background:
radial-gradient(circle at 20% 20%, rgba(255, 190, 210, 0.35), transparent 25%),
radial-gradient(circle at 80% 30%, rgba(255, 220, 190, 0.3), transparent 25%);
}

.hero-section h1 {
font-size: clamp(42px, 8vw, 82px);
color: var(--dark);
margin: 15px 0;
line-height: 1;
}

.hero-text {
max-width: 600px;
color: #806d6e;
font-size: 18px;
line-height: 1.7;
}

.hero-buttons {
display: flex;
gap: 12px;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
}

.hero-music {
margin-top: 18px;
}

.hero-sticker {
position: absolute;
font-size: 55px;
}

.hero-balloon.left {
left: 8%;
top: 18%;
}

.hero-balloon.right {
right: 8%;
top: 24%;
}

.hero-bear {
bottom: 8%;
font-size: 70px;
}

/* ---------------- CONTENT ---------------- */

.content-section {
width: min(1150px, 92%);
margin: 0 auto;
padding: 100px 0;
scroll-margin-top: 20px;
}

.content-section h2,
.final-section h2 {
font-size: clamp(32px, 5vw, 55px);
color: var(--dark);
margin: 10px 0 12px;
}

.section-intro {
color: #8a7779;
margin-bottom: 50px;
line-height: 1.7;
}

/* ---------------- LETTER ---------------- */

.letter-scene {
min-height: 650px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
}

.letter-paper {
width: min(600px, 90%);
background: #fffdf9;
border-radius: 8px;
padding: 45px;
box-shadow: 0 18px 45px rgba(80, 50, 50, 0.12);
position: relative;
z-index: 2;
transform: rotate(-1deg);
border: 1px solid #f0e1d7;
}

.letter-icon {
font-size: 40px;
margin-bottom: 10px;
}

.letter-paper h3 {
color: var(--dark-pink);
font-size: 27px;
margin-bottom: 18px;
}

.letter-paper p {
color: #705e60;
line-height: 1.85;
margin: 14px 0;
}

.signature {
color: var(--dark-pink) !important;
margin-top: 25px !important;
}

.polaroid {
position: absolute;
background: white;
padding: 10px 10px 35px;
width: 190px;
box-shadow: 0 12px 30px rgba(80, 50, 50, 0.14);
z-index: 3;
}

.polaroid img {
width: 100%;
height: 190px;
object-fit: cover;
}

.polaroid span {
position: absolute;
bottom: 8px;
right: 14px;
color: var(--dark-pink);
font-size: 20px;
}

.polaroid-one {
left: 1%;
top: 8%;
transform: rotate(-9deg);
}

.polaroid-two {
right: 1%;
top: 5%;
transform: rotate(8deg);
}

.polaroid-three {
left: 5%;
bottom: 4%;
transform: rotate(7deg);
}

/* ---------------- GALLERY ---------------- */

.gallery-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 240px;
gap: 18px;
}

.gallery-item {
position: relative;
overflow: hidden;
border-radius: 24px;
background: #f5e8e1;
cursor: pointer;
box-shadow: 0 10px 25px rgba(80, 50, 50, 0.1);
}

.gallery-item.tall {
grid-row: span 2;
}

.gallery-item.wide {
grid-column: span 2;
}

.gallery-item img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
transition: 0.45s ease;
}

.gallery-item:hover img {
transform: scale(1.07);
}

.gallery-caption {
position: absolute;
left: 0;
right: 0;
bottom: 0;
padding: 35px 18px 16px;
background: linear-gradient(transparent, rgba(45, 30, 35, 0.7));
color: white;
display: flex;
gap: 10px;
align-items: center;
}

/* ---------------- SURPRISE BOX ---------------- */

.surprise-section {
text-align: center;
}

.surprise-box-wrap {
max-width: 850px;
margin: 30px auto;
position: relative;
}

.surprise-box {
width: min(650px, 90%);
height: 430px;
margin: 70px auto 20px;
position: relative;
}

.box-body {
position: absolute;
left: 10%;
right: 10%;
bottom: 0;
height: 270px;
background: linear-gradient(135deg, #e98ca8, #d86f91);
border-radius: 12px 12px 25px 25px;
box-shadow: 0 18px 35px rgba(120, 60, 80, 0.2);
z-index: 2;
}

.box-back {
position: absolute;
left: 10%;
right: 10%;
bottom: 230px;
height: 100px;
background: #f4b4c7;
border-radius: 15px 15px 5px 5px;
z-index: 1;
}

.box-lid {
position: absolute;
left: 6%;
right: 6%;
bottom: 245px;
height: 65px;
background: linear-gradient(135deg, #f0a1b9, #d96f91);
border-radius: 12px;
z-index: 8;
transition: 0.8s ease;
transform-origin: bottom center;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 10px 20px rgba(120, 60, 80, 0.15);
}

.box-lid span {
font-size: 32px;
}

.surprise-box.opened .box-lid {
transform: translateY(-100px) rotate(-5deg);
}

.box-ribbon.vertical {
position: absolute;
width: 55px;
top: 135px;
bottom: 0;
left: calc(50% - 27px);
background: rgba(255, 245, 248, 0.65);
z-index: 5;
}

.box-video {
position: absolute;
width: 190px;
height: 145px;
overflow: hidden;
border-radius: 15px;
background: #2f2529;
opacity: 0;
transform: translateY(80px) scale(0.7);
transition: 0.8s ease;
z-index: 4;
box-shadow: 0 12px 25px rgba(60, 30, 40, 0.2);
}

.box-video video {
width: 100%;
height: 100%;
object-fit: cover;
}

.video-a {
left: 6%;
bottom: 80px;
}

.video-b {
left: calc(50% - 95px);
bottom: 130px;
}

.video-c {
right: 6%;
bottom: 80px;
}

.surprise-box.opened .box-video {
opacity: 1;
transform: translateY(0) scale(1);
}

.video-fullscreen {
position: absolute;
right: 7px;
top: 7px;
width: 32px;
height: 32px;
border: none;
border-radius: 50%;
background: rgba(255, 255, 255, 0.9);
color: #594449;
}

.box-message {
position: relative;
z-index: 10;
}

.box-message p {
margin-bottom: 18px;
color: #806d6e;
}

/* ---------------- FINAL ---------------- */

.final-section {
width: min(850px, 90%);
margin: 0 auto;
padding: 120px 0;
text-align: center;
}

.final-sticker {
font-size: 65px;
animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
0%, 100% {
transform: scale(1);
}

20% {
transform: scale(1.12);
}

40% {
transform: scale(1);
}
}

.final-section p {
color: #806d6e;
line-height: 1.8;
font-size: 17px;
}

.final-hearts {
margin-top: 25px;
color: var(--dark-pink);
font-size: 30px;
letter-spacing: 8px;
}

footer {
text-align: center;
padding: 30px;
color: #9c8588;
border-top: 1px solid #f0dce2;
}

/* ---------------- DECORATIVE STICKERS ---------------- */

.sticker {
position: fixed;
pointer-events: none;
z-index: 20;
}

.flower-1 {
left: 4%;
top: 10%;
font-size: 25px;
animation: gentleFloat 4s infinite;
}

.flower-2 {
right: 5%;
bottom: 15%;
font-size: 28px;
animation: gentleFloat 3.5s infinite;
}

.star-1 {
right: 12%;
top: 12%;
color: #e4ae55;
font-size: 24px;
}

.star-2 {
left: 12%;
bottom: 18%;
color: #e4ae55;
font-size: 22px;
}

.heart-1 {
right: 8%;
top: 55%;
color: #e98ca8;
font-size: 30px;
}

.heart-2 {
left: 6%;
top: 65%;
color: #e98ca8;
font-size: 25px;
}

/* ---------------- FLOATING HEARTS ---------------- */

#heartLayer,
#confettiLayer {
position: fixed;
inset: 0;
pointer-events: none;
overflow: hidden;
z-index: 9999;
}

.floating-heart {
position: absolute;
bottom: -40px;
color: #e98ca8;
opacity: 0;
animation: floatHeart 5s linear forwards;
text-shadow: 0 4px 10px rgba(200, 80, 110, 0.18);
}

@keyframes floatHeart {
0% {
transform: translateY(0) rotate(0deg);
opacity: 0;
}

15% {
opacity: 0.8;
}

100% {
transform: translateY(-110vh) rotate(25deg);
opacity: 0;
}
}

.confetti {
position: absolute;
top: -15px;
width: 9px;
height: 14px;
background: #e98ca8;
animation: confettiFall 2.8s linear forwards;
}

.confetti:nth-child(3n) {
background: #f3c5d3;
}

.confetti:nth-child(4n) {
background: #e8bd91;
}

@keyframes confettiFall {
from {
transform: translateY(0) rotate(0deg);
}

to {
transform: translateY(110vh) rotate(720deg);
}
}

/* ---------------- PHOTO VIEWER ---------------- */

.photo-viewer {
position: fixed;
inset: 0;
background: rgba(40, 25, 30, 0.9);
z-index: 10000;
display: none;
align-items: center;
justify-content: center;
padding: 25px;
}

.photo-viewer.show {
display: flex;
}

.viewer-content {
text-align: center;
max-width: 90vw;
max-height: 90vh;
}

.viewer-content img {
max-width: 90vw;
max-height: 78vh;
object-fit: contain;
border-radius: 15px;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.viewer-content p {
color: white;
margin-top: 12px;
}

.viewer-close,
.viewer-prev,
.viewer-next {
position: absolute;
border: none;
background: rgba(255, 255, 255, 0.15);
color: white;
border-radius: 50%;
width: 48px;
height: 48px;
font-size: 32px;
z-index: 2;
}

.viewer-close {
top: 25px;
right: 25px;
}

.viewer-prev {
left: 25px;
top: 50%;
}

.viewer-next {
right: 25px;
top: 50%;
}

.viewer-close:hover,
.viewer-prev:hover,
.viewer-next:hover {
background: rgba(255, 255, 255, 0.3);
}

/* ---------------- RESPONSIVE ---------------- */

@media (max-width: 800px) {
.gift-options {
grid-template-columns: 1fr;
}

.gallery-grid {
grid-template-columns: 1fr 1fr;
grid-auto-rows: 220px;
}

.gallery-item.wide {
grid-column: span 2;
}

.letter-scene {
min-height: auto;
padding: 30px 0;
}

.polaroid {
display: none;
}

.letter-paper {
width: 100%;
}

.hero-balloon.left {
left: 2%;
}

.hero-balloon.right {
right: 2%;
}
}

@media (max-width: 550px) {
.paper-card {
padding: 35px 20px;
border-radius: 22px;
}

.password-wrap {
flex-direction: column;
}

.password-wrap .pink-btn {
width: 100%;
}

.gallery-grid {
grid-template-columns: 1fr;
}

.gallery-item.wide,
.gallery-item.tall {
grid-column: auto;
grid-row: auto;
}

.gallery-item {
height: 300px;
}

.surprise-box {
height: 500px;
}

.box-video {
width: 140px;
height: 110px;
}

.video-a {
left: 0;
}

.video-b {
left: calc(50% - 70px);
}

.video-c {
right: 0;
}

.yes-no {
flex-direction: column;
}

.yes-no button {
width: 100%;
}
}
