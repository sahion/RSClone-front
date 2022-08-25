import Main from '../../view/main/main';
import createDivItemCard from '../../utils/renderRequestCard';
import { dataUserApply } from '../../model/fakeDatabase/userApply';

function renderRequestCard() {
  const cards = document.querySelector('.requests-section__cards') as HTMLElement;
  console.log(cards);
  for (let index = 0; index < dataUserApply.length; index++) {
    const div = createDivItemCard(dataUserApply, index);
    cards.appendChild(div);   
  } 
} 

function userPageRequests(): void {
  const main = document.querySelector('main') as HTMLElement;
  const newMain: Main = new Main();
  main.innerHTML = '';
  main.innerHTML += newMain.getUserFiltersSection();
  main.innerHTML += newMain.getUsersRequestsSection();
  main.innerHTML += newMain.getUserPaginationBtnsSection();
  renderRequestCard();
}

export function renderUserPageRequests(): void {
  const requestsBtn = document.querySelector('.buttons-section__btn-requests') as HTMLButtonElement;
  
  requestsBtn.addEventListener('click', userPageRequests);
}

export function addListeners(): void {
  renderUserPageRequests();
}

