const scenes = [...document.querySelectorAll('.scene')];
const progressValue = document.querySelector('.progress-value');
const progressLabel = document.querySelector('.progress-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentScene = 0;

function showScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));
  scenes.forEach((scene, sceneIndex) => {
    const active = sceneIndex === currentScene;
    scene.hidden = !active;
    scene.classList.toggle('is-active', active);
  });
  const completed = ((currentScene + 1) / scenes.length) * 100;
  progressValue.style.width = `${completed}%`;
  progressLabel.textContent = `${String(currentScene + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')}`;
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  scenes[currentScene].querySelector('h1, h2')?.focus?.();
}

document.querySelectorAll('[data-next]').forEach((button) => button.addEventListener('click', () => showScene(currentScene + 1)));
document.querySelectorAll('[data-restart]').forEach((button) => button.addEventListener('click', () => showScene(0)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' && currentScene < scenes.length - 1) showScene(currentScene + 1);
  if (event.key === 'ArrowLeft' && currentScene > 0) showScene(currentScene - 1);
});

function celebrate() {
  const holder = document.querySelector('#confetti');
  const colors = ['#e4848c', '#f6dc76', '#85a99b', '#f7ab6d', '#fff'];
  holder.replaceChildren();
  for (let index = 0; index < 80; index += 1) {
    const piece = document.createElement('i');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 280}px`);
    piece.style.animationDelay = `${Math.random() * .35}s`;
    holder.append(piece);
  }
  window.setTimeout(() => holder.replaceChildren(), 2500);
}
document.querySelector('#celebrate').addEventListener('click', celebrate);
showScene(0);
//StellineLisa
const sparkles = document.getElementById("sparkles");

function createSparkle() {
  const star = document.createElement("span");

  star.className = "sparkle";
  star.innerHTML = "✦";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  const size = Math.random() * 15 + 10;
  star.style.fontSize = size + "px";

  star.style.animationDuration = (3 + Math.random() * 3) + "s";

  sparkles.appendChild(star);
  star.innerHTML = Math.random() > 0.5 ? "✦" : "✨";
  setTimeout(() => {
    star.remove();
  }, 7000);
}

// crea una stellina ogni mezzo secondo
setInterval(createSparkle, 500);
