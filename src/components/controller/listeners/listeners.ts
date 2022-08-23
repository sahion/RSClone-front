import getRequestFormData from '../dataHandlers/getRequestFormData';

function showRegister(event: Event): void {
  const registerModal = document.querySelector('.modal-register') as HTMLElement;
  const loginrModal = document.querySelector('.modal-login') as HTMLElement;
  event.preventDefault();

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');

  loginrModal.classList.add('modal--hidden');
  loginrModal.classList.remove('modal--active');
}

function showLogin(event: Event): void {
  const loginrModal = document.querySelector('.modal-login') as HTMLElement;
  const registerModal = document.querySelector('.modal-register') as HTMLElement;
  event.preventDefault();

  loginrModal.classList.remove('modal--hidden');
  loginrModal.classList.add('modal--active');

  registerModal.classList.add('modal--hidden');
  registerModal.classList.remove('modal--active');
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
  const registerSpan = document.getElementById('registerSpan') as HTMLSpanElement;

  registerBtn.addEventListener('click', showRegister);
  registerSpan.addEventListener('click', showRegister);
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
  const requestBtn = document.getElementById('requestSpan') as HTMLButtonElement;

  requestBtn.addEventListener('click', showRequest);
}

export function openHelpWindowListener(): void {
  const requestBtn = document.getElementById('helpSpan') as HTMLButtonElement;

  requestBtn.addEventListener('click', showLogin);
}

export function createRequestListener(): void {
  const requestForm = document.getElementById('requestForm') as HTMLFormElement;

  requestForm.addEventListener('submit', getRequestFormData);
}

export function openLoginWindowFromCard(): void {
  const loginBtns: NodeListOf<Element> = document.querySelectorAll('.card__login-btn');

  [...loginBtns].map(btn => btn.addEventListener('click', showLogin));
}

export function openRegisterWindowFromLogin(): void {
  const registerBtn = document.querySelector('.login__btn-to-register') as HTMLButtonElement;

  registerBtn.addEventListener('click', showRegister);
}

export function openLoginWindowFromRegister(): void {
  const registerBtn = document.querySelector('.register__btn-to-login') as HTMLButtonElement;

  registerBtn.addEventListener('click', showLogin);
}

export function addListeners(): void {
  openRegisterWindowListener();
  openLoginWindowListener();
  openRequestWindowListener();
  openHelpWindowListener();
  openLoginWindowFromCard();
  openRegisterWindowFromLogin();
  openLoginWindowFromRegister();
  createRequestListener();
  closeModalWindowListener();
}

