import logo from '../../../assets/img/Logo.png';

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
                  <img class="header__logo-img" src=${logo} alt="Logo">
                </div>
                <nav class="header__nav">
                  <ul class="header__nav-list">
                    <li class="header__nav-item"><a href="#requests">Успей помочь</a></li>
                    <li class="header__nav-item"><a href="#thanks">Копилка добрых дел</a></li>
                    <li class="header__nav-item"><a href="#info">Как это работает?</a></li>
                  </ul>
                </nav>
                <div class="header__btns">
                  <button class="btn header__login-btn" id="login">Вход</button>
                  <button class="btn header__register-btn" id="register">Регистрация</button>
                </div>
              </div>
            </div>`;
  }

  render() {
    this.wrapper.innerHTML = this.getHeader();
    this.wrapper.classList.add('header');
    return this.wrapper;
  }
}