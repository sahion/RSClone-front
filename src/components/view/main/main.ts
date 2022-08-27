import { userThanks } from '../../model/fakeDatabase/userThanks';
import pen from '../../assets/img/pen.png';

export default class Main {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = document.createElement('main');
  }

  getWelcomeSection(): string {
    return `
    <section class="welcome-section">
      <div class="welcome-section__frame1"></div>
      <div class="welcome-section__frame2"></div>
      <div class="container">
        <h2 class="welcome-section__title">Мы уверены - доброта <br> скрывается внутри каждого из нас</h2>
        <p>Оказывается так просто отыскать и подарить её тому, <br> кто в ней нуждается.</p>
      </div>
    </section>`;
  }

  getRequestSection(): string {
    return `
    <section class="requests-section" id="requests">
      <div class="container">
        <div class="slider">
          <button class="btn slider__btn prev">←</button>
          <div class="slider__wrapper">
            <div class="slider__items">
              <div class="slider__item-left"></div>
              <div class="slider__item-active"></div>
              <div class="slider__item-right"></div>
            </div>
          </div> 
          <button class="btn slider__btn next">→</button>
        </div>
        <p>... успей им помочь</p>
        <div class="slider__frame3"></div>
      </div>
    <section>`;
  }

  renderThanksCard(name: string, avatar: string, body: string, target: string, targetAvatar: string): string {
    return `
    <div class="card thanks-card">
      <div class="card__header thanks-card__header">              
        <div class="card__avatar thanks-card-to__avatar">
          <img src=${targetAvatar} alt="Avatar">
        </div>
        <p><span class="card__name thanks-card-to__name">${target}, </span>спасибо за</p>
      </div>
      <div class="card__title thanks-card__title">${body}</div>
      <div class="card__footer thanks-card__footer">
        <div class="thanks-card-from__name">${name}</div>
        <div class="thanks-card-from__avatar">
          <img src=${avatar} alt="Avatar">
        </div>
      </div>        
    </div>`;
  }

  getThanksSection(): string {
    return `
    <section class="thanks-section" id="thanks">
      <h2 class="thanks-section__title">Копилка добрых дел </h2>
      <button class="btn thanks-section__btn">Лучшие вoлoнтеры</button>
      <div class="thanks-section__cards">
        ${userThanks.map(item =>
    this.renderThanksCard(item.name, item.avatar, item.body, item.target, item.targetAvatar)).join('')}      
      </div>        
      <div class="thanks-section__frame4"></div>        
      </section>
    `;
  }

  getInfoSection(): string {
    return ` 
    <section class="info-section" id="info">
      <h2 class="info-section__title">Все просто:</h2>
      <ol class="info-list">
        <li class="info-list__item">
          1. Пройди регистрацию <span class="info-list__item-span" id="registerSpan">ТУТ</span>
        </li>
        <li class="info-list__item">
          2. Если твое сердце открыто для помощи - 
          нажимай <span class="info-list__item-span" id="helpSpan">"Помочь"</span>
          <br> И мы мгновенно доставим письмо-предложение о помощи получателю.
        </li>
        <li class="info-list__item">
          3. Если тебе самому нужна помощь - 
          жми <span class="info-list__item-span" id="requestSpan">"Новая заявка"</span>
        </li>
        <li class="info-list__item" style="font-size: 16px;">
          ВАЖНО! вся помощь оказывается на безвозмездной основе
        </li>
      </ol>
      <div class="info-section__frame5"></div>
    </section>`;
  }

  getUserRequestsSection(): string {
    return `
    <section class="my-requests">
    <div class="my-requests__frame6"></div>
    <div class="container">
      <h3 class="my-requests__title">Мои заявки:</h3>
      <div class="card-requests">            
        <div class="card">
          <div class="card__header"></div>
          <div class="card__title">
            Прошу, может кто сможет передать продукты в 1 больницу. 
            Все расходы готов оплатить. Буду очень благодарен.
          </div>
          <div class="card__info">
            <ul>
              <li><span class="card__span">Категория</span>: другое</li>
              <li><span class="card__span">Адрес:</span> г.Минск, пр. Независимости, д.64</li>
            </ul>
          </div>
          <div class="card__btn">
            <button class="btn my-requests__btn">
              <img src=${pen} alt="">
            </button>                
            <button class="btn my-requests__btn">&times;</button>
          </div>                
        </div>
        <div class="card">
          <div class="card__header"></div>
          <div class="card__title">
            Прошу, может кто сможет передать продукты в 1 больницу. 
            Все расходы готов оплатить. Буду очень благодарен.
          </div>
          <div class="card__info">
            <ul>
              <li><span class="card__span">Категория</span>: другое</li>
              <li><span class="card__span">Адрес:</span> г.Минск, пр. Независимости, д.64</li>
            </ul>
          </div>
          <div class="card__btn">
            <button class="btn my-requests__btn">
              <img src=${pen} alt="">
            </button>                
            <button class="btn my-requests__btn">&times;</button>
          </div>                
        </div>
      </div>
    </div>        
  </section>`;
  }

  getUserButtonsSection(): string {
    return `
    <section class="buttons-section">
      <div class="buttons-section__frame7"></div>
      <button class="btn buttons-section__btn-apply">Новая заявка</button>
      <button class="btn buttons-section__btn-requests color-btn">Помочь</button>
      <button class="btn buttons-section__btn-requests">История заявок</button>
    </section>`;
  }

  getUserFiltersSection(): string {
    return ` 
    <a href="user.html">
      <button class="btn">Назад</button>
    </a>
    <section class="filters-section">
      <div class="container">
        <details class="filters-section__details filters">
          <summary class="filters-section__summary">Фильтры</summary>
          <p>
            <details class="filters-section__details format">
              <summary class="filters-section__summary">Выбрать формат</summary>
              <p>
                <button class="filters-section__btn online">Онлайн</button>
                <button class="filters-section__btn ofline">Офлайн</button>
              </p>                
            </details>
            <details class="filters-section__details country">
              <summary class="filters-section__summary">Выбрать страну</summary>
              <p>
                <button class="filters-section__btn belarus">Республика Беларусь</button>
                <button class="filters-section__btn russia">Российская Федерация</button>
                <button class="filters-section__btn ukraine">Украина</button>
              </p>
            </details>
            <details class="filters-section__details category">
              <summary class="filters-section__summary">Выбрать категорию</summary>
              <p>
                <button class="filters-section__btn healthcare">Здравоохранение</button>
                <button class="filters-section__btn emergency">ЧС</button>
                <button class="filters-section__btn veterans">Ветераны и историческая память</button>
                <button class="filters-section__btn invalid">Люди с ОВС</button>
                <button class="filters-section__btn сhildren">Дети и подростки</button>
                <button class="filters-section__btn animal">Животные</button>
                <button class="filters-section__btn nature">Природа</button>
                <button class="filters-section__btn science">Наука</button>
                <button class="filters-section__btn education">Образование</button>
                <button class="filters-section__btn other">Другое</button>
              </p>
            </details>
          </p>
        </details>
        </div>
      <div class="filters-section__frame8"></div>
    </section>`;
  }

  getUsersRequestsSection(): string {
    return `
    <section class="container requests-section"> 
      <div class="requests-section__cards">

      </div>  
    </section>`;
  }

  getUserPaginationBtnsSection(): string {
    return `
    <section class="pagination-btns-section">
      <div class="pagintaion-btns-section__navigation">
        <button class="btn pagination-btns-section__btn start-page no-active">&lt; &lt;</button>
        <button class="btn pagination-btns-section__btn prev no-active">&lt;</button>
        <button class="btn pagination-btns-section__btn page">1</button>
        <button class="btn pagination-btns-section__btn next">></button>
        <button class="btn pagination-btns-section__btn end-page">> ></button>
      </div>
      <a href="user.html">
        <button class="btn">Назад</button>
      </a> 
    </section>`;
  }

  render(page = 'main'): HTMLElement {
    switch (page) {
      case ('main'): {
        this.wrapper.innerHTML += this.getWelcomeSection();
        this.wrapper.innerHTML += this.getRequestSection();
        this.wrapper.innerHTML += this.getThanksSection();
        this.wrapper.innerHTML += this.getInfoSection();
        break;
      }
      case ('user'): {
        this.wrapper.innerHTML += this.getUserRequestsSection();
        this.wrapper.innerHTML += this.getUserButtonsSection();        
        break;        
      }
    }    
    return this.wrapper;    
  }
}