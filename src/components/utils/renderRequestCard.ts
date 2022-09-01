import { ApplyWithUser } from '../model/type/type';

export default function createDivItemCard(data: ApplyWithUser[], index: number, page: string) {
  if (typeof data[index] === 'undefined') return;
  const div: HTMLDivElement = document.createElement('div');
  const location = data[index].location ? data[index].location : '-';
  div.id = `${data[index].name}`;
  
  if (page === 'main') div.className = 'card';
  else div.className = 'card requests-section__card';

  div.innerHTML = `                   
                      <div class="card__header">
                        <div class="card__name">${data[index].name}</div>
                        <div class="card__avatar">
                          <img src=${data[index].avatar} alt="Avatar">
                        </div>
                      </div>
                      <div class="card__title" title="${data[index].description}">${data[index].description}</div>
                      <div class="card__info">
                        <ul>
                          <li><span class="card__span">Категория:</span> ${data[index].category}</li>
                          <li><span class="card__span">Формат:</span> ${data[index].format}</li>
                          <li><span class="card__span">Страна:</span> ${data[index].country}</li>
                          <li><span class="card__span">Адрес:</span> ${location}</li>
                        </ul>
                      </div>
                      <div class="card__btn">
                        <button class="btn card__login-btn color-btn">Помочь</button>
                      </div>`;
  return div;
} 