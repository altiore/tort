let localConfig: {
  BASE_URL: string;
};

localConfig = require('./dev');

export const config = localConfig;
