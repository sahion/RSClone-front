import vladimirAva from '../../assets/img/Владимир.png'; 
import elenaAva from '../../assets/img/Елена.png'; 
import svetlanaAva from '../../assets/img/Светлана.png'; 
import { UserRequest } from '../type/type';

export const userRequests: UserRequest = [
  {
    name: 'Владимир',
    avatar: vladimirAva,
    body: 'Прошу, может кто сможет передать продукты в 1 больницу.Все расходы готов оплатить. Буду очень благодарен.',
    category: 'Другое',
    address: 'г.Минск, пр. Независимости, д.64',
  },
  {
    name: 'Елена',
    avatar: elenaAva,
    body: `Ребята, мужчины, каждое воскресенье еду с дачи с полными сумками.
      Может кто может помочь их поднести хотябы до метро...`,
    category: 'Другое',
    address: 'Ж/д вокзал Минск',
  },
  {
    name: 'Светлана',
    avatar: svetlanaAva,
    body: 'Вторые сутки жутко зависает комп, аж бесит...Нужна помощь в переустановке винды.',
    category: 'Наука',
    address: 'онлайн',
  },
];