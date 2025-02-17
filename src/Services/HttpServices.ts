import axios, { AxiosError } from 'axios';
import { AlertOptionsType } from '../components/elements/alert/Alert';
import { getStoreLoginUser } from '../utility/localStorage/localStorage';

const baseUrl = 'http://3.110.33.185';

interface ApiErrorResponse {
  message: string;
  [key: string]: string;
}

const post = async (
  requestBody = {},
  endPoint: string,
  setLoading: (loading: boolean) => void,
  setAlertOptions: (options: AlertOptionsType) => void
) => {
  try {
    setLoading(true);
    const userLogin = await getStoreLoginUser();
    const headers = {
      'Content-Type': 'application/json',
      ...(userLogin?.token ? { Authorization: `Bearer ${userLogin?.token}` } : {}), // Add Authorization header if token is provided
    };
    const response = await axios.post(`${baseUrl}/${endPoint}`, requestBody, {
      headers,
      timeout: 1000 * 30,
    });
    // console.log('response--------------------------------', response.data);
    setLoading(false);
    return { data: response.data, status: response.status };
  } catch (error) {
    setLoading(false);

    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      if (axiosError.response) {
        errorMessage =
          axiosError?.response?.data?.message ||
          axiosError.response.statusText ||
          `Error: ${axiosError.response.status}`;
      } else if (axiosError.request) {
        errorMessage = 'No response from the server. Please check your network connection.';
      } else {
        errorMessage = axiosError.message;
      }
    } else {
      errorMessage = (error as Error).message || errorMessage;
    }
    setAlertOptions({
      visible: true,
      title: 'Error',
      message: errorMessage,
    });
    return { error: true, message: errorMessage };
  }
};

export { post };
