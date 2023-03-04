import React, { useContext } from 'react';

import FormContext, { FormTypes } from '../../Context/FormContext';

import ArrowRight from './../../Assets/Icons/ArrowRight.svg';
import Button from '../../Components/Button';

const Welcome = () => {
  const { setFormStep } = useContext(FormContext);

  function handleClickGetStart() {
    setFormStep(FormTypes.PERSONAL_DETAILS);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 text-center font-mont'>
      <h1 className='text-4xl font-semibold'>OZMA Digital Registration</h1>
      <span>
        Welcome to the new Era of OZMA.
        <br />
        Let’s be part of the member of the Digital Weo
      </span>
      <Button
        aria-label='Get Start'
        className='mt-20 rounded-lg bg-custom-accent-color-1 px-8 py-4'
        onClick={handleClickGetStart}
      >
        <img src={ArrowRight} alt='Arrow Right Icon' />
      </Button>
      <p className='text-poppins mt-4 text-sm text-center'>
        *If you have any technical issues please contact +9475 814 1434.
      </p>
    </div>
  );
};

export default Welcome;
