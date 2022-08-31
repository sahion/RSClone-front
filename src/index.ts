import App from './components/app/app';
import carousel from './components/utils/carousel';
import './global.css';

const app = new App();

await app.init('main');

carousel();
const message = document.querySelector('.message') as HTMLElement;
const logo = document.querySelector('.header__logo') as HTMLElement;

function showMessage(textMessage: string) {
  message.innerHTML = textMessage;
  message.classList.add('success-msg');
  setTimeout( function () {
    message.classList.remove('success-msg');
  }, 4000);
}
logo.addEventListener('click', function () { showMessage('hello word'); });