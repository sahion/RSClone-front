export default class Modal {
  wrapper: HTMLDivElement;

  constructor() {
    this.wrapper = document.createElement('div');
  }

  getRegister(): string {
    return `<div class="modal modal-register modal--hidden">  
              <div class="modal__content modal-register__content">
                <div class="modal__header modal-register__header">
                  <span class="modal__title modal-register__title">Регистрация</span>
                  <span class="modal__close modal-register__close">&times;</span>
                </div> 
                <form action="" class="modal__form modal-register__form">
                  <input type="text" class="modal__input register__email"
                    placeholder="Введите ваш email" autocomplete="off">
                  <input type="text" class="modal__input register__username"
                    placeholder="Выберите Имя Пользователя" autocomplete="off">
                  <input type="password" class="modal__input register__password" placeholder="Выберите Пароль">
                  <input type="password" class="modal__input register__password-ok" placeholder="Подтвердите Пароль">
                  <div class="modal-register__btns">
                    <button class="btn modal__btn register__btn" type="submit">Зарегистрироваться</button>
                    <button class="btn modal__btn register__btn-to-login">Войти</button>
                  </div>
                </form>
              </div>
            </div>`;
  }

  getLogin(): string {
    return `<div class="modal modal-login modal--hidden">
              <div class="modal__content modal-login__content">
                <div class="modal__header modal-login__header">
                  <span class="modal__title modal-login__title">Вход</span>
                  <span class="modal__close modal-login__close">&times;</span>
                </div> 
                <form action="" class="modal__form modal-login__form">
                  <input type="text" class="modal__input login__email"
                    placeholder="Введите ваш email" autocomplete="off">
                  <input type="password" class="modal__input login__password" placeholder="Введите ваш Пароль">
                  <div class="modal__btns">
                    <button class="btn modal__btn login__btn" type="submit">Войти</button>
                    <button class="btn modal__btn login__btn-to-register">Зарегистрироваться</button>
                  </div>
                </form>
              </div>
            </div>`;
  }

  getRequest(): string {
    return `
    <div class="modal modal-request modal--hidden">
      <div class="modal__content modal-request__content">
        <div class="modal__header modal-request__header">
          <span class="modal__title modal-request__title">Заявка</span>
          <span class="modal__close modal-request__close">&times;</span>
        </div>
        <form action="" class="modal__form modal-request__form" id="requestForm">
          <div class="select-category">
            <h4 class="select-category__title">Категория:</h4>
            <div class="select-wrapper">
              <select class="select-category__select select" name="category" id="category">
                <option value="" selected disabled>Выберите категорию</option>
                <option value="healthcare">Здравоохранение</option>
                <option value="emergency">ЧС</option>
                <option value="veterans">Ветераны и историческая память</option>
                <option value="people">Люди с ОВС</option>
                <option value="children">Дети и подростки</option>
                <option value="animals">Животные</option>
                <option value="nature">Природа</option>
                <option value="science">Наука</option>
                <option value="education">Образование</option>
                <option value="else">Другое</option>
              </select>
            </div>
          </div>
          <div class="request-radio">
            <h4 class="request-radio__title">Формат проведения:</h4>
            <div class="request-radio__inputs">   
              <label class="request-radio__inputs-label" for="online">
                <input class="request-radio__inputs-input" type="radio" name="format" id="online" value="онлайн">
                <span class="request-radio__inputs-custom"></span>
                <span class="request-radio__inputs-span">Онлайн</span>
              </label>        
              <label class="request-radio__inputs-label" for="offline">
                <input class="request-radio__inputs-input" type="radio" name="format" id="offline" value="офлайн">
                <span class="request-radio__inputs-custom"></span>
                <span class="request-radio__inputs-span">Офлайн</span>
              </label>
            </div>
          </div>
          <div class="request-checkbox">
            <h4 class="request-checkbox__title">Предпочитаемый способ связи:</h4>       
            <div class="request-checkbox__inputs">
              <label class="request-checkbox__inputs-label" for="phone">
              <input class="request-checkbox__inputs-input" type="checkbox" id="phone" name="phone">
                <span class="request-checkbox__inputs-custom"></span>
                <span class="request-checkbox__inputs-span">Телефон</span>
              </label>         
              <label class="request-checkbox__inputs-label" for="email">
                <input class="request-checkbox__inputs-input" type="checkbox" id="email" name="email">
                <span class="request-checkbox__inputs-custom"></span>
                <span class="request-checkbox__inputs-span">Электронная почта</span>
              </label>        
              <label class="request-checkbox__inputs-label" for="messenger">
                <input class="request-checkbox__inputs-input" type="checkbox" id="messenger" name="messenger">
                <span class="request-checkbox__inputs-custom"></span>
                <span class="request-checkbox__inputs-span">Мессенджер</span>
              </label>
            </div>
          </div>
          <div class="request-location">
            <h4 class="request-location__title">Локация и дата оказания помощи:</h4>
            <div class="select-wrapper">
              <select class="request-location__select select" disabled name="location" id="location">
                <option value="country" selected disabled>Страна</option>
                <option value="belarus">Республика Беларусь</option>
                <option value="russia">Российская Федерация</option>
                <option value="ukraine">Украина</option>
              </select>
            </div>
            <input class="request-location__select-input" disabled name="address"
              type="text" placeholder="Адрес" autocomplete="off" id="address">
            <input class="request-location__select-input" name="time"
              type="text" placeholder="Дата и время" autocomplete="off" id="time">
          </div>
          <div class="request-textarea">
            <h4 class="request-textarea__title">Суть проблемы и необходимая помощь:</h4>
            <textarea name="textarea" cols="80" rows="10" class="request-textarea__textarea" id="textarea"></textarea>
          </div>
          <button class="btn modal__btn modal-request__btn" type="submit" id="createRequest">Создать</button>
        </form>
        <div class="modal__footer">
        <p class="modal__footer-text">
          Поля, отмеченные <span class="modal__footer-span">*</span>, обязательны для заполнения.
        </p>
      </div>
      </div>
    </div>`;   
  }

  render(): HTMLDivElement {
    this.wrapper.innerHTML += this.getRegister();
    this.wrapper.innerHTML += this.getLogin();
    this.wrapper.innerHTML += this.getRequest();
    this.wrapper.classList.add('modal-wrapper');
    return this.wrapper;
  }
}