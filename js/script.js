document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});
// Chama a função Menu sem um argumento inicialmente

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
