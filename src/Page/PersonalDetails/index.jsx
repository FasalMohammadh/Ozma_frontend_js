import React, { useContext, useState } from 'react';

import { z } from 'zod';

import UserIcon from './../../Assets/Icons/User.svg';

import Button from './../../Components/Button';

import FormContext, { FormTypes } from './../../Context/FormContext';

const PersonalDetails = () => {
  const { personalDetails, setPersonalDetails, setFormStep } =
    useContext(FormContext);

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    phoneNumber: null,
    whatsAppNumber: null,
    email: null,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setErrors(currentErrors => {
      const keys = Object.keys(currentErrors);
      const errors = Object.fromEntries(keys.map(key => [key, null]));
      return errors;
    });

    try {
      const validatedInputs = validationSchema.parse(personalDetails);
      setPersonalDetails(currentState => ({
        ...currentState,
        ...validatedInputs,
      }));
      setFormStep(FormTypes.ACCOUNT_DETAILS);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = {};
        const errors = error.flatten().fieldErrors;
        for (const key in errors) {
          validationErrors[key] = errors[key]?.at(0);
        }

        setErrors(currentErrors => ({
          ...currentErrors,
          ...validationErrors,
        }));
      }
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPersonalDetails(currentState => ({ ...currentState, [name]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='my-16 flex w-10/12 flex-col items-center rounded-3xl bg-white px-6 pb-6 sm:w-[unset] sm:px-12 sm:pb-16 md:px-20 lg:px-28'
    >
      <img
        src={UserIcon}
        alt='User Icon'
        className='-translate-y-1/2 rounded-full bg-white p-2'
      />
      <h1 className='-mt-8 mb-10 font-poppins text-2xl font-medium text-custom-form-text'>
        Personal Details
      </h1>
      <div className='mb-12 grid gap-y-5 sm:mb-32 sm:grid-cols-[repeat(2,200px)] sm:gap-x-16 lg:grid-cols-[repeat(2,300px)]'>
        <div>
          <input
            type='text'
            placeholder='First Name*'
            autoComplete='given-name'
            className='w-full rounded-md bg-custom-input-bg p-2 font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input-placeholder'
            name='firstName'
            onChange={handleChange}
          />
          <span className='ml-2 text-sm text-red-500 '>{errors.firstName}</span>
        </div>
        <div>
          <input
            type='text'
            placeholder='Phone Number'
            autoComplete='tel'
            className='w-full rounded-md bg-custom-input-bg p-2 font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input-placeholder'
            name='phoneNumber'
            onChange={handleChange}
          />
          <span className='ml-2 text-sm text-red-500 '>
            {errors.phoneNumber}
          </span>
        </div>
        <div>
          <input
            type='text'
            placeholder='Last Name'
            autoComplete='family-name'
            className='w-full rounded-md bg-custom-input-bg p-2 font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input-placeholder'
            name='lastName'
            onChange={handleChange}
          />
          <span className='ml-2 text-sm text-red-500 '>{errors.lastName}</span>
        </div>
        <div>
          <input
            type='text'
            placeholder='WhatsApp Number*'
            autoComplete='tel'
            className='w-full rounded-md bg-custom-input-bg p-2 font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input-placeholder'
            name='whatsAppNumber'
            onChange={handleChange}
          />
          <span className='ml-2 text-sm text-red-500 '>
            {errors.whatsAppNumber}
          </span>
        </div>
        <div>
          <input
            type='text'
            placeholder='Email*'
            autoComplete='email'
            className='w-full rounded-md bg-custom-input-bg p-2 font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input-placeholder'
            name='email'
            onChange={handleChange}
          />
          <span className='ml-2 text-sm text-red-500 '>{errors.email}</span>
        </div>
      </div>
      <Button
        type='submit'
        className='rounded-md bg-custom-accent-color-3 px-12 py-2 font-poppins font-semibold text-white disabled:bg-opacity-50'
      >
        Verify Details
      </Button>
    </form>
  );
};

const validationSchema = z
  .object({
    firstName: z.string().trim().min(1, 'First Name is a required field'),
    lastName: z.string().trim().optional(),
    phoneNumber: z
      .string()
      .trim()
      .refine(
        value =>
          value.length ? /^(0)|(\+94)|(0094)?\d{9}$/.test(value) : true,
        { message: 'Not a valid Phone Number' }
      )
      .optional(),
    whatsAppNumber: z
      .string()
      .trim()
      .min(1, 'Whatsapp Number is a required field')
      .regex(/^(0)|(\+94)|(0094)?\d{9}$/, 'Not a valid Phone Number'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is a required field')
      .email({ message: 'Not a valid email' }),
  })
  .required();

export default PersonalDetails;
