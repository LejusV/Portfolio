async function loadProjects() {
  var h1 = document.getElementsByTagName("h1")[0];
  const resp = await fetch('../assets/data/projects.json');
  const projects = await resp.json();
  const section = document.getElementById('portfolio-section');
  section.innerHTML = '';
  let previousCategory = '';
  let previousContainerId = null;
  section.appendChild(h1);

  for (const project of projects) {
    // Crée le bloc HTML du projet
    const container = document.createElement('div');
    container.className = 'carousel-container coverflow';
    container.id = `carousel-${project.id}`;

    // Catégorie
    if (project.category !== previousCategory) {
      section.appendChild(document.createElement('hr'));
      previousCategory = project.category;
      const catHeader = document.createElement('h2');
      catHeader.setAttribute('data-i18n', project.category);
      catHeader.textContent = translations[currentLang][project.category] || project.category;
      container.appendChild(catHeader);
    } else {
      if (previousContainerId) {
        document.getElementById(previousContainerId).appendChild(document.createElement('hr'));
      }
    }

    // Titre
    const title = document.createElement('h3');
    title.setAttribute('data-i18n', project.titleKey);
    title.textContent = translations[currentLang][project.titleKey] || project.titleKey;
    container.appendChild(title);

    // Description
    const desc = document.createElement('p');
    desc.className = 'carousel-project-desc';
    desc.setAttribute('data-i18n', project.descKey);
    desc.textContent = translations[currentLang][project.descKey] || project.descKey;
    container.appendChild(desc);

    // Github link
    if (project.github) {
      const github = document.createElement('div');
      github.className = 'carousel-github-link';
      const githubText = document.createElement('span');
      githubText.textContent = translations[currentLang]["code_link"];
      githubText.setAttribute('data-i18n', 'code_link');
      const githubLink = document.createElement('a');
      githubLink.href = project.github;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = project.github;
      githubLink.className = 'source-link';
      github.appendChild(githubText);
      github.appendChild(githubLink);
      container.appendChild(github);
    }

    // Boutons et structure carousel
    container.innerHTML += `
      <button class="carousel-prev" aria-label="Previous">&#10094;</button>
      <div class="carousel"></div>
      <button class="carousel-next" aria-label="Next">&#10095;</button>
      <div class="carousel-dots"></div>
      <div class="carousel-desc"></div>
    `;

    previousContainerId = container.id;
    section.appendChild(container);

    // Charge dynamiquement les médias pour ce projet
    await loadCarouselMedia(container.id, project.mediaPath);
  }
}

// Appelle la fonction au chargement
document.addEventListener('DOMContentLoaded', loadProjects);

async function loadCarouselMedia(carouselId, projectPath) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    if (!carousel) return;
    // Charge le JSON listant les médias
    const resp = await fetch(`${projectPath}/media.json`);
    const mediaList = await resp.json();

    carousel.innerHTML = ""; // Vide le carousel

    mediaList.forEach(media => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide";
        slide.setAttribute("data-desc-key", media.descKey);

        if (media.type === "img") {
            const img = document.createElement("img");
            img.src = `${projectPath}/${media.file}`;
            img.alt = media.descKey;
            slide.appendChild(img);
        } else if (media.type === "video") {
            const video = document.createElement("video");
            video.src = `${projectPath}/${media.file}`;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.setAttribute("poster", `${projectPath}/${media.poster || ""}`);
            slide.appendChild(video);
        }
        carousel.appendChild(slide);
    });

  // Réinitialise le carousel après chargement dynamique
  reinitCarousel(carouselId);
}

// Réinitialise la logique du carousel pour un conteneur donné (après chargement dynamique)
function reinitCarousel(carouselId) {
  const container = document.getElementById(carouselId);
  if (!container) return;
  // Supprime les anciens event listeners (en réinitialisant le conteneur)
  const newContainer = container.cloneNode(true);
  container.parentNode.replaceChild(newContainer, container);
  // Réapplique la logique du carousel sur ce conteneur
  initSingleCarousel(newContainer);
}

// Initialise la logique d'un seul carousel-container
function initSingleCarousel(container) {
  let currentSlide = 0;
  const slides = container.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const nextBtn = container.querySelector('.carousel-next');
  const prevBtn = container.querySelector('.carousel-prev');
  const dots = container.querySelectorAll('.carousel-dot');
  let autoScroll;

  function updateCoverflow(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'left', 'right');
      slide.onclick = null;
      if (i === index) {
        slide.classList.add('active');
        // Si la slide contient une vidéo à lancer automatiquement
        const video = slide.querySelector('video');
        if (video) {
          if (video.src.includes('portfolio_opengl.mp4')) {
            video.loop = true;
            video.muted = true;
            video.play().catch(()=>{});
          }
        }
      } else if (i === (index - 1 + totalSlides) % totalSlides) {
        slide.classList.add('left');
        slide.onclick = () => { updateCoverflow(i); stopAutoScroll(); };
        slide.style.cursor = 'pointer';
        const video = slide.querySelector('video');
        if (video) video.pause();
      } else if (i === (index + 1) % totalSlides) {
        slide.classList.add('right');
        slide.onclick = () => { updateCoverflow(i); stopAutoScroll(); };
        slide.style.cursor = 'pointer';
        const video = slide.querySelector('video');
        if (video) video.pause();
      } else {
        slide.style.cursor = '';
        const video = slide.querySelector('video');
        if (video) video.pause();
      }
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    // Affiche la description de la slide active dans .carousel-desc
    const descBox = container.querySelector('.carousel-desc');
    if (descBox) {
      const active = slides[index];
      if (active) {
        const descKey = active.getAttribute('data-desc-key');
        if (descKey && typeof translations !== 'undefined' && typeof currentLang !== 'undefined' && translations[currentLang][descKey]) {
          descBox.textContent = translations[currentLang][descKey];
        } else {
          descBox.textContent = '';
        }
      } else {
        descBox.textContent = '';
      }
    }
    currentSlide = index;
  }

  function nextSlide() {
    updateCoverflow((currentSlide + 1) % totalSlides);
  }

  function prevSlide() {
    updateCoverflow((currentSlide - 1 + totalSlides) % totalSlides);
  }

  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 5000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  container.updateCoverflow = updateCoverflow;
  if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener('click', () => { nextSlide(); stopAutoScroll(); });
    prevBtn.addEventListener('click', () => { prevSlide(); stopAutoScroll(); });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { updateCoverflow(i); stopAutoScroll(); });
    });
    updateCoverflow(0);
    startAutoScroll();
  }
}

// Exemple d'appel pour chaque projet :
loadCarouselMedia("carousel-project-1", "../assets/img/projects/1");
loadCarouselMedia("carousel-project-2", "../assets/img/projects/2");
loadCarouselMedia("carousel-project-3", "../assets/img/projects/3");

// Permet de forcer la mise à jour de la description du slide actif de tous les carousels
function forceUpdateAllCarousels() {
  document.querySelectorAll('.carousel-container').forEach(function(container) {
    const slides = container.querySelectorAll('.carousel-slide');
    let activeIndex = 0;
    slides.forEach((slide, i) => {
      if (slide.classList.contains('active')) activeIndex = i;
    });
    // Appelle updateCoverflow pour rafraîchir la description
    if (typeof container.updateCoverflow === 'function') {
      container.updateCoverflow(activeIndex);
    } else {
      // fallback : on réutilise la fonction locale si possible
      if (typeof updateCoverflow === 'function') updateCoverflow(activeIndex);
    }
  });
}
