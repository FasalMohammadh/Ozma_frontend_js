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
        Welcome to new Era of OZMA.
        <br /> Lets be part Digital Weo
      </span>
      <Button
        aria-label='Get Start'
        className='mt-20 rounded-lg bg-custom-accent-color-1 px-8 py-4'
        onClick={handleClickGetStart}
      >
        <img src={ArrowRight} alt='Arrow Right Icon' />
      </Button>
    </div>
  );
};

export default Welcome;
