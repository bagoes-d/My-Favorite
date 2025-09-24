// Typing effect
const text = "Sebuah cerita sederhana tentang kita berdua ❤️";
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
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Reveal galeri images
const galeriImgs = document.querySelectorAll('.galeri-grid img');
window.addEventListener('scroll', () => {
  galeriImgs.forEach(img => {
    const windowHeight = window.innerHeight;
    const elementTop = img.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      img.style.opacity = 1;
      img.style.transform = "scale(1)";
    }
  });
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
