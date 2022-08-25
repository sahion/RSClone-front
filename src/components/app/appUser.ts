import { addListeners } from '../controller/listeners/listenersUser';
import Footer from '../view/footer/footer';
import Header from '../view/main-page/header/header';
import Main from '../view/main-page/main/main';
import MainRequests from '../view/user-page/requests/main';
import Modal from '../view/modal/modal';

export default class AppUser {
  body: HTMLElement;  

  header: Header;

  main: Main;

  mainRequests: MainRequests;

  footer: Footer;

  constructor() {
    this.body = document.body;
    this.header = new Header();
    this.main = new Main();
    this.mainRequests = new MainRequests();
    this.footer = new Footer();
  }

  init(): HTMLElement {
    const modals: HTMLDivElement = new Modal().render();
    this.body.append(modals);
    this.body.append(this.header.render('user'));
    this.body.append(this.main.render('user'));
    this.body.append(this.footer.render());
    addListeners();
    return this.body;
  }
}