import { createContext } from 'react';

export type ContextProductType = {
  contextProductCount: number;
  setContextProductCount: (contextProductCount: number) => void;
}

export const ContextProductCount = createContext<ContextProductType>({
  contextProductCount: 0,
  setContextProductCount: () => {}
});