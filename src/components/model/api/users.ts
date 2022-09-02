import jwtDecode from 'jwt-decode';
import { UserVisualData } from '../type/User';


const PORT = process.env.SERVER_PORT || 3000;

export function getAuthUserData() : UserVisualData | false {
  const token: string | null = localStorage.getItem('token');
  if (!token) return false;
  return jwtDecode(token);
}

export async function  getUsers() {
  try {
    const response = await fetch(`http://localhost:${PORT}/user`);
    const result : UserVisualData[] = await response.json();
    return result;
  } catch (err) {
    if (err instanceof Error)
      return err;   
  }
}
