import { defineComponent } from 'vue';
import * as Yup from 'yup';

import { ILoginForm } from '@/components/page/auth-page/LoginForm/LoginForm.d';

export default defineComponent({
  setup(props, { emit }) {
    const validationSchema = Yup.object({
      email: Yup.string()
        .required('Поле обязательно для заполнения.')
        .email('Поле email должно быть действительным электронным адресом.'),
      password: Yup.string().required('Поле обязательно для заполнения.').min(8,'Пароль должен содержать 8 символов'),
    });

    const onSubmit = (data: ILoginForm): void => {
      emit('on-submit', { formData: data });
    };

    return {
      validationSchema,
      onSubmit,
    };
  },
});
