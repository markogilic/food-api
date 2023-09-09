// REACT
import { useEffect, useCallback, useState } from 'react';

// ROUTE & ROUTING
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

// AUTH
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
   children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
   console.log('FIRE');
   const router = useRouter();

   const { isAuthenticated } = useAuthContext();

   const [checked, setChecked] = useState(false);

   const check = useCallback(() => {
      console.log('isAuthenticated:', isAuthenticated);
      if (!isAuthenticated) {
         const searchParams = new URLSearchParams({
            returnTo: window.location.pathname,
         }).toString();

         const loginPath = paths.auth.login;

         const href = `${loginPath}?${searchParams}`;

         router.replace(href);
      } else {
         setChecked(true);
      }
   }, [isAuthenticated, router]);

   useEffect(() => {
      check();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (!checked) {
      return null;
   }

   return <>{children}</>;
};

export default AuthGuard;
