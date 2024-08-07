import { defineStore } from 'pinia';
import { isAxiosError } from 'axios';
import axios from '@/utils/axios.config';
import { HttpResponseStatusCode, StoreStatus } from '@/api/enums/Statusses';
import { navigateTo } from 'nuxt/app';

export interface ILoginForm {
  email: string,
  password: string,
}


interface AuthStore {
  user: object | null,
  status: StoreStatus,
  error: string | null,
}

export const useAuthStore = defineStore({
  id: 'auth',

  state: (): AuthStore => ({
    user: null,
    status: StoreStatus.IDLE,
    error: null,
  }),

  getters: {
    isAuthenticated: (state: AuthStore): boolean => !!state.user,
  },

  actions: {
    async loginUser(data: ILoginForm) {
      this.status = StoreStatus.LOADING;

      try {
        const response = await axios.post('/auth/signin', data);
        if (response.status === HttpResponseStatusCode.CREATED) {
          const { userId } = response.data;

          this.user = { userId };
          this.status = StoreStatus.IDLE;

          navigateTo('/HomePage');
        }
      } catch (error) {
        this.status = StoreStatus.ERROR;
        if (isAxiosError(error)) {
          this.error = error.response?.data?.cause || 'Unknown error';
        }
      }
    },

    logout() {
      localStorage.removeItem(USER_ID);

      this.user = null;
      this.status = StoreStatus.IDLE;
      this.error = null;

      navigateTo('/HomePage');
    },
  },
});
