import { UserAuth } from '../type/User';

const SERVER = process.env.SERVER as string;

export async function authorizeRequest(user: UserAuth) {
  try {
    const response = await fetch(`${SERVER}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const token = result.accessToken;
    const userId = result.accessToken;
    localStorage.setItem('token', token );
    localStorage.setItem('userId', userId );
    window.location.href = 'http://localhost:8080/user.html';
  } catch (err) {
    if (err instanceof Error)
      return console.log(err.message);
  }
}

export async function  isAuthorized() {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const response = await fetch(SERVER, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`,
      },
    });
    return (response.status === 200) ? true : false;
  } catch (err) {
    if (err instanceof Error)
      return false;
  }
}

export async function  logout() {
  localStorage.removeItem('token');
  try {
    const response = await fetch(`${SERVER}/logout`);
    console.log(response.status);
    window.location.href = 'http://localhost:8080/';
  } catch (err) {
    console.log(err);
  }
  
}