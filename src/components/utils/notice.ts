const message = document.querySelector('.message') as HTMLElement;
const logo = document.querySelector('.header__logo') as HTMLElement;

function showMessage(textMessage: string) {
  message.innerHTML = textMessage;
  message.classList.add('success-msg');
  setTimeout( function () {
    message.classList.remove('success-msg');
  }, 4000);
}


// Подключаем так:
//слушатель.addEventListener('событие', function (){ showMessage('hello word'); });