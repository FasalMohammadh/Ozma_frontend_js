import React, { useEffect, useState } from 'react';

const FileInput = React.forwardRef(({ placeholder, image, ...props }, ref) => {
  const previewImage = image?.item?.(0)
    ? URL.createObjectURL(image?.item?.(0))
    : null;
  const [preview, setPreview] = useState(previewImage);

  useEffect(() => {
    setPreview(image?.item?.(0) ? URL.createObjectURL(image?.item?.(0)) : null);
  }, [image]);

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
        />
      </label>
      {preview && (
        <img
          src={preview}
          alt='Preview'
          className=' mt-5 aspect-square max-w-[150px] rounded-sm object-cover ring-1 ring-custom-input'
        />
      )}
    </>
  );
});

FileInput.displayName = 'FileInput';

export default React.memo(FileInput);
