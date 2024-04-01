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
      title: 'UNIFY00104', // Message
      message: 'UNIFY00105', // Username / Password cannot be blank
    });
    validate = false;
  } else if (userName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00106', // Username cannot be blank
    });
    validate = false;
  } else if (password === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00107', // Password cannot be blank
    });
    validate = false;
  }
  return validate;
};

//SalesPriceValidation
export const SalesPriceValidation = (
  RevisedSalesPrice: string,
  Reason: string,
  setAlertOptions: SetAlertOptionsType
) => {
  let validate = true;
  if (RevisedSalesPrice === '' && Reason === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00108', // RevisedSalesPrice / Reason cannot be blank
    });
    validate = false;
  } else if (RevisedSalesPrice === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00109', // RevisedSalesPrice cannot be blank
    });
    validate = false;
  } else if (Reason === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00110', // Password cannot be blank
    });
    validate = false;
  }
  return validate;
};

//DiscountValidation
export const DiscountValidation = (Reason: string, setAlertOptions: SetAlertOptionsType) => {
  let validate = true;
  if (Reason === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00110', //Reason cannot be blank
    });
    validate = false;
  }
  return validate;
};

//EditChargesValidation
export const EditChargesValidation = (Reason: string, setAlertOptions: SetAlertOptionsType) => {
  let validate = true;
  if (Reason === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00110', //Reason cannot be blank
    });
    validate = false;
  }
  return validate;
};

//CreateNewCustomerValidation
export const CreateNewCustomerValidation = (
  Title: string,
  CustomerFirstName: string,
  CustomerMiddleName: string,
  CustomerLastName: string,
  EmailID: string,
  Mobile: string,
  setAlertOptions: SetAlertOptionsType
) => {
  let validate = true;

  if (Title === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00111', // Title cannot be blank
    });
    validate = false;
  } else if (CustomerFirstName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00112', // Customer First Name cannot be blank
    });
    validate = false;
  } else if (CustomerMiddleName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00113', // Customer Middle Name cannot be blank
    });
    validate = false;
  } else if (CustomerLastName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00114', // Customer Last Name cannot be blank
    });
    validate = false;
  } else if (EmailID === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00115', // Email-ID cannot be blank
    });
    validate = false;
  } else if (Mobile === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00116', // Mobile cannot be blank
    });
    validate = false;
  }
  return validate;
};

//CreateNewCustomerValidation
export const EditCustomerValidation = (
  Title: string,
  CustomerFirstName: string,
  CustomerMiddleName: string,
  CustomerLastName: string,
  EmailID: string,
  Mobile: string,
  setAlertOptions: SetAlertOptionsType
) => {
  let validate = true;

  if (Title === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00111', // Title cannot be blank
    });
    validate = false;
  } else if (CustomerFirstName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00112', // Customer First Name cannot be blank
    });
    validate = false;
  } else if (CustomerLastName === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00114', // Customer Last Name cannot be blank
    });
    validate = false;
  } else if (EmailID === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00115', // Email-ID cannot be blank
    });
    validate = false;
  } else if (Mobile === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00116', // Mobile cannot be blank
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
      title: 'UNIFY00104', // Message
      message: 'UNIFY00117', // Please enter URL
    });
    validate = false;
  } else if (ServicePort === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00118', // Please enter port number
    });
    validate = false;
  } else if (MacId === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00119', // Please enter MacId
    });
    validate = false;
  }

  return validate;
};

// FORGOT PASSWORD
export const validateForgotPassword = (email: string, setAlertOptions: SetAlertOptionsType) => {
  let validate = true;

  if (email === '') {
    setAlertOptions({
      visible: true,
      title: 'UNIFY00104', // Message
      message: 'UNIFY00120', // Please enter Email
    });
    validate = false;
  }
  return validate;
};
