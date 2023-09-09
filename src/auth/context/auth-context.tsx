// REACT
import { createContext } from 'react';

// TYPES
import { JWTContextType } from './types';

// ---------------------------------------------------------------------------
export const AuthContext = createContext({} as JWTContextType);
