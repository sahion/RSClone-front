import { dataUserApply } from '../model/fakeDatabase/userApply';
import { ApplyWithLogin, Category, Format, Country } from '../model/type/type';
import createDivItemCard from './renderRequestCard';

const filterCategoryChosen = {
  healthcare: false,
  emergency: false,
  veterans: false,
  invalid: false,
  сhildren: false,
  animal: false,
  nature: false,
  science: false,
  education: false,
  other: false,
};
const filterFormatChosen = {
  online: false,
  ofline: false,
};
const filterCountryChosen = {
  belarus: false,
  russia: false,
  ukraine: false,
};

function checkFormatChosen(array: ApplyWithLogin[]) {
  let arrayWithFormatFilters: ApplyWithLogin[] = [];
  if (filterFormatChosen.online && filterFormatChosen.ofline) return array;
  if (!filterFormatChosen.online && !filterFormatChosen.ofline) return array;
  if (filterFormatChosen.online) {
    arrayWithFormatFilters = arrayWithFormatFilters.concat(array.filter(el => el.format === Format.online)); 
  }
  if (filterFormatChosen.ofline) {
    arrayWithFormatFilters = arrayWithFormatFilters.concat(array.filter(el => el.format === Format.ofline)); 
  }
  return arrayWithFormatFilters; 
}

function checkCountryChosen(array: ApplyWithLogin[]) {
  if (!filterCountryChosen.belarus && !filterCountryChosen.russia && !filterCountryChosen.ukraine) {
    return array;
  } else {
    let arrayCountryChosen: ApplyWithLogin[] = [];
    if (filterCountryChosen.belarus) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.belarus)); 
    }
    if (filterCountryChosen.russia) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.russia)); 
    }
    if (filterCountryChosen.ukraine) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.ukraine)); 
    }
    return arrayCountryChosen;
  }
}
function checkCategoryChosen(array: ApplyWithLogin[]) {
  let arrayNameFilters: string[] = [];
  for (const myProp in filterCategoryChosen) {
    const key = myProp as keyof typeof filterCategoryChosen; 
    if (filterCategoryChosen[key]) arrayNameFilters = arrayNameFilters.concat(key);
  }
  if (arrayNameFilters.length === 0) return array;
  const arrayWithCategoryFilters = array.filter(elem => {
    const arrayString = arrayNameFilters.map(el => {
      const key = el as keyof typeof Category;
      return String(Category[key]);
    });
    return arrayString.includes(elem.category);
  });
  return arrayWithCategoryFilters;
}

export default function getFilter(e: Event) {
  const healthcare = document.querySelector('.healthcare') as HTMLElement;
  const emergency = document.querySelector('.emergency') as HTMLElement;
  const veterans = document.querySelector('.veterans') as HTMLElement;
  const invalid = document.querySelector('.invalid') as HTMLElement;
  const сhildren = document.querySelector('.сhildren') as HTMLElement; 
  const animal = document.querySelector('.animal') as HTMLElement;
  const nature = document.querySelector('.nature') as HTMLElement;
  const science = document.querySelector('.science') as HTMLElement;
  const education = document.querySelector('.education') as HTMLElement;
  const other = document.querySelector('.other') as HTMLElement; 

  const online = document.querySelector('.online') as HTMLElement;
  const ofline = document.querySelector('.ofline') as HTMLElement;

  const belarus = document.querySelector('.belarus') as HTMLElement;
  const russia = document.querySelector('.russia') as HTMLElement;
  const ukraine = document.querySelector('.ukraine') as HTMLElement;

  const requestsCards = document.querySelector('.requests-section__cards') as HTMLElement;
  requestsCards.innerHTML = '';
  switch (e.target) {
    case healthcare:
      filterCategoryChosen.healthcare = filterCategoryChosen.healthcare ? false : true;
      healthcare.classList.toggle('color-btn');
      break;
    case emergency:
      filterCategoryChosen.emergency = filterCategoryChosen.emergency ? false : true;
      emergency.classList.toggle('color-btn');
      break;
    case veterans:
      filterCategoryChosen.veterans = filterCategoryChosen.veterans ? false : true;
      veterans.classList.toggle('color-btn');
      break;
    case invalid:
      filterCategoryChosen.invalid = filterCategoryChosen.invalid ? false : true;
      invalid.classList.toggle('color-btn');
      break;
    case сhildren:
      filterCategoryChosen.сhildren = filterCategoryChosen.сhildren ? false : true;
      сhildren.classList.toggle('color-btn');
      break;
    case animal:
      filterCategoryChosen.animal = filterCategoryChosen.animal ? false : true;
      animal.classList.toggle('color-btn');
      break;    
    case nature:
      filterCategoryChosen.nature = filterCategoryChosen.nature ? false : true;
      nature.classList.toggle('color-btn');
      break;
    case science:
      filterCategoryChosen.science = filterCategoryChosen.science ? false : true;
      science.classList.toggle('color-btn');
      break;
    case education:
      filterCategoryChosen.education = filterCategoryChosen.education ? false : true;
      education.classList.toggle('color-btn');
      break;    
    case other:
      filterCategoryChosen.other = filterCategoryChosen.other ? false : true;
      other.classList.toggle('color-btn');
      break;
    case online:
      filterFormatChosen.online = filterFormatChosen.online ? false : true;
      online.classList.toggle('color-btn');
      break;
    case ofline:
      filterFormatChosen.ofline = filterFormatChosen.ofline ? false : true;
      ofline.classList.toggle('color-btn');
      break;
    case belarus:
      filterCountryChosen.belarus = filterCountryChosen.belarus ? false : true;
      belarus.classList.toggle('color-btn');
      break;    
    case russia:
      filterCountryChosen.russia = filterCountryChosen.russia ? false : true;
      russia.classList.toggle('color-btn');
      break;
    case ukraine:
      filterCountryChosen.ukraine = filterCountryChosen.ukraine ? false : true;
      ukraine.classList.toggle('color-btn');
      break;
  }
  
  let arrayWithAllFilters: ApplyWithLogin[] = [];
  console.log(arrayWithAllFilters);
  if (e.target === online || e.target === ofline) {
    const arrayWithFormatFilters = checkFormatChosen(dataUserApply);
    const arrayWithCountryFilters = checkCountryChosen(arrayWithFormatFilters);
    arrayWithAllFilters = checkCategoryChosen(arrayWithCountryFilters);
  } else if (e.target === russia || e.target === belarus || e.target === ukraine) {
    const arrayWithCountryFilters = checkCountryChosen(dataUserApply);
    const arrayWithFormatFilters = checkFormatChosen(arrayWithCountryFilters);
    arrayWithAllFilters = checkCategoryChosen(arrayWithFormatFilters);
  } else {
    const arrayWithCategoryFilters = checkCategoryChosen(dataUserApply);
    const arrayWithFormatFilters = checkFormatChosen(arrayWithCategoryFilters);
    arrayWithAllFilters = checkCountryChosen(arrayWithFormatFilters);
  }
  console.log(arrayWithAllFilters);
  
  for (let index = 0; index < arrayWithAllFilters.length; index++) {
    const div = createDivItemCard(arrayWithAllFilters, index);
    requestsCards.appendChild(div); 
  }
}