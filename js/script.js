//menu.js
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}
initMobileMenu();

// slider.js
function Slider() {
  const imagens = [
    "../img/foto-0.png",
    "../img/foto-1.png",
    "../img/foto-2.png",
    "../img/foto-3.png",
    "../img/foto-4.png",
  ];

  const swiperWrapper = document.getElementById("swiper-wrapper");

  imagens.forEach((imagem, index) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide border-yellowOficina100 border-2";

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `Foto ${index}`;

    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
  });
}
Slider();

//counter.js
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;
  let activated = false;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function activateCounters() {
    if (!activated) {
      counters.forEach((counter) => {
        if (isElementInViewport(counter)) {
          const target = +counter.getAttribute("data-target");
          const inc = target / speed;
          let count = 0;

          const updateCount = () => {
            if (count < target) {
              counter.innerText = "+" + Math.ceil(count + inc);
              count += inc;
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = "+" + target;
              activated = true; // Marca a função como ativada após a animação inicial
            }
          };

          updateCount();
        }
      });
    }
  }

  function handleScrollAndResize() {
    activateCounters();
  }

  window.addEventListener("scroll", handleScrollAndResize);
  window.addEventListener("resize", handleScrollAndResize);

  // Ativar contadores na inicialização
  activateCounters();
}

initCounters();

//filter.js
let activeButton;

function initFilterImages(category, count, button) {
  document.querySelectorAll(".images-container").forEach(function (div) {
    div.style.display = "none";
  });

  const containerId = category + "Images";
  const container = document.getElementById(containerId);

  if (container) {
    container.style.display = "flex";
    initRenderImageFilter(category, count, container);
  } else {
    console.error(`Element with ID ${containerId} not found.`);
  }

  container.classList.add("fade-in");
  setTimeout(() => {
    container.classList.remove("fade-in");
  }, 500);

  // Remove a classe "active" de todos os botões
  document.querySelectorAll(".filter-button").forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Adiciona a classe "active" ao botão clicado
  if (button) {
    button.classList.add("active");
    activeButton = button;
  }
}

window.onload = function () {
  initFilterImages("all", 6, document.getElementById("btnAll"));
};

//render.js
function initRenderImageFilter(category, count, container) {
  if (!container) {
    console.error("Container element not found.");
    return;
  }

  container.innerHTML = "";
  const imagesDiv = document.createElement("div");
  imagesDiv.className =
    "flex flex-col justify-center items-center px-10 gap-y-5 lg:grid lg:grid-cols-3 gap-5";

  container.appendChild(imagesDiv);

  const imagens = Array.from(
    { length: count },
    (_, index) => `../img/${category}-img-1.png`
  );

  imagens.forEach((imagem, index) => {
    const img = document.createElement("img");
    img.src = imagem;
    img.alt = `${category} Foto ${index}`;
    img.className =
      "shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-yellowOficina200";

    imagesDiv.appendChild(img);
  });
}

const container = document.querySelector(".images-container");
initRenderImageFilter("all", 6, container);

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass); // adiciono a classe ativo no primeiro item do dt
    accordionList[0].nextElementSibling.classList.add(activeClass); // adiciono a classe ativo no primeiro item do dd

    function activeAccordion() {
      this.classList.toggle(activeClass); // this serve tambem como const accordionlist, adicionando o toggle const do ativo no dt
      this.nextElementSibling.classList.toggle(activeClass); // adicionando tambem no dd
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion); // colocando o click e a funcao em cada dt e dd
    });
  }
}
initAccordion();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

var scrollToTopButton = document.getElementById("scrollToTopButton");

document.addEventListener("DOMContentLoaded", function () {
  // Adiciona evento de clique ao botão
  scrollToTopButton.addEventListener("click", scrollToTop);

  // Adiciona evento de scroll à janela
  window.addEventListener("scroll", handleScroll);

  // Função para verificar a posição da rolagem e mostrar/ocultar o botão
  function handleScroll() {
    if (window.scrollY > 0) {
      scrollToTopButton.classList.remove("hidden");
    } else {
      scrollToTopButton.classList.add("hidden");
    }
  }
});

//scroll suave
function initMobileMenuScroll() {
  const linksInternos = document.querySelectorAll('#mobile-menu a[href^="#"]');
  const topLinks = document.querySelectorAll('#top-links a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const pegarHref = event.currentTarget.getAttribute("href");
    const section = document.querySelector(pegarHref);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  topLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenuScroll();
});

//scroll animação

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".js-scroll");

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop < window.innerHeight * 0.8;

      if (isSectionVisible && !section.classList.contains("animated")) {
        section.classList.add("animated");
      } else if (!isSectionVisible && section.classList.contains("animated")) {
        section.classList.remove("animated");
      }
    });
  }

  animaScroll();
  window.addEventListener("scroll", animaScroll);
});
