import { filterCategoryChosen, filterFormatChosen, filterCountryChosen } from './filters';
import { checkCategoryChosen, checkFormatChosen, checkCountryChosen } from './filters';

import { ApplyWithUser } from '../model/type/type';
import { getUsers } from '../model/api/users';
import { getApplies } from '../model/api/applies';
//import { UserVisualData } from '../model/type/User';
import { createAppliesWithUser } from '../controller/dataHandlers/createAppliesWithUser';
//import { Apply } from '../model/type/type';

let dataUserApply: ApplyWithUser[];
const users = await getUsers();
const applies =  await getApplies();
if (users instanceof Array && applies instanceof Array) {
  dataUserApply = createAppliesWithUser(users, applies);
}

export default function getArrayWithAllFilters() {
  let arrayWithAllFilters: ApplyWithUser[] = [];

  function getarrayNameFilters<T>(filterChosen: T) {
    for (const myProp in filterChosen) {
      const key = myProp as keyof typeof filterChosen; 
      if (filterChosen[key]) {        
        (document.querySelector(`.${String(key)}`) as HTMLElement).classList.add('color-btn');
      }
    }
  }
  getarrayNameFilters(filterCategoryChosen);
  getarrayNameFilters(filterFormatChosen);
  getarrayNameFilters(filterCountryChosen);

  const arrayWithCategoryFilters = checkCategoryChosen(dataUserApply);
  const arrayWithFormatFilters = checkFormatChosen(arrayWithCategoryFilters);
  arrayWithAllFilters = checkCountryChosen(arrayWithFormatFilters);
  return arrayWithAllFilters;
}