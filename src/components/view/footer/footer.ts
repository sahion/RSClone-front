import logo from '../../assets/img/logo.svg';

export default class Footer {
  wrapper: HTMLElement;

  constructor() {
    this.wrapper = document.createElement('footer');
  }

  getFooter(): string {
    return `
    <footer class="footer">
      <a class="footer__link" href="https://rs.school/js/">
        <img src=${logo} width="140" alt="logo">
      </a>
      <a class="footer__link" href="#">Авторы</a>      
      <p>2022</p>
    </footer>`;
  }

  render() {
    this.wrapper.innerHTML = this.getFooter();
    this.wrapper.classList.add('footer');
    return this.wrapper;
  }
}