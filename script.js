onload = () => {
  document.body.classList.remove('container');
  const bgMusic = document.getElementById('bgMusic');
  // Mainkan musik saat halaman dimuat
  bgMusic.play();
};

const wrapper = document.querySelector('.wrapper');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
  wrapper.classList.add('open');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
  // Mainkan musik saat dibuka
  bgMusic.play();
});

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('open');
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
  // Jeda musik saat ditutup
  bgMusic.pause();
});
