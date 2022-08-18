function showRegister(): void {
  const registerModal = document.querySelector('.modal-register') as HTMLElement;

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');
}

function showLogin(): void {
  const registerModal = document.querySelector('.modal-login') as HTMLElement;

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');
}

function showRequest(): void {
  const requestModal = document.querySelector('.modal-request') as HTMLElement;

  requestModal.classList.remove('modal--hidden');
  requestModal.classList.add('modal--active');
}

function hideModal(): void {
  const registerModal: NodeListOf<Element> = document.querySelectorAll('.modal');
  
  [...registerModal].map(item => {
    item.classList.remove('modal--active');
    item.classList.add('modal--hidden');
  });
}

export function openRegisterWindowListener(): void {
  const registerBtn = document.getElementById('register') as HTMLButtonElement;

  registerBtn.addEventListener('click', showRegister);
}

export function closeModalWindowListener(): void {
  const modalClose: NodeListOf<Element> = document.querySelectorAll('.modal__close');

  [...modalClose].map(item => item.addEventListener('click', hideModal));
}

export function openLoginWindowListener(): void {
  const loginBtn = document.getElementById('login') as HTMLButtonElement;

  loginBtn.addEventListener('click', showLogin);
}

export function openRequestWindowListener(): void {
  const requestBtn = document.getElementById('request') as HTMLButtonElement;

  requestBtn.addEventListener('click', showRequest);
}

