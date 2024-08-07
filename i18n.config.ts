export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: {
      authPage: {
        loginForm: {
          title: 'Добро пожаловать  👋',
          subTitle:
            'Сегодня новый день. Это твой день. Ты его формируешь. Войди, чтобы начать управлять своими проектами.',
          form: {
            email: {
              title: 'Почта',
              placeholder: 'Example@email.com',
            },
            password: {
              title: 'Пароль',
              placeholder: 'Пароль должен содержать 8 символов',
            },
          },
          errors: {
            required: 'Поле {field} обязательно для заполнения.',
            email:
              'Поле {field} должно быть действительным электронным адресом.',
            min: 'Поле {field} должно содержать не менее {length} символов.',
          },
        },
      },
    },
  },
}));
