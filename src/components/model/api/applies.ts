import { showMessage } from '../../utils/showMessage';
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


export async function  createApply(apply: Apply) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:${PORT}/apply`, {
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