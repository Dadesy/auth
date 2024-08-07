import axios from 'axios';

import { HttpResponseStatusCode } from '@/api/enums/Statusses';
import { navigateTo } from 'nuxt/app';
import { LOGIN_PAGE } from '@/constants/route';

const instance = axios.create({
  baseURL: '',
});

instance.interceptors.request.use(
  config => {

    return config;
  },
  error => {
    if (error.response.status === HttpResponseStatusCode.UNAUTHORIZED) {
      navigateTo(LOGIN_PAGE);
    }

    return Promise.reject(error);
  },
);

export default instance;
