import React, { useState } from 'react';

const FileInput = React.forwardRef(({ placeholder, ...props }, ref) => {
  const [image, setImage] = useState(null);

  return (
    <>
      <label className='flex h-6 cursor-pointer justify-between border-b-2 border-custom-input px-3 text-left font-poppins text-sm text-custom-input'>
        {placeholder}
        <input
          ref={ref}
          type='file'
          className={'hidden'}
          accept='.png,.jpeg,.jpg'
          {...props}
          onChange={event => {
            if (event.target.files?.length) {
              setImage(URL.createObjectURL(event.target.files[0]));
            }
            props.onChange?.(event);
          }}
        />
      </label>
      {image && (
        <img
          src={image}
          alt='Preview'
          className=' mt-5 aspect-square max-w-[150px] rounded-sm object-cover ring-1 ring-custom-input'
        />
      )}
    </>
  );
});

FileInput.displayName = 'FileInput';

export default React.memo(FileInput);
