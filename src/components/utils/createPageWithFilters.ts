import { dataUserApply } from '../model/fakeDatabase/userApply';
import { filterCategoryChosen, filterFormatChosen, filterCountryChosen } from './filters';
import { checkCategoryChosen, checkFormatChosen, checkCountryChosen } from './filters';
import { ApplyWithLogin } from '../model/type/type';

export default function getArrayWithAllFilters() {
  let arrayWithAllFilters: ApplyWithLogin[] = [];

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