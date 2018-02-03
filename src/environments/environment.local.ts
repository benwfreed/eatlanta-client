const apiDomain = 'http://0.0.0.0';
const apiPort = '8080';

export const environment = {
    production: false,
    envName: 'local',
    apiDomain: `${apiDomain}:${process.env.PORT} || 3000`,
    API: {
        LOGIN: `${apiDomain}:${apiPort}/api/login`,
        REGISTER: `${apiDomain}:${apiPort}/api/register`,
        IS_USERNAME_AVAILABLE: `${apiDomain}:${apiPort}/api/is-username-available`,
        LOGOUT: `${apiDomain}:${apiPort}/api/logout`,
        ARTICLES: `${apiDomain}:${apiPort}/api/reviews`,
        ARTICLE: `${apiDomain}:${apiPort}/api/review`,
        REMOVE_USER: `${apiDomain}:${apiPort}/api/user`
    }
};
