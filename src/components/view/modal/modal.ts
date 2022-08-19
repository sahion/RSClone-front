export default class Modal {
  wrapper: HTMLDivElement;

  constructor() {
    this.wrapper = document.createElement('div');
  }

  getRegister(): string {
    return `<div class="modal modal-register modal--hidden">  
              <div class="modal__content modal-register__content">
                <div class="modal__header modal-register__header">
                  <span class="modal__title modal-register__title">Register</span>
                  <span class="modal__close modal-register__close">&times;</span>
                </div> 
                <form action="" class="modal__form modal-register__form">
                  <input type="text" class="modal__input register__email" placeholder="Enter your email">
                  <input type="text" class="modal__input register__username" placeholder="Choose a Username">
                  <input type="password" class="modal__input register__password" placeholder="Choose a Password">
                  <button class="modal__btn register__btn">Register</button>
                </form>
              </div>
            </div>`;
  }

  getLogin(): string {
    return `<div class="modal modal-login modal--hidden">
              <div class="modal__content modal-login__content">
                <div class="modal__header modal-login__header">
                  <span class="modal__title modal-login__title">Log In</span>
                  <span class="modal__close modal-login__close">&times;</span>
                </div> 
                <form action="" class="modal__form modal-login__form">
                  <input type="text" class="modal__input login__email" placeholder="Enter your email">
                  <input type="password" class="modal__input login__password" placeholder="Enter your Password">
                  <button class="modal__btn login__btn">Log In</button>
                </form>
              </div>
            </div>`;
  }

  getRequest(): string {
    return `<div class="modal modal-request modal--hidden">
              <div class="modal__content modal-request__content">
                <div class="modal__header modal-request__header">
                  <span class="modal__title modal-request__title">Request Form</span>
                  <span class="modal__close modal-request__close">&times;</span>
                </div>
                <form action="" class="modal__form modal-request__form">
                  <div class="select-category">
                    <h4 class="select-category__title">Category:</h4>
                    <select class="select" name="category" id="category">
                      <option value="" selected>Choose a category</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="emergency">Emergency</option>
                      <option value="veterans">Veterans and historical memory</option>
                      <option value="people">People with limited abilities</option>
                      <option value="children">Children and young people</option>
                      <option value="animals">Animals</option>
                      <option value="nature">Nature</option>
                      <option value="science">Science</option>
                      <option value="education">Education</option>
                      <option value="else">Else</option>
                    </select>
                  </div>
                  <div class="request-radio">
                    <h4 class="request-radio__title">Preferred Format:</h4>
                    <div class="request-radio__inputs">   
                      <label class="request-radio__inputs-label" for="online">
                        <input type="radio" name="format" id="online">Online
                      </label>        
                      <label class="request-radio__inputs-label" for="offline">
                        <input type="radio" name="format" id="offline">Offline
                      </label>
                    </div>
                  </div>
                  <div class="request-checkbox">
                    <h4 class="request-checkbox__title">Preferred Contact method:</h4>       
                    <div class="request-checkbox__inputs">
                      <label class="request-checkbox__inputs-label" for="phone">
                        <input type="checkbox" id="phone">Phone
                      </label>         
                      <label class="request-checkbox__inputs-label" for="email">
                        <input type="checkbox" id="email">Email
                      </label>        
                      <label class="request-checkbox__inputs-label" for="messenger">
                        <input type="checkbox" id="messenger">Messenger
                      </label>
                    </div>
                  </div>
                  <div class="request-location">
                    <h4 class="request-location__title">Location:</h4>
                    <select class="request-location__select" name="location" id="location">
                      <option value="" selected>Location</option>
                      <option value="belarus">Belarus</option>
                      <option value="russia">Russia</option>
                      <option value="ukraine">Ukraine</option>
                    </select>
                  </div>
                  <div class="request-textarea">
                    <h4 class="request-textarea__title">Write about your problem and what kind of help do you need</h4>
                    <textarea name="textarea" cols="80" rows="10" class="request-textarea__textarea" id="textarea">
                    </textarea>
                  </div>
                  <button class="modal__btn modal-request__btn">Create</button>
                </form>
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