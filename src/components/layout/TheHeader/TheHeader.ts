import { useAuthStore } from '@/stores';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const authStore = useAuthStore();
    const getReduction = computed(() => props.email.slice(0, 2));

    const logout = (): void => {
      authStore.logout();
    };

    return {
      getReduction,
      logout,
    };
  },
});
