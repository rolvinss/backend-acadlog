import { cleanEnv, email, host, num, port, str } from 'envalid';
/**
 * @method  validate a particular env.
 */
function validateEnv() {
  if (process.env.ACAD_ENV_ENV === 'production') {
    cleanEnv(process.env, {
      ACAD_ENV_PORT: port(),
      ACAD_ENV_ENV: str(),
      ACAD_ENV_DB_CONFIG_HOST: str(),
      ACAD_ENV_DB_CONFIG_PORT: num(),
      ACAD_ENV_DB_CONFIG_USER: str(),
      ACAD_ENV_DB_CONFIG_PASSWORD: str(),
      ACAD_ENV_DB_CONFIG_DB_NAME: str(),
      ACAD_ENV_DB_CONFIG_POOL_MIN: num(),
      ACAD_ENV_DB_CONFIG_POOL_MAX: num(),
      ACAD_ENV_EMAIL_DEFAULT_FROM: email(),
      ACAD_ENV_MAILGUN_API_KEY: str(),
      ACAD_ENV_MAILGUN_DOMAIN: host(),
      ACAD_ENV_SOCIALKEY_GOOGLE_CLIENT_ID: str(),
      ACAD_ENV_SOCIALKEY_GOOGLE_CLIENT_SECRET: str(),
      ACAD_ENV_SOCIALKEY_GOOGLE_CALLBACK_URL: str(),
      ACAD_ENV_SOCIALKEY_GITHUB_CLIENT_ID: str(),
      ACAD_ENV_SOCIALKEY_GITHUB_CLIENT_SECRET: str(),
      ACAD_ENV_SOCIALKEY_GITHUB_CALLBACK_URL: str(),
      ACAD_ENV_JWT_SECRET_KEY: str(),
      ACAD_ENV_LOG_FORMAT: str(),
      ACAD_ENV_CORS_ORIGIN: str(),
      ACAD_ENV_CORS_CREDENTIALS: str(),
      ACAD_ENV_EMAIL_PASSWORD_RESET_PAGE_URL: str(),
    });
  } else {
    cleanEnv(process.env, {
      ACAD_ENV_PORT: port(),
      ACAD_ENV_ENV: str(),
      ACAD_ENV_DB_CONFIG_HOST: str(),
      ACAD_ENV_DB_CONFIG_USER: str(),
      ACAD_ENV_DB_CONFIG_PASSWORD: str(),
      ACAD_ENV_DB_CONFIG_DB_NAME: str(),
      ACAD_ENV_DB_CONFIG_POOL_MIN: num(),
      ACAD_ENV_DB_CONFIG_POOL_MAX: num(),
      ACAD_ENV_EMAIL_DEFAULT_FROM: email(),
      ACAD_ENV_JWT_SECRET_KEY: str(),
      ACAD_ENV_LOG_FORMAT: str(),
      ACAD_ENV_CORS_ORIGIN: str(),
      ACAD_ENV_CORS_CREDENTIALS: str(),
      ACAD_ENV_EMAIL_PASSWORD_RESET_PAGE_URL: str(),
    });
  }
}

export default validateEnv;
