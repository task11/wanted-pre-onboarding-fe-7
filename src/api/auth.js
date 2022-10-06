import { axios } from "../lib/axios";

import { ACCESS_TYPE } from "../constants";

export const API_AUTH = {
  userSign: async function (accessType, body = {}) {
    return await axios.post(
      `/auth/${accessType === ACCESS_TYPE.LOGIN ? 'signin' : 'signup'}`,
      body,
    );
  },
};
