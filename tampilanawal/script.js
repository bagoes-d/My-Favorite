// Typing effect tagline
const text = "Sebuah cerita cinta yang kita ukir bersama...";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
});

function openLightbox(imgElement, captionText) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  
  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
  lightboxCaption.textContent = captionText;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

