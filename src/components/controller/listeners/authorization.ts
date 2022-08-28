import { UserAuth } from '../../interfaces/UserAuth';


export async function authorizeRequest(user: UserAuth) {
  const port = process.env.SERVER_PORT || 3000;
  try {
    const response = await fetch(`http://localhost:${port}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const token = result.accessToken;
    localStorage.setItem('token', token );
    return console.log(result);
  } catch (err) {
    if (err instanceof Error)
      return console.log(err.message);
  }
}


export async function  isAuthorized() {
  const token = localStorage.getItem('token');
  if (!token) return false;
}