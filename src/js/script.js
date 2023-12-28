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
            counter.innerText = "+" + Math.ceil(count + inc);
            count += inc;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = "+" + target;
          }
        };

        updateCount();
      }
    });
  }

  activateCounters();

  window.addEventListener("scroll", activateCounters);
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
      "border-yellowOficina100 border-2 transform hover:scale-105 transition-transform duration-300";

    imagesDiv.appendChild(img);
  });
}

const container = document.querySelector(".images-container");
initRenderImageFilter("all", 6, container);
