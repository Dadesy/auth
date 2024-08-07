/**
 * * Public Routes *
 * Эти маршруты доступны всем пользователям, независимо от их статуса аутентификации.
 * Обычно включают страницы, доступные без входа в систему.
 */
export const PUBLIC_ROUTES = ['/'];

/**
 * * Authentication Routes *
 * Эти маршруты используются для страниц входа и регистрации.
 * Обычно доступны только неаутентифицированным пользователям.
 */
export const AUTH_ROUTES = [
  '/auth/LoginUser',
];

/**
 * * Default Login Redirect URL *
 * URL для перенаправления пользователя после успешной аутентификации.
 * Определяет, куда пользователя следует направить после входа в систему.
 */
export const DEFAULT_LOGIN_REDIRECT = '/HomePage';

export const LOGIN_PAGE = '/auth/LoginUser';
