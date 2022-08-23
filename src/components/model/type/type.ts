export interface Apply { 
  category: string,
  format: string,
  contact: (string | null)[],
  country: string,
  location: string, 
  time: string,
  description: string, 
  open: boolean,
} 

export type UserRequest = {
  name: string, 
  avatar: string,
  body: string,
  category: string, 
  address: string,
}[];