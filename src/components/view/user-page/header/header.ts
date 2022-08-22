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
                <img class="header__logo-img" src='./img/Logo.png' alt="Logo">
              </div>
              <nav class="header__nav">
                <ul class="header__nav-list">
                  <li class="header__nav-item">Здравствуйте, Владимир!</li>
                  <li class="header__nav-item header__avatar">
                    <img class="header__avatar-img" src='./img/Владимир.png' alt="Avatar">
                    <ul class="header__submenu">
                      <li class="header__submenu-item"><a href="">Просмотреть</a></li>
                      <li class="header__submenu-item"><a href="">Редактировать</a></li>
                      <li class="header__submenu-item logout">
                        <a href="">Выйти</a>
                        <img src="./img/logout.png" alt="">
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>          
            </div>
          </div>`;
  }

  render() {
    this.wrapper.innerHTML = this.getHeader();
    this.wrapper.classList.add('header');
    return this.wrapper;
  }
}