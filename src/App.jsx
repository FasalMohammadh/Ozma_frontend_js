import { useRef, useState } from 'react';

import MainLayout from './Components/Layouts/MainLayout';

import FormContext, { FormTypes } from './Context/FormContext';

import Welcome from './Page/Welcome';
import PersonalDetails from './Page/PersonalDetails';
import Otp from './Page/Otp';
import AccountDetails from './Page/AccountDetails';
import MembershipCard from './Page/MembershipCard';

const lookUpFormStep = {
  WELCOME: Welcome,
  PERSONAL_DETAILS: PersonalDetails,
  MEMBERSHIP_CARD: MembershipCard,
  ACCOUNT_DETAILS: AccountDetails,
  // [FormTypes.OTP]: Otp,
};

const App = () => {
  const [formStep, setFormStep] = useState(FormTypes.WELCOME);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    whatsAppNumber: '',
    email: '',
  });

  const store = useRef({ nic: '', imageUrl: '', userId: '' }).current;

  const FormStep = lookUpFormStep[formStep];

  return (
    <MainLayout>
      <FormContext.Provider
        value={{
          formStep,
          setFormStep,
          personalDetails,
          setPersonalDetails,
          store,
        }}
      >
        <FormStep />
      </FormContext.Provider>
    </MainLayout>
  );
};

export default App;
