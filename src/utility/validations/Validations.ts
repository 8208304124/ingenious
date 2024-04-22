import { SetAlertOptionsType } from '../../components/elements/alert/Alert';

// LOGIN
export const loginValidation = (
  userName: string,
  password: string,
  setAlertOptions: SetAlertOptionsType
) => {
  let validate = true;

  if (userName === '' && password === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00017', // Message
      message: 'TEMP00016', // Username / Password cannot be blank
    });
    validate = false;
  } else if (userName === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00017', // Message
      message: 'TEMP00018', // Username cannot be blank
    });
    validate = false;
  } else if (password === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00017', // Message
      message: 'TEMP00019', // Password cannot be blank
    });
    validate = false;
  }
  return validate;
};

// APPLICATION SETTINGS
export const validateApplicationSettings = (
  ServiceUrl: string,
  ServicePort: string,
  MacId: string,
  setAlertOptions: SetAlertOptionsType
) => {
  let validate = true;

  // ServerInfo Validation
  if (ServiceUrl === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00104', // Message
      message: 'TEMP00117', // Please enter URL
    });
    validate = false;
  } else if (ServicePort === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00104', // Message
      message: 'TEMP00118', // Please enter port number
    });
    validate = false;
  } else if (MacId === '') {
    setAlertOptions({
      visible: true,
      title: 'TEMP00104', // Message
      message: 'TEMP00119', // Please enter MacId
    });
    validate = false;
  }
  return validate;
};
