import { S3_CONFIG } from './../config';

import S3FileUpload from 'react-s3/lib/ReactS3';

const s3BucketApi = {
  async insert(image) {
    const extension = image.name.slice(image.name.lastIndexOf('.'));
    const imageNew = new File(
      [image],
      `${Date.now()}_${Math.random()}${extension}`,
      { type: image.type }
    );

    const response = await S3FileUpload.uploadFile(imageNew, S3_CONFIG);
    return response.location;
  },
};

export default s3BucketApi;
