import { popMessage } from './';

export const errorHandler = (err) => {
  if (err && err.message) {
    popMessage(err.message, { type: 'error' });
  } else {
    popMessage(err.message, { type: 'error' });
  }
};
