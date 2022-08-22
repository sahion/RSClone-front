export default class Main {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = document.createElement('main');
  }

  myRequests(): string {
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
                    <button class="btn circle-btn">
                      <img src="./img/pen.png" alt="">
                    </button>                
                    <button class="btn circle-btn">                  
                      <span class="modal__close">&times;</span>
                    </button>
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
                    <button class="btn circle-btn">
                      <img src="./img/pen.png" alt="">
                    </button>                
                    <button class="btn circle-btn">                  
                      <span class="modal__close">&times;</span>
                    </button>
                  </div>                
                </div>
              </div>
            </div>        
          </section>`;
  }

  buttonsSection() {
    return `
            <section class="buttons-section">
              <div class="my-requests__frame7"></div>
              <button class="btn buttons-section__btn-apply color-btn long">Оставить заявку</button>
              <button class="btn buttons-section__btn-requests">Помочь</button>
            </section>`;
  }


  render(): HTMLElement {
    this.wrapper.innerHTML += this.myRequests();
    this.wrapper.innerHTML += this.buttonsSection();
    return this.wrapper;
  }
}