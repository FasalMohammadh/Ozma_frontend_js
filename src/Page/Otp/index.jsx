import React, { useContext, useEffect, useRef, useState } from 'react';

import { z } from 'zod';

import OtpInput from 'react-otp-input';

import Button from './../../Components/Button';

import FormContext, { FormTypes } from './../../Context/FormContext';

import otpApi from './../../Server/Api/Otp';

const validationSchema = z
  .string({ required_error: 'OTP is required' })
  .length(5, 'OTP is required');

function parsePhoneNumber(phoneNumber) {
  return `94${phoneNumber.slice(-9)}`;
}

const Otp = () => {
  const {
    setFormStep,
    personalDetails: { phoneNumber },
  } = useContext(FormContext);

  const [otp, setOtp] = useState('');

  let referenceId = useRef(null).current;

  useEffect(() => {
    const abortController = new AbortController();

    otpApi
      .send(parsePhoneNumber(phoneNumber), abortController.signal)
      .then(data => {
        referenceId = data.referenceId;
      })
      .catch(() => {
        alert('something went wrong');
      });

    return () => {
      abortController.abort();
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // if (!referenceId) return undefined;

      // validationSchema.parse(otp);
      // await OtpApi.verify(otp, referenceId);

      setFormStep(FormTypes.ACCOUNT_DETAILS);
    } catch (error) {
      alert('something went wrong');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='rounded-3xl bg-white px-8 pb-12 pt-10 text-center sm:w-auto sm:px-32 sm:pb-36'
    >
      <h1 className='font-mont text-lg font-semibold'>Verify Phone</h1>
      <p className='font-mont text-xs'>
        Code is sent to +{parsePhoneNumber(phoneNumber)}
      </p>

      <OtpInput
        isInputNum
        numInputs={5}
        value={otp}
        onChange={otp => {
          setOtp(otp);
        }}
        inputStyle='aspect-square overflow-hidden rounded bg-custom-input-otp-bg text-center font-mont text-3xl shadow-[4px_4px_7px_-1px] shadow-custom-input-otp-shadow min-w-[44px]'
        containerStyle='w-full gap-8 my-10'
      />

      <Button
        type='submit'
        className='mx-auto rounded-md bg-custom-accent-color-2 px-12 py-2 font-mont font-semibold text-white disabled:bg-opacity-50'
      >
        Submit
      </Button>
    </form>
  );
};

export default Otp;
