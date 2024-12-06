const toggleBtn = document.getElementById('toggleBtn');
const sky = document.getElementById('sky');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const stars = document.getElementById('stars');

// Function to generate stars with random effects
function generateStars() {
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 10 + 5}s`;
    stars.appendChild(star);
  }
}

generateStars();

// Set default to daytime
let isDay = true;
sky.classList.add('day');

// Toggle between day and night
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  if (isDay) {
    sky.classList.remove('day');
    sky.classList.add('night');
    sun.style.display = 'none';
    moon.style.display = 'block';
    isDay = false;
  } else {
    sky.classList.remove('night');
    sky.classList.add('day');
    sun.style.display = 'block';
    moon.style.display = 'none';
    isDay = true;
  }
});
