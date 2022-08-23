import logo from '../../../assets/img/Logo.png';
import vladimirAva from '../../../assets/img/Владимир.png';

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
                  <li class="header__nav-item">Здравствуйте, Владимир!</li>
                  <li class="header__nav-item header__avatar">
                    <img class="header__avatar-img" src=${vladimirAva} alt="Avatar">
                    <ul class="header__submenu">
                      <li class="header__submenu-item"><a href="">Просмотреть</a></li>
                      <li class="header__submenu-item"><a href="">Редактировать</a></li>
                      <li class="header__submenu-item logout">
                        <a href="">Выйти</a>
                        
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