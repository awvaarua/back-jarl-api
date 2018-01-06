import {BackJarlApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BackJarlApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new BackJarlApiApplication(options);

  try {
    await app.start();
  } catch (err) {
    console.error(`Unable to start application: ${err}`);
  }
  return app;
}
