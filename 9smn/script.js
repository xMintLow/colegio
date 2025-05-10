document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("nav-visible");
    });
});

const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth; // Ancho de cada slide
let intervalId;
const autoSlideInterval = 3000; // Intervalo de tiempo para el cambio automático (en milisegundos)

function goToSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Event listeners para los botones
if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide(); // Reiniciar el auto slide después de la interacción manual
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide(); // Reiniciar el auto slide después de la interacción manual
    });
}

// Iniciar el auto slide al cargar la página
startAutoSlide();

// Hacer el slider responsivo al redimensionar la ventana
window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    goToSlide(currentIndex); // Recalcular la posición al redimensionar
});


document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    let images = document.querySelectorAll(".carousel-slide img");
    
    let index = 0;
    const imageWidth = images[0].clientWidth; 
    const intervalTime = 1500; // 🔹 Más rápido: 1.5 segundos

    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slide.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    setInterval(nextSlide, intervalTime);
});


