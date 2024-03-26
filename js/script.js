// Получаем ссылки и модальное окно
var infoLinks = document.querySelectorAll('.info-link');
var modal = document.getElementById('myModal');
var infoText = document.getElementById('infoText');

// Добавляем обработчик события на каждую ссылку
infoLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Получаем информацию из атрибута data-info
    var info = this.getAttribute('data-info');

    // Устанавливаем информацию в модальное окно
    infoText.innerHTML = info;

    // Отображаем модальное окно
    modal.style.display = 'block';
  });
});

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Обработчик события для закрытия модального окна при клике на пустое место вне его области
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});