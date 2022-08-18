import { addListeners } from '../controller/listeners/listeners';
import Modal from '../view/modal/modal';

export default class App {
  body: HTMLElement;

  constructor() {
    this.body = document.body;
  }

  init(): HTMLElement {
    const modals: HTMLDivElement = new Modal().render();
    this.body.append(modals);
    addListeners();
    return this.body;
  }
}