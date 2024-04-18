import axios from 'axios';
import { AlertOptionsType } from '../components/elements/alert/Alert';

const baseUrl = 'https://dummyjson.com/auth/login';

const post = async (
  requestBody = {},
  setLoading: (loading: boolean) => void,
  setAlertOptions: (options: AlertOptionsType) => void
) => {
  try {
    setLoading(true);
    const response = await axios.post(`${baseUrl}`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 1000 * 30,
    });
    setLoading(false);
    return response.data;
  } catch (error) {
    setLoading(false);
    setAlertOptions({
      visible: true,
      title: 'TEMP00018',
      message: 'TEMP00010',
    });
    if (axios.isAxiosError(error) && !error.response) {
      // Handle network error
      return { error: true, name: 'Network Error', message: 'Network Error' };
    }
    throw error;
  }
};

export { post };
