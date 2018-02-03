// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const apiDomain = 'to_be_determined';
const apiPort = 'tbd';

export const environment = {
  production: false,
  envName: 'dev',
  apiDomain: 'dev_api_domain',
  API: {
      LOGIN: `${apiDomain}/login`,
      REGISTER: `${apiDomain}/register`,
      IS_USERNAME_AVAILABLE: `${apiDomain}:${apiPort}/api/is-username-available`,
      LOGOUT: `${apiDomain}:${apiPort}/api/logout`,
      ARTICLES: `${apiDomain}:${apiPort}/api/reviews`,
      ARTICLE: `${apiDomain}:${apiPort}/api/review`,
      REMOVE_USER: `${apiDomain}:${apiPort}/api/user`
  }
};
