import React from 'react';

import BackgroundImage from './../../Assets/Images/Background.svg';
import LogoImage from './../../Assets/Images/Logo.png';

const MainLayout = ({ children }) => (
  <div
    className='flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat pb-24'
    style={{ backgroundImage: `url('${BackgroundImage}')` }}
  >
    {children}
    <img
      src={`${LogoImage}`}
      alt='Logo'
      className='fixed bottom-0 right-0 w-24 rounded-md bg-white p-4 lg:w-40'
    />
  </div>
);

export default React.memo(MainLayout);
