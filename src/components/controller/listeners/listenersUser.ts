import Main from '../../view/user-page/requests/main';

function userPageRequests(): void {
  const main = document.querySelector('main') as HTMLElement;
  const newMain = new Main();
  main.innerHTML = '';
  main.append(newMain.render());
}

export function renderUserPageRequests(): void {
  const requestsBtn = document.querySelector('.buttons-section__btn-requests') as HTMLButtonElement;
  console.log(requestsBtn);
  requestsBtn.addEventListener('click', userPageRequests);
}

export function addListeners(): void {
  renderUserPageRequests();
}

