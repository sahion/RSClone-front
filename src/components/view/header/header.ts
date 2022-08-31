import logo from '../../assets/img/Logo.png';
import vladimirAva from '../../assets/img/Владимир.png';

export default class Header {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = document.createElement('header');
  }

  getHeader(): string {
    return `
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <a href="#"><img class="header__logo-img" src=${logo} alt="Logo"></a>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item"><a href="#requests">Успей помочь</a></li>
            <li class="header__nav-item"><a href="#thanks">Копилка добрых дел</a></li>
            <li class="header__nav-item"><a href="#info">Как это работает?</a></li>
          </ul>
        </nav>
        <div class="header__btns">
          <button class="btn header__login-btn color-btn" id="login">Вход</button>
          <button class="btn header__register-btn" id="register">Регистрация</button>
        </div>
      </div>
    </div>`;
  }

  getUserHeader(): string {
    return `
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
        <a href="#"><img class="header__logo-img" src=${logo} alt="Logo"></a>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">Здравствуйте, Владимир!</li>
            <li class="header__nav-item header__avatar">
              <img class="header__avatar-img" src=${vladimirAva} alt="Avatar">
              <ul class="header__submenu">
                <li class="header__submenu-item"><a href="">Редактировать</a></li>
                <li class="header__submenu-item header__logout">
                  <a class='logout' href="">Выйти</a>          
                </li>
              </ul>
            </li>
          </ul>
        </nav>          
      </div>
    </div>`;
  }

  render(page = 'main'): HTMLElement {
    switch (page) {
      case ('main'): {
        this.wrapper.innerHTML = this.getHeader();
        break;
      }
      case ('user'): {
        this.wrapper.innerHTML = this.getUserHeader();
        break;
      }
    }
    this.wrapper.classList.add('header');
    return this.wrapper;
  }
}