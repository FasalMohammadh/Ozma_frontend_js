import { useContext, useState } from 'react';

import { AxiosError } from 'axios';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ToastContainer, toast } from 'react-toastify';

import { z } from 'zod';

import InfoIcon from './../../Assets/Icons/Info.png';

import Button from './../../Components/Button';

import FormContext, { FormTypes } from './../../Context/FormContext';

import FileInput from './../AccountDetails/Components/FileInput';
import TextInput from './../AccountDetails/Components/TextInput';

import userApi from './../../Server/Api/User';
import s3BucketApi from './../..//Server/Api/S3Bucket';

import buffer from 'buffer';

import 'react-toastify/dist/ReactToastify.css';

window.Buffer = window.Buffer || buffer.Buffer;

function AccountDetails() {
  const { personalDetails, setFormStep, store } = useContext(FormContext);

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      contributionToOzma: [],
    },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);

      const signatureFileUrl = await s3BucketApi.insert(data.signatureFile[0]);
      const photoUrl = await s3BucketApi.insert(data.photo[0]);

      const { signatureFile, photo, indexNo, profession, ...userData } = data;

      const {
        data: { userId },
      } = await userApi.create({
        ...userData,
        indexNo: data.indexNo ?? null,
        profession: data.profession ?? null,
        signatureFileUrl,
        photoUrl,
        email: personalDetails.email,
        mobileNumber: personalDetails.phoneNumber,
      });

      store.imageUrl = photoUrl;
      store.nic = userData.nic;
      store.userId = userId;
      toast.success('Successful');
      setFormStep(FormTypes.MEMBERSHIP_CARD);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400: {
            const validationErrors = error.response.data;
            validationErrors.forEach(validationError => {
              toast.error(validationError.error);
            });
            return undefined;
          }
          //no default
        }
      }
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-h-[500px] sm:max-h-none overflow-auto sm-my-0 mx-4 my-12 w-full rounded-3xl bg-white p-6 text-center sm:mx-0 sm:w-[unset] sm:pt-5 sm:pb-12 md:p-16 md:pt-5 md:pb-12 lg:p-28 lg:pb-20 lg:pt-7'
      >
        <h1 className='font-poppins text-2xl font-medium uppercase'>
          Account Details
        </h1>
        <div className='my-8 grid grid-cols-[auto] gap-y-6 text-left sm:grid-cols-[repeat(2,250px)] sm:gap-x-12 sm:gap-y-8 md:gap-x-20 lg:gap-x-28'>
          <div>
            <TextInput placeholder='Full Name' {...register('fullName')} />
            <span className='pl-3 text-sm text-red-500'>
              {errors.fullName?.message}
            </span>
          </div>

          <div>
            <TextInput
              placeholder='Date of Birth'
              max={new Date().toISOString().split('T').at(0)}
              {...register('dob')}
              onBlur={event => {
                event.target.setAttribute('type', 'text');
                register('dob').onBlur(event);
              }}
              onFocus={event => {
                event.target.setAttribute('type', 'date');
              }}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.dob?.message}
            </span>
          </div>

          <div>
            <TextInput
              placeholder='Address'
              autoComplete='street-address'
              {...register('address')}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.address?.message}
            </span>
          </div>

          <div>
            <TextInput
              placeholder='GCE OL Year'
              inputMode='numeric'
              {...register('olYear')}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.olYear?.message}
            </span>
          </div>

          <div>
            <TextInput placeholder='NIC' {...register('nic')} />
            <span className='pl-3 text-sm text-red-500'>
              {errors.nic?.message}
            </span>
          </div>

          <div>
            <TextInput
              placeholder='School Index Number'
              {...register('indexNo')}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.indexNo?.message}
            </span>
          </div>

          <div className='sm:col-span-2'>
            <TextInput
              placeholder='Are you employed? if yes, Please mention your profession.'
              {...register('profession')}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.profession?.message}
            </span>
          </div>

          <div className='sm:col-span-2'>
            <div className='flex justify-between border-b-2 border-custom-input '>
              <label className='pl-3 font-poppins text-sm text-custom-input-placeholder'>
                Were you part of the School Media Forum?
              </label>
              <div className='flex items-center gap-2'>
                <label className='flex items-center gap-2 font-poppins text-sm'>
                  Yes
                  <input type='radio' {...register('partOfSmf')} value='Yes' />
                </label>
                <label className='flex items-center gap-2 font-poppins text-sm'>
                  No
                  <input type='radio' {...register('partOfSmf')} value='No' />
                </label>
              </div>
            </div>

            <span className='pl-3 text-sm text-red-500'>
              {errors.partOfSmf?.message}
            </span>
          </div>

          <div className='sm:col-span-2'>
            <div className='flex items-end justify-between border-b-2 border-custom-input'>
              <label
                id='contribution'
                className='pl-3 font-poppins text-sm text-custom-input-placeholder'
              >
                How would you like to contribute to OZMA
              </label>
            </div>

            <div className='mt-2 flex flex-wrap gap-2 whitespace-nowrap pl-3'>
              {contribution.map(item => (
                <label
                  key={item}
                  className='flex cursor-pointer items-center gap-2 font-poppins text-sm'
                >
                  {item}
                  <input
                    type='checkbox'
                    value={item}
                    {...register('contributionToOzma')}
                  />
                </label>
              ))}
            </div>
            <span className='pl-3 text-sm text-red-500'>
              {errors.contributionToOzma?.message}
            </span>
          </div>

          <div>
            <FileInput
              placeholder='Signature File Upload'
              {...register('signatureFile')}
            />

            <div className='gap-2 flex items-center mt-4 text-center'>
              <img src={InfoIcon} alt='Information Icon' width={30} />
              <p className='text-xs text-slate-500'>
                Please use white paper and sign your signature clearly and
                upload.
              </p>
            </div>

            <span className='pl-3 text-sm text-red-500'>
              {errors.signatureFile?.message}
            </span>
          </div>

          <div>
            <FileInput
              placeholder='Passport Size Photo'
              {...register('photo')}
            />
            <span className='pl-3 text-sm text-red-500'>
              {errors.photo?.message}
            </span>
          </div>
        </div>
        <Button
          type='submit'
          className='mx-auto rounded-full bg-custom-accent-color-4 px-16 py-2 font-poppins font-medium text-white'
          loading={loading}
        >
          Next
        </Button>
      </form>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme='light'
      />
    </>
  );
}

const contribution = [
  'Content Writing',
  'Graphic Design',
  'Video Editing',
  'Filmmaking',
  'Photography',
  'Event Management',
  'Field Work',
  'Financial Support',
  'Hosting',
];

function validateYear(value, ctx) {
  const valueAsNumber = Number(value);

  if (
    isNaN(valueAsNumber) ||
    valueAsNumber > new Date().getFullYear() ||
    valueAsNumber < 1000
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Not a valid year',
    });
    return z.NEVER;
  }

  return valueAsNumber;
}

function validateDob(value, ctx) {
  const valueAsDate = new Date(value);
  const isValid = z.date().max(new Date()).safeParse(valueAsDate).success;

  if (isValid) return valueAsDate.toISOString().split('T')[0];

  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: 'Not a valid date for dob',
  });
  return z.NEVER;
}

function validatePartOfSmf(val, ctx) {
  switch (val) {
    case 'Yes':
      return true;
    case 'No':
      return false;
    default:
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This is a required field',
      });
      return z.NEVER;
  }
}

function validateFile(fieldName) {
  return [value => value.length !== 0, { message: `${fieldName} is required` }];
}

const validationSchema = z.object({
  fullName: z.string().trim().min(1, 'Full Name is a required field').trim(),
  address: z.string().trim().min(1, 'Address is a required field'),
  olYear: z
    .string()
    .min(1, 'GCE OL Year is a required field')
    .transform(validateYear),
  nic: z.string().min(1, 'NIC is a required field'),
  signatureFile: z
    .instanceof(FileList)
    .refine(...validateFile('Signature file')),
  photo: z.instanceof(FileList).refine(...validateFile('Photo')),
  dob: z
    .string()
    .min(1, 'Date of Birth is a required field')
    .transform(validateDob),
  profession: z.string().optional(),
  indexNo: z.string().optional(),
  partOfSmf: z
    .union([z.literal('Yes'), z.literal('No')])
    .nullable()
    .transform(validatePartOfSmf),
  contributionToOzma: z
    .array(z.enum(contribution))
    .min(1, 'You must select at least one'),
});

export default AccountDetails;
