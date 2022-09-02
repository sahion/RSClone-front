import { showMessage } from '../../utils/showMessage';
import { Apply } from '../type/type';

const SERVER = process.env.SERVER as string;

export async function  getApplies() {
  try {
    const response = await fetch(`${SERVER}/apply`);
    const result : Apply[] = await response.json();
    return result;
  } catch (err) {
    if (err instanceof Error)
      return err;   
  }
}


export async function  createApply(apply: Apply) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${SERVER}/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(apply),
    });
    if (response.status === 200) {
      showMessage('Заявка успешно создана');
    } else showMessage(`Ошибка ${response.status}`, true);
  } catch (err) {
    if (err instanceof Error)
      showMessage('Проблемы с подключением к серверу', true);
  }
}

