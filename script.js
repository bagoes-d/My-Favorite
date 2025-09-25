// ================================
// Typing Effect di Hero (dengan loop)
// ================================
const text = "Sebuah cerita sederhana tentang kita berdua ❤️";
let index = 0;
let forward = true;
let typingEl = document.getElementById("typing");

function typeWriter() {
  if (forward) {
    if (index < text.length) {
      typingEl.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      forward = false;
      setTimeout(typeWriter, 2000); // jeda sebelum hapus
    }
  } else {
    if (index > 0) {
      typingEl.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(typeWriter, 50);
    } else {
      forward = true;
      setTimeout(typeWriter, 800);
    }
  }
}
window.onload = typeWriter;


// ================================
// Reveal on Scroll untuk Section
// ================================
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


// ================================
// Reveal Animasi untuk Galeri (fade + zoom + delay)
// ================================
const galeriImgs = document.querySelectorAll('.galeri-grid img');

galeriImgs.forEach((img, i) => {
  img.style.opacity = 0;
  img.style.transform = "scale(0.9)";
  img.style.transition = `all 0.6s ease ${i * 0.1}s`; // delay beda tiap gambar
});

window.addEventListener('scroll', () => {
  galeriImgs.forEach(img => {
    const windowHeight = window.innerHeight;
    const elementTop = img.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      img.style.opacity = 1;
      img.style.transform = "scale(1)";
    }
  });
});


// ================================
// Lightbox untuk Galeri (fade in/out)
// ================================
function openLightbox(imgElement, captionText) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightbox.style.display = "flex";
  lightbox.style.opacity = 0;
  setTimeout(() => {
    lightbox.style.opacity = 1;
  }, 50);

  lightboxImg.src = imgElement.src;
  lightboxCaption.textContent = captionText;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.opacity = 0;
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
}


// ================================
// Smooth Scroll Navbar + Active Link
// ================================
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});


// Highlight link aktif saat scroll
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});


// ================================
// Navbar Shadow + Shrink Saat Scroll
// ================================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
    navbar.style.padding = "8px 25px";
  } else {
    navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
    navbar.style.padding = "12px 30px";
  }
});

// ================================
// Hamburger Menu
// ================================
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
