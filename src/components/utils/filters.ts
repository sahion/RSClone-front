import { dataUserApply } from '../model/fakeDatabase/userApply';
import { ApplyWithLogin, Format, Country } from '../model/type/type';


const filterChosen = {
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

  online: false,
  ofline: false,

  belarus: false,
  russia: false,
  ukraine: false,
};

function checkFormatChosen(array: ApplyWithLogin[]) {
  let arrayWithFormatFilters: ApplyWithLogin[] = [];
  if (filterChosen.online && filterChosen.ofline) return array;
  if (!filterChosen.online && !filterChosen.ofline) return array;
  if (filterChosen.online) {
    arrayWithFormatFilters = arrayWithFormatFilters.concat(array.filter(el => el.format === Format.online)); 
  }
  if (filterChosen.ofline) {
    arrayWithFormatFilters = arrayWithFormatFilters.concat(array.filter(el => el.format === Format.ofline)); 
  }
  return arrayWithFormatFilters; 
}

function checkCountryChosen(array: ApplyWithLogin[]) {
  if (!filterChosen.belarus && !filterChosen.russia && !filterChosen.ukraine) {
    return array;
  } else {
    let arrayCountryChosen: ApplyWithLogin[] = [];
    if (filterChosen.belarus) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.belarus)); 
    }
    if (filterChosen.russia) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.russia)); 
    }
    if (filterChosen.ukraine) {
      arrayCountryChosen = arrayCountryChosen.concat(array.filter(el => el.country === Country.ukraine)); 
    }
    return arrayCountryChosen;
  }
}

// function checkCategoryChosen() {
//   
//   if (filterChosen.healthcare) {
//     array = array.concat(applyWithFilters.filter(elem => elem.category === Category.healthcare)); 
//   }
//   if (filterChosen.emergency) {
//     array = array.concat(applyWithFilters.filter(elem => elem.category === Category.emergency)); 
//   }
//   return applyWithFilters = array; 
// }


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
  
  //if (cardsPage) cardsPage.innerHTML = '';
  switch (e.target) {
    case healthcare:
      filterChosen.healthcare = filterChosen.healthcare ? false : true;
      break;
    case emergency:
      filterChosen.emergency = filterChosen.emergency ? false : true;
      break;
    case veterans:
      filterChosen.veterans = filterChosen.veterans ? false : true;
      break;
    case invalid:
      filterChosen.invalid = filterChosen.invalid ? false : true;
      break;
    case сhildren:
      filterChosen.сhildren = filterChosen.сhildren ? false : true;
      break;
    case animal:
      filterChosen.animal = filterChosen.animal ? false : true;
      break;    
    case nature:
      filterChosen.nature = filterChosen.nature ? false : true;
      break;
    case science:
      filterChosen.science = filterChosen.science ? false : true;
      break;
    case education:
      filterChosen.education = filterChosen.education ? false : true;
      break;    
    case other:
      filterChosen.other = filterChosen.other ? false : true;
      break;
    case online:
      filterChosen.online = filterChosen.online ? false : true;
      break;
    case ofline:
      filterChosen.ofline = filterChosen.ofline ? false : true;
      break;
    case belarus:
      filterChosen.belarus = filterChosen.belarus ? false : true;
      break;    
    case russia:
      filterChosen.russia = filterChosen.russia ? false : true;
      break;
    case ukraine:
      filterChosen.ukraine = filterChosen.ukraine ? false : true;
      break;
  }
  let arrayWithAllFilters: ApplyWithLogin[] = [];
  if (e.target === online || e.target === ofline) {
    const arrayWithFormatFilters = checkFormatChosen(dataUserApply);
    arrayWithAllFilters = checkCountryChosen(arrayWithFormatFilters);
  }
  if (e.target === russia || e.target === belarus || e.target === ukraine) {
    const arrayWithCountryFilters = checkCountryChosen(dataUserApply);
    arrayWithAllFilters = checkFormatChosen(arrayWithCountryFilters);
  }
  console.log(arrayWithAllFilters);
  return arrayWithAllFilters;
  //createPageWithFilters(e.target);
}

