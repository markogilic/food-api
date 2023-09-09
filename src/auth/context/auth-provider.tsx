// REACT
import { ReactNode, useEffect, useReducer, useMemo } from 'react';

// TYPES
import { ActionMap, AuthState, AuthUser } from './types';

// AUTH
import { AuthContext } from './auth-context';

// UTILS
import axios, { endpoints } from 'src/utils/axios';
import { isValidToken, setSession } from './utils';

// ---------------------------------------------------------------------------

const INITIALIZE = 'INITIALIZE';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const UPDATE = 'UPDATE';

type AuthActionTypes = {
   [INITIALIZE]: {
      isAuthenticated: boolean;
      user: AuthUser;
      accessToken: string;
      tokenExpired: boolean;
   };
   [SIGN_IN]: {
      user: AuthUser;
      accessToken: string;
      tokenExpired: boolean;
   };
   [UPDATE]: {
      user: AuthUser;
   };
   [SIGN_OUT]: undefined;
};

const initialState: AuthState = {
   loading: true,
   isAuthenticated: true,
   isInitialized: false,
   user: null,
   accessToken: '',
   tokenExpired: false,
};

// ---------------------------------------------------------------------------
const JWTReducer = (
   state: AuthState,
   action: ActionMap<AuthActionTypes>[keyof ActionMap<AuthActionTypes>]
) => {
   switch (action.type) {
      case INITIALIZE:
         return {
            loading: false,
            isAuthenticated: action.payload.isAuthenticated,
            isInitialized: true,
            user: action.payload.user,
            accessToken: action.payload.accessToken,
            tokenExpired: action.payload.tokenExpired,
         };
      case SIGN_IN:
         return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            accessToken: action.payload.accessToken,
            tokenExpired: false,
         };
      case UPDATE:
         return {
            ...state,
            user: action.payload.user,
         };
      case SIGN_OUT:
         return {
            ...state,
            isAuthenticated: false,
            user: null,
            tokenExpired: false,
         };

      default:
         return state;
   }
};

// ---------------------------------------------------------------------------

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [state, dispatch] = useReducer(JWTReducer, initialState);

   useEffect(() => {
      const initialize = async () => {
         try {
            const accessToken = window.sessionStorage.getItem('accessToken');
            const siteId = window.sessionStorage.getItem('siteId');

            // TEMPORARY set siteId
            if (!siteId) {
               window.sessionStorage.setItem('siteId', 'ALGI-001');
            }

            if (accessToken && isValidToken(accessToken)) {
               setSession(accessToken, siteId);

               const response = await axios({
                  method: 'GET',
                  url: endpoints.auth.me,
                  headers: {
                     LogId: `${crypto.randomUUID()}`,
                     'Content-Type': 'application/json; charset=UTF-8',
                  },
               });

               const { status, message, user } = response.data;

               if (status === 101) {
                  dispatch({
                     type: INITIALIZE,
                     payload: {
                        isAuthenticated: false,
                        user: null,
                        accessToken: '',
                        tokenExpired: true,
                     },
                  });
               } else {
                  dispatch({
                     type: INITIALIZE,
                     payload: {
                        isAuthenticated: true,
                        user,
                        accessToken: accessToken,
                        tokenExpired: false,
                     },
                  });
               }
            } else {
               dispatch({
                  type: INITIALIZE,
                  payload: {
                     isAuthenticated: false,
                     user: null,
                     accessToken: '',
                     tokenExpired: true,
                  },
               });
            }
         } catch (err) {
            console.error(err);
            dispatch({
               type: INITIALIZE,
               payload: {
                  isAuthenticated: false,
                  user: null,
                  accessToken: '',
                  tokenExpired: false,
               },
            });
         }
      };

      initialize();
   }, []);

   // ---------------------------------------------------------------------------

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const signIn = async (email: string, password: string) => {
      const siteId = window.sessionStorage.getItem('siteId');

      const response = await axios({
         method: 'POST',
         url: endpoints.auth.login,
         headers: {
            LogId: `${crypto.randomUUID()}`,
            SiteId: `${siteId}`,
            'Content-Type': 'application/json; charset=UTF-8',
         },
         data: JSON.stringify({
            email,
            password,
         }),
      });

      const { status, message, accessToken, user } = response.data;

      if (status === 0) {
         setSession(accessToken, siteId);
         dispatch({
            type: SIGN_IN,
            payload: {
               user,
               accessToken,
               tokenExpired: false,
            },
         });

         return response.data;
      }
   };

   // ---------------------------------------------------------------------------

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const signOut = async () => {
      setSession(null, null);
      dispatch({ type: SIGN_OUT });
   };

   // ---------------------------------------------------------------------------

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const forgotPassword = async (values: object) => {
      const siteId = window.sessionStorage.getItem('siteId');

      const response = await axios({
         method: 'POST',
         url: endpoints.auth.resetPassword,
         headers: {
            LogId: `${crypto.randomUUID()}`,
            SiteId: `${siteId}`,
            'Content-Type': 'application/json; charset=UTF-8',
         },
         data: JSON.stringify(values),
      });

      return response.data;
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const newPassword = async (values: object) => {
      const siteId = window.sessionStorage.getItem('siteId');
      const response = await axios({
         method: 'POST',
         url: endpoints.auth.newPassword,
         headers: {
            LogId: `${crypto.randomUUID()}`,
            SiteId: `${siteId}`,
            'Content-Type': 'application/json; charset=UTF-8',
         },
         data: JSON.stringify(values),
      });

      return response.data;
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const updateUser = async (values: object) => {
      const siteId = window.sessionStorage.getItem('siteId');
      const response = await axios({
         method: 'POST',
         url: endpoints.auth.updateUser,
         headers: {
            LogId: `${crypto.randomUUID()}`,
            SiteId: `${siteId}`,
            'Content-Type': 'application/json; charset=UTF-8',
         },
         data: JSON.stringify(values),
      });

      const { status, message, accessToken, user } = response.data;

      if (status === 0) {
         setSession(accessToken, siteId);
         dispatch({
            type: UPDATE,
            payload: {
               user,
            },
         });
      }

      return response.data;
   };

   // ---------------------------------------------------------------------------

   const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

   const authStatus = state.loading ? 'loading' : checkAuthenticated;

   const memoizedValue = useMemo(
      () => ({
         ...state,
         loading: authStatus === 'loading',
         //
         signIn,
         signOut,
         forgotPassword,
         newPassword,
         updateUser,
      }),
      [signIn, signOut, forgotPassword, updateUser, state, authStatus]
   );

   // ---------------------------------------------------------------------------

   return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};
