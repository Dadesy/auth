module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // Примеры строгих правил для TypeScript
    '@typescript-eslint/explicit-function-return-type': 'warn', // Требует указания типа возвращаемого значения функций
    '@typescript-eslint/no-explicit-any': 'error', // Запрещает использование типа 'any'
    '@typescript-eslint/no-unused-vars': 'warn', // Предупреждает о переменных, объявленных, но не используемых
    '@typescript-eslint/strict-null-checks': 'off', // Если вы хотите включить строгую проверку на null, вам нужно это сделать через tsconfig, а не через ESLint
    '@typescript-eslint/type-annotation-spacing': 'warn', // Требует консистентных пробелов в аннотациях типов
    'no-console': process.env.NUXT_NODE_ENV === 'production' ? 'warn' : 'off', // Запрещает использование console в продакшене
    'no-debugger': process.env.NUXT_NODE_ENV === 'production' ? 'warn' : 'off', // Запрещает использование debugger в продакшене

    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ], // Использовать одинарные кавычки
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        // Настройка стилей для интерфейсов и типов
        multiline: {
          delimiter: 'comma', // Используйте запятые для многострочных объявлений
          requireLast: true, // Требовать запятую после последнего элемента
        },
        singleline: {
          delimiter: 'comma', // Используйте запятые для однострочных объявлений
          requireLast: false, // Не требовать запятую после последнего элемента в однострочных объявлениях
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'comma', // Запятые для многострочных интерфейсов
              requireLast: true,
            },
            singleline: {
              delimiter: 'comma', // Запятые для однострочных интерфейсов
              requireLast: false,
            },
          },
        },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
};
