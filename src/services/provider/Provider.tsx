import { PropsWithChildren } from 'react';
import { Context, Services } from './Context';

const { Provider } = Context;

export const ServicesProvider = ({ children, ...services }: PropsWithChildren<Services>) => {
  return <Provider value={services}>{children}</Provider>;
};
