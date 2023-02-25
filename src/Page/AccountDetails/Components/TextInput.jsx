import React from 'react';

const TextInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className='border-b-2 border-custom-input pl-3'>
    <input
      type='text'
      className={`w-full font-poppins placeholder:font-poppins placeholder:text-sm placeholder:text-custom-input focus:outline-none ${
        className ?? ''
      }`}
      ref={ref}
      {...props}
    />
  </div>
));

TextInput.displayName = 'TextInput';

export default TextInput;
