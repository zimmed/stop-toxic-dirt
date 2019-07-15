import * as React from 'react';
import { IState, DEFAULTS } from './types';

const StateContext = React.createContext(DEFAULTS);

export default StateContext;

export const useContext = (): IState => React.useContext(StateContext);
