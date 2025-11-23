export interface EnvironmentConfig {
  baseUrl: string;
  timeout: number;
  headless: boolean;
  slowMo: number;
  viewport: {
    width: number;
    height: number;
  };
}

export const environments = {
  development: {
    baseUrl: 'https://www.saucedemo.com',
    timeout: 30000,
    headless: true,
    slowMo: 0,
    viewport: {
      width: 1280,
      height: 720
    }
  },
  staging: {
    baseUrl: 'https://www.saucedemo.com',
    timeout: 60000,
    headless: true,
    slowMo: 0,
    viewport: {
      width: 1280,
      height: 720
    }
  },
  production: {
    baseUrl: 'https://www.saucedemo.com',
    timeout: 60000,
    headless: true,
    slowMo: 0,
    viewport: {
      width: 1280,
      height: 720
    }
  }
};

export const getEnvironmentConfig = (): EnvironmentConfig => {
  const env = process.env.NODE_ENV || 'development';
  return environments[env as keyof typeof environments] || environments.development;
};
