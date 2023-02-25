import React, { createContext } from 'react';

const FormTypes = {
  // OTP = "OTP",
  WELCOME: 'WELCOME',
  ACCOUNT_DETAILS: 'ACCOUNT_DETAILS',
  PERSONAL_DETAILS: 'PERSONAL_DETAILS',
  MEMBERSHIP_CARD: 'MEMBERSHIP_CARD',
};

const FormContext = createContext({});

export default FormContext;
export { FormTypes };
