const flipButton = document.querySelector('#flipButton');
const calendar = document.querySelector('#calendar');

flipButton.addEventListener('click', () => {
    calendar.classList.toggle('flipped'); // Переключаем класс 'flipped' на элементе календаря
    calendar.style.transform = calendar.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'; // Меняем стиль transform для анимации вращения
});
