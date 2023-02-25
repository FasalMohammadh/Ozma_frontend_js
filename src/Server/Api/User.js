import axios from 'axios';

import { SERVER_URL } from './../config';

const userApi = {
  async create(user) {
    return await axios.post(`${SERVER_URL}/user`, user);
  },
};

export default userApi;
