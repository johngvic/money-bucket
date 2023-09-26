import { createContext } from 'react';
import { MoneyBucketService } from '../index'

export type Services = {
  moneyBucketService: MoneyBucketService
}

export const Context = createContext<Services>((undefined as unknown) as Services);
