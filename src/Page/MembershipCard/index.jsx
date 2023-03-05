import { useContext } from 'react';

import Logo from './../../Assets/Images/Logo.png';
import SchoolLogo from './../../Assets/Images/SchoolLogo.png';
import QRCodeIMage from './../../Assets/Images/QRCode.png';

import FBIcon from './../../Assets/Icons/FB.png';
import InstagramIcon from './../../Assets/Icons/Instagram.png';
import TwitterIcon from './../../Assets/Icons/twitter.png';

import FormContext from './../../Context/FormContext';

function MembershipCard() {
  const { store, personalDetails } = useContext(FormContext);

  const date = new Date();
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getDay().toString().padStart(2, '0')}`;

  return (
    <div className='mt-10'>
      <h1 className='p-2 text-center font-mont text-3xl font-semibold text-white sm:p-0'>
        Thanks for registration!
        <br />
        Your ID will be sent to you after the payment confirmation!
      </h1>

      <div className='mt-12 pt-4 pb-16 md:pt-8 md:pb-32'>
        <div className='relative left-5 isolate mx-auto w-fit text-[#2e2f30] md:left-10'>
          <div className="h-[200px] w-[250px] transform-none rounded-2xl bg-[url('/src/Assets/Images/CardBackground.png')] bg-cover [box-shadow:-75px_30px_10px_0_rgb(0_0_0/.15)] before:absolute before:right-0 before:block before:h-full before:w-full before:rounded-xl before:bg-gradient-to-r before:from-transparent before:to-slate-300/10 xs:[transform:rotate3d(1,_3,_-2,_25deg)_skewX(15deg)] md:h-[250px] md:w-[400px]">
            <div className='flex items-start justify-between py-3 px-4'>
              <img src={Logo} alt='Logo' width={60} />
              <img src={SchoolLogo} alt='School Logo' width={30} />
            </div>
            <div className='flex justify-between gap-2 px-2 py-2 md:gap-10 md:px-4 md:py-4'>
              <div className='flex flex-col gap-1 md:gap-2'>
                <h1 className='font-poppins text-xs'>Membership Card</h1>
                <p className='font-poppins text-lg font-bold md:text-xl'>
                  {personalDetails.firstName} {personalDetails.lastName}
                </p>
                <div className='grid grid-cols-[auto_1fr] gap-x-2 gap-y-1'>
                  <p className='font-poppins text-xs'>NIC:</p>
                  <p className='font-poppins text-xs font-semibold'>
                    {store.nic}
                  </p>
                  <p className='font-poppins text-xs'>ID:</p>
                  <p className='font-poppins text-xs font-semibold'>
                    OZMA
                    {''.padStart(store.userId.slice('OZMA'.length).length, '*')}
                  </p>
                </div>
              </div>
              <div className='aspect-square w-16 overflow-hidden rounded-xl bg-white md:w-32'>
                <img
                  src={store.imageUrl}
                  alt='Profile'
                  className='h-full w-full object-cover object-top'
                />
              </div>
            </div>
            <div className='flex gap-1 px-2 py-1 font-poppins text-sm md:gap-2 md:px-4'>
              <p>Date of Issue:</p>
              <p className='font-semibold'>{formattedDate}</p>
            </div>
          </div>
          {/* <div className="absolute top-24 -left-20 z-[-1] h-full w-full rounded-2xl bg-[url('/src/Assets/Images/CardBackground.png')] bg-cover  [transform:rotate3d(1,_3,_-2,_25deg)_skewX(15deg)]">
            <div className="p-4">
              <div className="h-10 rounded-xl ring-1 ring-gray-300" />
              <p className="mt-2 font-poppins text-xs font-medium text-gray-500/80">
                Member&apos;s Signature
              </p>
              <div className="mt-4 h-10 rounded-xl ring-1 ring-gray-300" />
              <p className="mt-2 font-poppins text-xs font-medium text-gray-500/80">
                President&apos;s Signature
              </p>
            </div>
            <div className="flex items-end justify-between px-6 pb-4">
              <div className="flex items-center gap-1">
                <img src={PhoneCallIcon} alt="Call Icon" className=" w-3" />
                <p className="font-poppins text-[10px] font-semibold">
                  011 123 4442
                </p>
              </div>
              <div>
                <p className="mb-1 font-poppins text-[8px]">
                  if found, please return to:
                </p>
                <p className="font-poppins text-xs font-semibold">
                  111/1, Court Rd,
                  <br />
                  Marawa, Mawanalla
                </p>
              </div>
            </div>
          </div> */}
          <div className="absolute top-12 -left-10 z-[-1] h-full w-full rounded-2xl bg-[url('/src/Assets/Images/CardBackground.png')] bg-cover xs:[transform:rotate3d(1,_3,_-2,_25deg)_skewX(15deg)] md:top-24 md:-left-20">
            <div className='grid h-full grid-cols-5 p-6'>
              <div className=' col-span-3 grid h-full grid-rows-2 items-end'>
                <p className='mt-2 font-poppins text-xs font-medium text-gray-500/80'>
                  Member&apos;s Signature
                </p>
                <p className='mt-2 font-poppins text-xs font-medium text-gray-500/80'>
                  President&apos;s Signature
                </p>
              </div>
              <div className='col-span-2'>
                <div className='aspect-square'>
                  <img
                    src={QRCodeIMage}
                    alt='QR Code'
                    className='h-full w-full object-contain'
                  />
                </div>
                <div className='mt-2 flex items-center justify-center'>
                  <img
                    className='aspect-square w-4 object-contain'
                    src={FBIcon}
                    alt='Social Media Icon'
                  />
                  <img
                    className='aspect-square w-4 object-contain'
                    src={InstagramIcon}
                    alt='Social Media Icon'
                  />
                  <img
                    className='aspect-square w-4 object-contain'
                    src={TwitterIcon}
                    alt='Social Media Icon'
                  />
                  <p className='ml-2 font-poppins text-black'>@ozma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-poppins mt-8 px-2 text-center text-lg text-white'>
        Note:Our Team will contact you soon!.
      </p>
      <p className='text-poppins mt-2 px-2 text-center text-sm text-white'>
        *If you have any technical issues please contact +9475 814 1434.
      </p>
    </div>
  );
}

export default MembershipCard;
