// COMPONENTS
import { SplashScreen } from 'src/components/loading-screen';

// AUTH
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

type Props = {
   children: React.ReactNode;
};

export const AuthConsumer = ({ children }: Props) => {
   return (
      <AuthContext.Consumer>
         {(auth) => (auth.loading ? <SplashScreen /> : children)}
      </AuthContext.Consumer>
   );
};
