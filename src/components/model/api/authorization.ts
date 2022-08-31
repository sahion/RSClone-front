import { UserAuth } from '../interfaces/UserAuth';

const port = process.env.SERVER_PORT || 3000;
const server = `http://localhost:${port}`;

export async function authorizeRequest(user: UserAuth) {
  try {
    const response = await fetch(`${server}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const token = result.accessToken;
    localStorage.setItem('token', token );
    location.reload();
    return console.log(result);
  } catch (err) {
    if (err instanceof Error)
      return console.log(err.message);
  }
}

export async function  isAuthorized() {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const response = await fetch(server, {
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
    const response = await fetch(`${server}/logout`);
    console.log(response.status);
    window.location.href = 'http://localhost:8080/';
  } catch (err) {
    console.log(err);
  }
  
}