import jwtDecode from 'jwt-decode';
import { UserVisualData } from '../interfaces/User';


export function getAuthUserData() : UserVisualData | false {
  const token: string | null = localStorage.getItem('token');
  if (!token) return false;
  return jwtDecode(token);
}