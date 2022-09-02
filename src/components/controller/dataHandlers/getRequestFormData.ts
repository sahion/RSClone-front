import { Apply } from '../../model/type/type';

export default function getRequestFormData(): Apply {
  const requestForm = document.getElementById('requestForm') as HTMLFormElement;
  const data = new FormData(requestForm);
  const category = data.get('category') as string;
  const format = data.get('format') as string;
  const country = data.get('location') as string;
  const address = data.get('address') as string;
  const time = data.get('time') as string;
  const date = data.get('date') as string;
  const text = data.get('textarea') as string;


  const formData: Apply = {
    category: category,
    format: format,
    country: country,
    location: address,
    date: new Date(`${date}T${time}`),
    description: text,
    open: true,
  };

  return formData;
}