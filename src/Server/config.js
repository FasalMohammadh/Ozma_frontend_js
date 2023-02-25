export const SHOUTOUT_URL = 'https://api.getshoutout.com/otpservice/';
export const SERVER_URL = 'https://api.ozma.dottechsoftware.net';
export const S3_CONFIG = {
  bucketName: 'respect',
  dirName: 'ozma/',
  ACL: 'public-read',
  region: 'ap-south-1',
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
};
