import { ApplyWithLogin } from '../model/type/type';

export default function createDivItemCard(data: ApplyWithLogin[], index: number): HTMLElement {
  const div: HTMLDivElement = document.createElement('div');
  const location = data[index].location ? data[index].location : '-';
  div.id = `${data[index].login}`;
  div.className = 'card';
  div.innerHTML = `                   
                      <div class="card__header">
                        <div class="card__name">${data[index].login}</div>
                        <div class="card__avatar">
                          <img src=${data[index].avatar} alt="Avatar">
                        </div>
                      </div>
                      <div class="card__title">${data[index].description}</div>
                      <div class="card__info">
                        <ul>
                          <li><span class="card__span">Категория:</span> ${data[index].category}</li>
                          <li><span class="card__span">Формат:</span> ${data[index].format}</li>
                          <li><span class="card__span">Страна:</span> ${data[index].country}</li>
                          <li><span class="card__span">Адрес:</span> ${location}</li>
                        </ul>
                      </div>
                      <div class="card__btn">
                        <button class="btn card__login-btn">Помочь</button>
                      </div>`;
  return div;
} 