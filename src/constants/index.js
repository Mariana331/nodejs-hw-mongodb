import path from 'node:path';

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export const REQUEST_PASSWORD_RESET_TEMPLATE = path.join(
  process.cwd(),
  'src',
  'templates',
);
