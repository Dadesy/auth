import { defineComponent } from 'vue';

import CardWrapper from '@/components/page/auth-page/CardWrapper/CardWrapper.vue';
import LoginForm from '@/components/page/auth-page/LoginForm/LoginForm.vue';

import { ILoginForm } from '@/components/page/auth-page/LoginForm/LoginForm.d';

import { useAuthStore } from '@/stores';
import { StoreStatus } from '@/api/enums/Statusses';
import { navigateTo } from 'nuxt/app';

export default defineComponent({
  name: 'LoginUser',

  components: {
    CardWrapper,
    LoginForm,
  },

  setup() {
    definePageMeta({
      layout: 'auth-layout',
    });

    const authStore = useAuthStore();
    const { $toast } = useNuxtApp();

    const onsubmit = async (data: ILoginForm): Promise<void> => {
      await authStore.loginUser(data);

      if (authStore.status === StoreStatus.ERROR) {
        $toast.error(authStore.error, {
          position: 'top-right',
        });

        return;
      }
      navigateTo('/HomePage');

      await $toast.success('Вы успешно Авторизовались!', {
        position: 'top-right',
      });
    };

    return {
      onsubmit,
    };
  },
});
