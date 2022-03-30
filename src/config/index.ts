/*
How to add config:
1. define a config here using the right nested object
2. add the environment variable in .env.sample file
3. define the type of the environment variable in validateEnv, IF the variable is required
*/

// RYAN: we still need to use config to control all the environment variables
// 1. For organization using nested objects
// 2. For value control (default, computed)
// 3. For security
import validateEnv from './validateEnv';

validateEnv();

export default {
  appPort: process.env.ACAD_ENV_PORT || 5000,
  nodeEnv: process.env.ACAD_ENV_ENV || 'development',
  logFormat: process.env.ACAD_ENV_LOG_FORMAT,
  cors: {
    allowAnyOrigin: process.env.ACAD_ENV_CORS_ORIGIN === 'true' ? Boolean(process.env.ACAD_ENV_CORS_ORIGIN) : process.env.ACAD_ENV_CORS_ORIGIN,
    credentials: process.env.ACAD_ENV_CORS_CREDENTIALS === 'true',
  },
  email: {
    defaultFrom: process.env.ACAD_ENV_EMAIL_DEFAULT_FROM || 'info@nexclipper.io',
    verification: {
      verityPageURL: process.env.ACAD_ENV_EMAIL_VERIFICATION_PAGE_URL,
    },
    invitation: {
      from: process.env.ACAD_ENV_EMAIL_DEFAULT_FROM || 'info@nexclipper.io',
    },
    passwordReset: {
      resetPageURL: process.env.ACAD_ENV_EMAIL_PASSWORD_RESET_PAGE_URL,
    },
    mailgun: {
      apiKey: process.env.ACAD_ENV_MAILGUN_API_KEY,
      domain: process.env.ACAD_ENV_MAILGUN_DOMAIN,
    },
  },
  db: {
    mysql: {
      host: process.env.ACAD_ENV_DB_CONFIG_HOST,
      port: Number(process.env.ACAD_ENV_DB_CONFIG_PORT),
      user: process.env.ACAD_ENV_DB_CONFIG_USER,
      password: process.env.ACAD_ENV_DB_CONFIG_PASSWORD,
      dbName: process.env.ACAD_ENV_DB_CONFIG_DB_NAME,
      poolMin: Number(process.env.ACAD_ENV_DB_CONFIG_POOL_MIN),
      poolMax: Number(process.env.ACAD_ENV_DB_CONFIG_POOL_MAX),
    },
  },
  auth: {
    jwtSecretKey: process.env.ACAD_ENV_JWT_SECRET_KEY,
  },
  socialKey: {
    github: {
      clientID: process.env.ACAD_ENV_SOCIALKEY_GITHUB_CLIENT_ID,
      clientSecret: process.env.ACAD_ENV_SOCIALKEY_GITHUB_CLIENT_SECRET,
      callbackUrl: process.env.ACAD_ENV_SOCIALKEY_GITHUB_CALLBACK_URL,
    },
    google: {
      clientID: process.env.ACAD_ENV_SOCIALKEY_GOOGLE_CLIENT_ID,
      clientSecret: process.env.ACAD_ENV_SOCIALKEY_GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.ACAD_ENV_SOCIALKEY_GOOGLE_CALLBACK_URL,
    },
  },
};
