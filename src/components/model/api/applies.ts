import { Apply } from '../type/type';

const PORT = process.env.SERVER_PORT || 3000;


export async function  getApplies() {
  try {
    const response = await fetch(`http://localhost:${PORT}/apply`);
    const result : Apply[] = await response.json();
    return result;
  } catch (err) {
    if (err instanceof Error)
      return err;   
  }
}