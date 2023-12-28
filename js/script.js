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
  const speed = 200; // Velocidade da animação

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function activateCounters() {
    counters.forEach((counter) => {
      if (isElementInViewport(counter)) {
        const target = +counter.getAttribute("data-target");
        const inc = target / speed;
        let count = 0;

        const updateCount = () => {
          if (count < target) {
            counter.innerText = "+" + Math.ceil(count + inc); // Adiciona o "+"
            count += inc;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = "+" + target; // Adiciona o "+"
          }
        };

        updateCount();
      }
    });
  }

  // Ativar contadores quando a página carrega
  activateCounters();

  // Ativar contadores quando o usuário rola a página
  window.addEventListener("scroll", activateCounters);
}

initCounters();
