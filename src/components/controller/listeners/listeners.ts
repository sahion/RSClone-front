import getRequestFormData from '../dataHandlers/getRequestFormData';
import createDivItemCard from '../../utils/renderRequestCard';
import { dataUserApply } from '../../model/fakeDatabase/userApply';
import Main from '../../view/main/main';
import getFilter from '../../utils/filters';

function renderRequestCard(): void {
  const cards = document.querySelector('.requests-section__cards') as HTMLElement;
  
  for (let index = 0; index < dataUserApply.length; index++) {
    const div: HTMLElement = createDivItemCard(dataUserApply, index);
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
  const filtersBtns: NodeListOf<Element> = document.querySelectorAll('.filters-section__btn'); 
  [...filtersBtns].map(item => item.addEventListener('click', getFilter));
}

function showRegister(event: Event): void {
  const registerModal = document.querySelector('.modal-register') as HTMLElement;
  const loginrModal = document.querySelector('.modal-login') as HTMLElement;
  event.preventDefault();

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');

  loginrModal.classList.add('modal--hidden');
  loginrModal.classList.remove('modal--active');

  document.body.classList.add('modal--open');
}

function showLogin(event: Event): void {
  const loginrModal = document.querySelector('.modal-login') as HTMLElement;
  const registerModal = document.querySelector('.modal-register') as HTMLElement;
  event.preventDefault();

  loginrModal.classList.remove('modal--hidden');
  loginrModal.classList.add('modal--active');

  registerModal.classList.add('modal--hidden');
  registerModal.classList.remove('modal--active');

  document.body.classList.add('modal--open');
}

function showRequest(): void {
  const requestModal = document.querySelector('.modal-request') as HTMLElement;

  document.body.classList.add('modal--open');
  requestModal.classList.remove('modal--hidden');
  requestModal.classList.add('modal--active');
}

function hideModal(): void {
  const registerModal: NodeListOf<Element> = document.querySelectorAll('.modal');

  [...registerModal].map(item => {
    item.classList.remove('modal--active');
    item.classList.add('modal--hidden');
    document.body.classList.remove('modal--open');
  });
}

function enableInputs(): void {
  const locationCategory = document.getElementById('location') as HTMLSelectElement;
  const address = document.getElementById('address') as HTMLInputElement;

  locationCategory.removeAttribute('disabled');
  address.removeAttribute('disabled');
}

function disableInputs(): void {
  const locationCategory = document.getElementById('location') as HTMLSelectElement;
  const address = document.getElementById('address') as HTMLInputElement;

  locationCategory.disabled = true;
  address.disabled = true;
}

function enableTelInput(): void {
  const telInput = document.getElementById('tel') as HTMLInputElement;

  if (telInput.disabled) telInput.disabled = false;
  else telInput.disabled = true;
}

export function openRegisterWindowListener(): void {
  const registerBtn = document.getElementById('register') as HTMLButtonElement;
  const registerSpan = document.getElementById('registerSpan') as HTMLSpanElement;
  const regBtn = document.querySelector('.login__btn-to-register') as HTMLButtonElement;

  registerBtn.addEventListener('click', showRegister);
  registerSpan.addEventListener('click', showRegister);
  regBtn.addEventListener('click', showRegister); 
}

export function closeModalWindowListener(): void {
  const modalClose: NodeListOf<Element> = document.querySelectorAll('.modal__close');

  [...modalClose].map(item => item.addEventListener('click', hideModal));
}

export function openLoginWindowListener(): void {
  const loginBtns: NodeListOf<Element> = document.querySelectorAll('.card__login-btn');
  const loginBtn = document.getElementById('login') as HTMLButtonElement;
  const helpBtn = document.getElementById('helpSpan') as HTMLButtonElement;
  const requestBtn = document.getElementById('requestSpan') as HTMLButtonElement;
  const registerBtn = document.querySelector('.register__btn-to-login') as HTMLButtonElement;
  // const cardBtn = document.querySelector('.card__login-btn') as HTMLButtonElement;

  [...loginBtns].map(btn => btn.addEventListener('click', showLogin));
  helpBtn.addEventListener('click', showLogin);
  requestBtn.addEventListener('click', showLogin);
  loginBtn.addEventListener('click', showLogin);
  registerBtn.addEventListener('click', showLogin);
  // cardBtn.addEventListener('click', showLogin);
}

export function createRequestListener(): void {
  const requestForm = document.getElementById('requestForm') as HTMLFormElement;

  requestForm.addEventListener('submit', getRequestFormData);
}

export function radioBtnListener(): void {
  const radioOfflineBtn = document.getElementById('offline') as HTMLInputElement;
  const radioOnlineBtn = document.getElementById('online') as HTMLInputElement;

  radioOfflineBtn.addEventListener('click', enableInputs);
  radioOnlineBtn.addEventListener('click', disableInputs);
}

export function renderUserPageRequests(): void {
  const requestsBtn = document.querySelector('.buttons-section__btn-requests') as HTMLButtonElement;
  
  requestsBtn.addEventListener('click', userPageRequests);
}

export function openUserRequestListener(): void {
  const openRequestBtn = document.querySelector('.buttons-section__btn-apply') as HTMLButtonElement;

  openRequestBtn.addEventListener('click', showRequest);
}

export function checkboxPhoneListener(): void {
  const phoneBtn = document.getElementById('phone') as HTMLInputElement;
  phoneBtn.addEventListener('click', enableTelInput);
}

export function addListeners(): void {
  openRegisterWindowListener();
  openLoginWindowListener();
  createRequestListener();
  closeModalWindowListener();
  radioBtnListener();
}

export function addUserListeners(): void {
  renderUserPageRequests();
  openUserRequestListener();
  closeModalWindowListener();
  checkboxPhoneListener();  
}

