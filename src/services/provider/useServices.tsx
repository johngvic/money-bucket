import { useContext } from 'react';
import { Context, Services } from './Context';

export const useServices = (): Services => {
  const context = useContext(Context);

  if (context == null) {
    throw new Error(
      'Could not find ServicesProvider in the context. Did you forget to wrap the app with <ServicesProvider>?',
    );
  }

  return context;
};
