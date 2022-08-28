import { dataUserApply } from '../model/fakeDatabase/userApply';
import createDivItemCard from './renderRequestCard';
function cons() {
  console.log('modal');
}
export default function carousel() {
  const cards = document.querySelector('.slider__items') as HTMLElement;
  const ITEM_LEFT = document.querySelector('.slider__item-left') as HTMLElement;
  const ITEM_ACTIVE = document.querySelector('.slider__item-active') as HTMLElement;
  const ITEM_RIGHT = document.querySelector('.slider__item-right') as HTMLElement;
  const BTN_LEFT = document.querySelector('.prev') as HTMLElement;
  const BTN_RIGHT = document.querySelector('.next') as HTMLElement;
  let currentIndex = 0;
  let cardsOnPage: number;

  if (window.matchMedia('(max-width: 767px)').matches) {
    cardsOnPage = 1; 
  } else if (window.matchMedia('(max-width: 1279px)').matches) {
    cardsOnPage = 2;
  } else {
    cardsOnPage = 3;
  }
  
  function createCards(index: number) {    
    for (index; index < cardsOnPage; index++) {
      const divLeft = createDivItemCard(dataUserApply, index);
      ITEM_LEFT.appendChild(divLeft); 
      const divActiv = createDivItemCard(dataUserApply, index + cardsOnPage);
      ITEM_ACTIVE.appendChild(divActiv);
      const divRight = createDivItemCard(dataUserApply, index + (cardsOnPage * 2));
      ITEM_RIGHT.appendChild(divRight);       
    } 
    const helpBtns: NodeListOf<Element> = document.querySelectorAll('.card__login-btn');
    [...helpBtns].map(item => item.addEventListener('click', cons));  
  }
  createCards(0);

  const moveLeft = () => { 
    cards.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    //BTN_RIGHT.removeEventListener('click', moveRight);
  };
  const moveRight = () => {      
    cards.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
  }; 

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);

  cards.addEventListener('animationend', (animationEvent) => {
    let cardsWhile = cardsOnPage;
    
    if (animationEvent.animationName === 'move-left') {      
      cards.classList.remove('transition-left');      
      ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;      
      ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
      ITEM_LEFT.innerHTML = '';
      while (cardsWhile) {
        if (currentIndex === 0) currentIndex = dataUserApply.length - 1;
        const div = createDivItemCard(dataUserApply, currentIndex);
        ITEM_LEFT.appendChild(div);
        currentIndex--;
        cardsWhile--;
        const helpBtns: NodeListOf<Element> = document.querySelectorAll('.card__login-btn');
        [...helpBtns].map(item => item.addEventListener('click', cons));  
      }
    } else {
      if (currentIndex === 0) currentIndex = cardsOnPage * 3;       
      cards.classList.remove('transition-right');      
      ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
      ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;     
      ITEM_RIGHT.innerHTML = '';     
      while (cardsWhile) {   
        if (currentIndex === dataUserApply.length) currentIndex = 0;     
        const div = createDivItemCard(dataUserApply, currentIndex);
        ITEM_RIGHT.appendChild(div);
        currentIndex++;
        cardsWhile--;
        const helpBtns: NodeListOf<Element> = document.querySelectorAll('.card__login-btn');
        [...helpBtns].map(item => item.addEventListener('click', cons));  
      }
    }    
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);   
    return currentIndex;  
  });
}
