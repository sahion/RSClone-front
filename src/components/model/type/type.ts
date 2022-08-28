export interface Apply { 
  category: string,
  format: string,
  contact?: (string | null)[],
  country: string,
  location?: string, 
  time?: string,
  description: string, 
  open: boolean,
} 
export interface ApplyWithLogin extends Apply {
  login: string,
  avatar: string,
}

export type UserThanks = {
  name: string, 
  avatar: string,
  body: string,
  target: string, 
  targetAvatar: string,
}[];

export enum Category {
  healthcare = 'Здравоохранение',
  emergency = 'ЧС',
  veterans = 'Ветераны и историческая память',
  invalid = 'Люди с ОВС',
  сhildren = 'Дети и подростки',
  animal = 'Животные',
  nature = 'Природа',
  science = 'Наука',
  education = 'Образование',
  other = 'Другое',
}
export enum Format {
  online = 'Онлайн',
  ofline = 'Офлайн',
}
export enum Country {
  belarus = 'Республика Беларусь',
  russia = 'Российская Федерация',
  ukraine = 'Украина',
}