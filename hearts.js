document.addEventListener('DOMContentLoaded', () => {
  const fallingHeartsContainer = document.querySelector('.falling-hearts');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    fallingHeartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);
});
