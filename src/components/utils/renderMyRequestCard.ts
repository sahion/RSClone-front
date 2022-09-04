import { ApplyWithUser } from '../model/type/type';
import { myApplies } from '../controller/dataHandlers/applyFilters';

function createDivMyRequestCard(data: ApplyWithUser[], index: number) {
  if (typeof data[index] === 'undefined') return;
  const div: HTMLDivElement = document.createElement('div');
  const location = data[index].location ? data[index].location : '-';
  let dateinfo = '-';
  if (data[index].date) {
    const date = String(data[index].date).split('t');    
    dateinfo = date[0];    
  } 
  //const date = data[index].date ? new Date(`${data[index].date}`) : '-';
  div.id = `${data[index].name}`;  
  div.className = 'card';
  
  div.innerHTML = `                  
        <div class="card__header"></div>
        <div class="card__title" title="${data[index].description}">${data[index].description}</div>                  
        <div class="card__info">
          <ul>
            <li><span class="card__span">Категория:</span> ${data[index].category}</li>
            <li><span class="card__span">Формат:</span> ${data[index].format}</li>
            <li><span class="card__span">Страна:</span> ${data[index].country}</li>
            <li><span class="card__span">Адрес:</span> ${location}</li>
            <li><span class="card__span">Дата:</span> ${dateinfo}</li>
          </ul>
        </div>
        <div class="card__btn">
          <button class="btn color-btn my-requests__close">Закрыть заявку</button>
        </div>                
      `;
  return div;
} 

export default function getPageMyRaquests() {
  const cardRequests = document.querySelector('.card-requests') as HTMLButtonElement;
  console.log(myApplies);
  if (myApplies.length === 0) cardRequests.innerHTML = 'У вас пока нет заявок. Нажмите на + для добавления.';
  for (let i = 0; i < myApplies.length; i++) {              
    const div = createDivMyRequestCard(myApplies, i);
    if (div) cardRequests.appendChild(div); 
  }
}