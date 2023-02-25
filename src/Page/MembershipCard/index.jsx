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
    <div className='mt-20 self-start'>
      <h1 className='text-center font-mont text-3xl font-semibold text-white'>
        Thanks for registration!
        <br />
        Your ID will be received to you soon!
      </h1>
      <div className='relative left-10 isolate mx-auto mt-12 w-fit text-[#2e2f30]'>
        <div className="h-[250px] w-[400px] rounded-2xl bg-[url('/src/Assets/Images/CardBackground.png')] bg-cover [transform:rotate3d(1,_3,_-2,_25deg)_skewX(15deg)] [box-shadow:-75px_30px_10px_0_rgb(0_0_0/.15)] before:absolute before:right-0 before:block before:h-full before:w-full before:rounded-xl before:bg-gradient-to-r before:from-transparent before:to-slate-300/10">
          <div className='flex items-start justify-between py-3 px-4'>
            <img src={Logo} alt='Logo' width={60} />
            <img src={SchoolLogo} alt='School Logo' width={30} />
          </div>
          <div className='flex justify-between gap-10  px-4 py-4'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-poppins text-xs'>Membership Card</h1>
              <p className='font-poppins text-xl font-bold '>
                {personalDetails.firstName} {personalDetails.lastName}
              </p>
              <div className='grid grid-cols-[auto_1fr] gap-x-2 gap-y-1'>
                <p className='font-poppins text-xs'>NIC:</p>
                <p className='font-poppins text-xs font-semibold'>
                  {store.nic}
                </p>
                <p className='font-poppins text-xs'>ID:</p>
                <p className='font-poppins text-xs font-semibold'>00124</p>
              </div>
            </div>
            <div className='aspect-square w-32 overflow-hidden rounded-xl bg-white'>
              <img
                src={store.imageUrl}
                alt='Profile'
                className='h-full w-full object-cover object-top'
              />
            </div>
          </div>
          <div className='flex gap-2 px-4 py-1 font-poppins text-sm'>
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
        <div className="absolute top-24 -left-20 z-[-1] h-full w-full rounded-2xl bg-[url('/src/Assets/Images/CardBackground.png')] bg-cover  [transform:rotate3d(1,_3,_-2,_25deg)_skewX(15deg)]">
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
  );
}

export default MembershipCard;
