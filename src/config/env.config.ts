/* eslint-disable prettier/prettier */

export const EnvConfig = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB_URI,
});
