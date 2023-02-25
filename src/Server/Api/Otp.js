import axios from 'axios';

import { SHOUTOUT_URL } from './../config';

const otpApi = {
  async send(phoneNumber, signal) {
    if (/^(94)\d{9}/.test(phoneNumber)) {
      const response = await axios.post(
        `${SHOUTOUT_URL}/send`,
        {
          source: 'OZMA Digital',
          transport: 'sms',
          content: { sms: 'Your code is {{code}}' },
          destination: phoneNumber,
        },
        { signal }
      );
      return response.data;
    }
    throw new Error("phone number doesn't match the format");
  },

  async verify(code, referenceId) {
    const response = await axios.post(`${SHOUTOUT_URL}/verify`, {
      code,
      referenceId,
    });
    return response.data;
  },
};

export default otpApi;
