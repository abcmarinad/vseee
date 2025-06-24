document.addEventListener("DOMContentLoaded", function() {
    const typingElements = document.querySelectorAll('.typing-animation');
    const speed = 100;
    
    // Предварительно устанавливаем фиксированные размеры
    typingElements.forEach(element => {
        const text = element.getAttribute('data-text');
        element.style.width = text.length + '2ch'; /* Фиксируем ширину по символам */
        element.style.visibility = 'visible';
    });

    // Функция для одновременной печати
    function typeAllTexts() {
        let counter = 0;
        const maxLength = Math.max(...Array.from(typingElements).map(el => el.getAttribute('data-text').length));
        
        const interval = setInterval(() => {
            typingElements.forEach(element => {
                const text = element.getAttribute('data-text');
                if (counter <= text.length) {
                    element.textContent = text.substring(0, counter);
                    element.style.animation = 'blink 0.7s infinite';
                }
            });
            
            counter++;
            if (counter > maxLength) {
                clearInterval(interval);
                // Для бесконечного цикла:
                setTimeout(() => {
                    typingElements.forEach(el => el.textContent = '');
                    setTimeout(typeAllTexts, 500);
                }, 2000);
            }
        }, speed);
    }
    
    typeAllTexts();

document.querySelector('.plusik').addEventListener('click', function() {
  // Показываем оба элемента
  document.querySelector('.finaldom').classList.add('show');
  document.querySelector('.krestik').classList.add('show');
});

// Добавляем обработчик для скрытия при клике на krestik
document.querySelector('.krestik').addEventListener('click', function() {
  // Скрываем оба элемента
  document.querySelector('.finaldom').classList.remove('show');
  this.classList.remove('show'); // this = krestik
});

});


