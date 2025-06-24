document.addEventListener("DOMContentLoaded", function () {
  // Появление картинок
  let imageContainer = document.getElementById('image-container');
  if (!imageContainer) {
    console.error("Контейнер не найден!");
    return;
  }

  let sliderImages = imageContainer.querySelectorAll('img');
  if (sliderImages.length === 0) {
    console.warn("Нет изображений в контейнере");
    return;
  }

  // Проверка загрузки изображений
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].onerror = function () {
      console.error('Ошибка загрузки: ' + sliderImages[i].src);
    };
  }

  let currentIndex = 0;
  sliderImages[0].style.display = 'block';

  function switchRandomImage() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none';
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * sliderImages.length);
    } while (newIndex === currentIndex && sliderImages.length > 1);

    currentIndex = newIndex;
    sliderImages[currentIndex].style.display = 'block';
  }

  setInterval(switchRandomImage, 500);

  // Курсор и книга
  const canvas = document.getElementById('container');
  if (!canvas) {
    console.error("Элемент 'container' не найден!");
    return;
  }

  canvas.onmousemove = function (e) {
    // Массив разных изображений книг
    const bookImages = [
      "img/book1.png",
      "img/book9.png",
      "img/book3.png",
      "img/book8.png",
      "img/book5.png",
      "img/book10.png",
    ];

    // Случайный выбор картинки
    const randomIndex = Math.floor(Math.random() * bookImages.length);
    const randomBookImage = bookImages[randomIndex];

    const bookImg = new Image();
    bookImg.src = randomBookImage;
    bookImg.style.position = 'absolute';
    bookImg.style.width = '15vw';
    bookImg.style.height = 'auto';
    bookImg.style.pointerEvents = 'none';

    const rect = canvas.getBoundingClientRect();
    bookImg.style.left = (e.clientX - rect.left - 40) + 'px';
    bookImg.style.top = (e.clientY - rect.top - 40) + 'px';

    canvas.appendChild(bookImg);

    // Анимация исчезновения
    setTimeout(() => {
      bookImg.classList.add('fade-out');
    }, 2000);

    setTimeout(() => {
      if (bookImg && bookImg.parentNode === canvas) {
        canvas.removeChild(bookImg);
      }
    }, 5000);
  };

  // Смена цвета при наведении на события 

  // Получаем все нужные элементы
  const hoverElements = document.querySelectorAll('.exhibition, .consult, .school, .fest');

  // Добавляем обработчики событий для каждого элемента
  hoverElements.forEach(element => {
    // При наведении мыши
    element.addEventListener('mouseenter', function () {
      this.style.backgroundColor = 'black'; // Серый цвет фона
      this.style.color = '#F97101'; // Оранжевый цвет текста
    });

    // Когда курсор уходит
    element.addEventListener('mouseleave', function () {
      this.style.backgroundColor = '#F97101'; // Возвращаем оранжевый фон
      this.style.color = 'black'; // Возвращаем черный текст
    });
  });

  // Оставьте свою почту

const emailInput = document.querySelector('.email-input');
    const goButton = document.querySelector('.go');
    const goText = document.querySelector('.go-text');
    const heartIcon = document.querySelector('.heart-icon');

    // Ensure initial state: "GO!" text visible, heart icon hidden
    goText.style.display = 'block';
    heartIcon.style.display = 'none';

    goButton.addEventListener('click', () => {
      const email = emailInput.value.trim();

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Hide the "GO!" text
        goText.style.display = 'none';
        // Show the heart icon
        heartIcon.style.display = 'block';
        // Apply scaling animation to heart
        heartIcon.classList.add('heart-animate');
        // Change button to dark gray
        goButton.style.backgroundColor = '#555555';

        // After 2 seconds, revert button color to original gray
        setTimeout(() => {
          goButton.style.backgroundColor = '#B7B7B7';
        }, 2000);

        console.log('Email saved:', email);
      } else {
        alert('Пожалуйста, введите корректный email');
        emailInput.focus();
      }
    });

    
});

