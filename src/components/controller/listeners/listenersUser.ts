import Main from '../../view/main/main';

function userPageRequests(): void {
  const main = document.querySelector('main') as HTMLElement;
  const newMain: Main = new Main();
  main.innerHTML = '';
  main.innerHTML += newMain.getUserFiltersSection();
  main.innerHTML += newMain.getUsersRequestsSection();
  main.innerHTML += newMain.getUserPaginationBtnsSection();
}

export function renderUserPageRequests(): void {
  const requestsBtn = document.querySelector('.buttons-section__btn-requests') as HTMLButtonElement;
  
  requestsBtn.addEventListener('click', userPageRequests);
}

export function addListeners(): void {
  renderUserPageRequests();
}

