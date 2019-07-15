import { Dispatch, SetStateAction } from 'react';

export const CONFIG = {
  zoom: {
    min: 0.5,
    max: 3.0,
    step: 0.25,
    default: 1.0,
  },
};

export interface IState {
  zoom: number;
}

export type Data = {
  [k in keyof typeof CONFIG]: [
    typeof CONFIG[k]['default'],
    Dispatch<SetStateAction<typeof CONFIG[k]['default']>>
  ]
};

export const DEFAULTS: IState = Object.entries(CONFIG).reduce(
  (accum: Partial<IState>, [key, value]): Partial<IState> => ({
    ...accum,
    [key]: value.default,
  }),
  {}
) as IState;
