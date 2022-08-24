import AppUser from './components/app/appUser';
import './global.css';

const app = new AppUser();

app.init();

function userPageRequests(): void {
  const main = document.querySelector('main') as HTMLElement;
  main.innerHTML = '';  
  app.renderRequests();
}

function renderUserPageRequests(): void {
  const RequestsBtn = document.querySelector('.buttons-section__btn-requests') as HTMLButtonElement;
  console.log(RequestsBtn);
  RequestsBtn.addEventListener('click', userPageRequests);
}
renderUserPageRequests();