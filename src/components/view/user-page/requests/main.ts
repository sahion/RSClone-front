import vladimirAva from '../../../assets/img/Владимир.png';
import elenaAva from '../../../assets/img/Елена.png';
import svetlanaAva from '../../../assets/img/Светлана.png';

export default class Main {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = document.createElement('main');
  }

  filtersSection(): string {
    return `
            <section class="container filters-section">
              <div class="filters-section">
                <div class="format">
                  <button class="requests-section__btn">Онлайн</button>
                  <button class="requests-section__btn">Офлайн</button>
                </div>
                <div class="country">
                  <button class="requests-section__btn">Республика Беларусь</button>
                  <button class="requests-section__btn">Российская Федерация</button>
                  <button class="requests-section__btn">Украина</button>
                </div>
                <div class="category">
                  <button class="requests-section__btn">Здравоохранение</button>
                  <button class="requests-section__btn">ЧС</button>
                  <button class="requests-section__btn">Ветераны и историческая память</button>
                  <button class="requests-section__btn">Люди с ОВС</button>
                  <button class="requests-section__btn">Дети и подростки</button>
                  <button class="requests-section__btn">Животные</button>             
                  <button class="requests-section__btn">Природа</button>
                  <button class="requests-section__btn">Наука</button>
                  <button class="requests-section__btn">Образование</button>
                  <button class="requests-section__btn">Другое</button>
                </div>
                <div class="frame8"></div>
              </div>
            </section>`;
  }

  requestsSection() {
    return `
            <section class="container requests-section"> 
              <div class="requests-cards">
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Владимир</div>
                    <div class="card__avatar">
                      <img src=${vladimirAva} alt="Avatar">
                    </div>
                  </div>
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
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Елена</div>
                    <div class="card__avatar">
                      <img src=${elenaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Ребята, мужчины, каждое воскресенье еду с дачи с полными сумками. 
                    Может кто может помочь их поднести хотябы до метро...
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория</span>: пожелые люди</li>
                      <li><span class="card__span">Адрес:</span> Ж/д вокзал Минск</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
                <div class="card">
                  <div class="card__header">
                    <div class="card__name">Светлана</div>
                    <div class="card__avatar">
                      <img src=${svetlanaAva} alt="Avatar">
                    </div>
                  </div>
                  <div class="card__title">
                    Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.
                  </div>
                  <div class="card__info">
                    <ul>
                      <li><span class="card__span">Категория:</span> наука</li>
                      <li><span class="card__span">Адрес:</span> онлайн</li>
                    </ul>
                  </div>
                  <div class="card__btn">
                    <button class="btn card__login-btn">Помочь</button>
                  </div>                
                </div>
              </div>  
            </section>`;
  }

  buttonsSection(): string {
    return `
            <section class="buttons-section">
              <div class="buttons-section__navigation">
                <button class="btn circle-btn start-page no-active">&lt; &lt;</button>
                <button class="btn circle-btn prev no-active">&lt;</button>
                <button class="btn circle-btn page">1</button>
                <button class="btn circle-btn next">></button>
                <button class="btn circle-btn end-page">> ></button>
              </div>
              <button class="btn buttons-section__btn">Назад</button>
            </section>`;
  }

  render(): HTMLElement {
    this.wrapper.innerHTML += this.filtersSection();
    this.wrapper.innerHTML += this.requestsSection();
    this.wrapper.innerHTML += this.buttonsSection();
    return this.wrapper;
  }
}