// ---------------------------------------------------------------------------
export type ActionMap<M extends { [index: string]: any }> = {
   [Key in keyof M]: M[Key] extends undefined
      ? {
           type: Key;
        }
      : {
           type: Key;
           payload: M[Key];
        };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
   loading: boolean;
   isAuthenticated: boolean;
   isInitialized: boolean;
   user: AuthUser;
   accessToken: string;
   tokenExpired: boolean;
};

export type JWTContextType = {
   loading: boolean;
   isAuthenticated: boolean;
   isInitialized: boolean;
   user: AuthUser;
   accessToken: string;
   tokenExpired: boolean;
   signIn: (email: string, password: string) => Promise<void>;
   signOut: () => Promise<void>;
   forgotPassword: (values: object) => Promise<void>;
   newPassword: (values: object) => Promise<void>;
   updateUser: (values: object) => Promise<void>;
};
