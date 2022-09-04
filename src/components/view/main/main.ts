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
        <h1 class="welcome-section__title">Мы уверены - доброта <br> скрывается внутри каждого из нас</h1>
        <p class="welcome-section__text">
          Оказывается так просто отыскать и подарить её тому, <br> кто в ней нуждается.
        </p>
      </div>
    </section>`;
  }

  getRequestSection(): string {
    return `
    <section class="requests-section main-request-section" id="requests">
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
            <button class="btn my-requests__btn my-requests__edit">
              <img src=${pen} alt="">
            </button>                
            <button class="btn my-requests__btn my-requests__close">&times;</button>
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
            <button class="btn my-requests__btn my-requests__edit">
              <img src=${pen} alt="">
            </button>                
            <button class="btn my-requests__btn my-requests__close">&times;</button>
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
      <button class="btn buttons-section__btn-requests-history">История заявок</button>
      <div class="buttons-section__btn-requests__div"> 
        <button class="btn buttons-section__btn-requests color-btn">Помочь</button>
      </div>
    </section>`;
  }

  getWrapper(): string {
    return `
      <div class="user-section__wrapper">
        <div class="user-section__wrapper__frame8"></div>
        <div class="side-menu">
          <span class="side-menu__span">Показать фильтры</span>
        </div>
        ${this.getUserFiltersSection()}
        ${this.getUsersRequestsSection()}
      </div>
    `;
  }

  getUserWrapper(): string {
    return `
      <div class="user-section-main__wrapper">        
        <div class="side-menu">
          <span class="side-menu__span">Меню</span>
        </div>
        ${this.getUserMenuSection()}
        ${this.getUsersMain()}        
      </div>
    `;
  }

  getUserFiltersSection(): string {
    return ` 
    <section class="filters-section">
        <div class="filters-section__filters">
          <div class="filters-section__format">
            <h5 class="filters-section__title format__title">Выбрать формат</h5>
            <div class="filters-section__body">
              <button class="filters-section__btn ofline">Офлайн</button>
              <button class="filters-section__btn online">Онлайн</button>
            </div>
          </div>
          <div class="filters-section__country">
            <h5 class="filters-section__title country__title">Выбрать страну</h5>
            <div class="filters-section__body">
              <button class="filters-section__btn belarus">Беларусь</button>
              <button class="filters-section__btn russia">Россия</button>
              <button class="filters-section__btn ukraine">Украина</button>
            </div>
          </div>
          <div class="filters-section__category">
            <h5 class="filters-section__title category__title">Выбрать категорию</h5>
            <div class="filters-section__body">
              <button class="filters-section__btn healthcare">Здравоохранение</button>
              <button class="filters-section__btn emergency">ЧС</button>
              <button class="filters-section__btn veterans">Пенсионеры</button>
              <button class="filters-section__btn сhildren">Дети</button>
              <button class="filters-section__btn invalid">Люди с ОВС</button>
              <button class="filters-section__btn science">Наука</button>
              <button class="filters-section__btn animal">Животные</button>
              <button class="filters-section__btn nature">Природа</button>
              <button class="filters-section__btn education">Образование</button>
              <button class="filters-section__btn other">Другое</button>
            </div>
          </div>
        </div>

    </section>`;
  }

  getUserMenuSection(): string {
    return ` 
    <section class="menu-section">
      <div class="menu-section__filters">
        <div class="menu-section__country">
          <div class="menu-section__body">
            <button class="menu-section__btn buttons-section__btn-requests">Все заявки</button>
            <button class="menu-section__btn my-requests-btn">Мои заявки</button>
            <button class="menu-section__btn my-thanks-btn">Благодарности</button>
            <button class="menu-section__btn my-responds-btn">Мои отклики</button>
            <button class="menu-section__btn thanks-section-btn">Рейтинг</button>
          </div>
        </div>
      </div>
    </section>`;
  }

  getUsersRequestsSection(): string {
    return `
    <section class="container requests-section"> 
      <div class="requests-section__cards">

      </div>  
    </section>`;
  }

  getUsersMain(): string {
    return `
    <section class="container users-main-section"> 
      <div class="users-main-section__content">
        <h5 class="users-main-section__title">Один-единственный добрый поступок 
        <br>пускает корни во все стороны, 
        <br>и из этих корней вырастают 
        <br>новые деревья!</h5>
      </div> 
      <div class="users-main-section__frame9"></div>
      <div class="users-main-section__frame10"></div> 
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
        this.wrapper.innerHTML += this.getUserWrapper();             
        break;        
      }
    }    
    return this.wrapper;    
  }
}