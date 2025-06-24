document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Функция для переключения слайдов
    function goToSlide(slideIndex) {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        
        // Обновляем активные точки
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        
        // Обновляем активные слайды (если нужно для стилей)
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        
        currentSlide = slideIndex;
    }
    
    // Следующий слайд
    function nextSlide() {
        if (currentSlide === totalSlides - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }
    
    // Предыдущий слайд
    function prevSlide() {
        if (currentSlide === 0) {
            goToSlide(totalSlides - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Клик по кнопке "Вперед"
    nextBtn.addEventListener('click', nextSlide);
    
    // Клик по кнопке "Назад"
    prevBtn.addEventListener('click', prevSlide);
    
    // Клик по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Автоматическое переключение (опционально)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Остановка авто-переключения при наведении
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Возобновление авто-переключения
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});
