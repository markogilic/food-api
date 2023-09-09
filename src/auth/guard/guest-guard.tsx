// REACT
import { useCallback, useEffect } from 'react';

// ROUTES & ROUTING
import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

// AUTH
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
   children: React.ReactNode;
};

const GuestGuard = ({ children }: Props) => {
   const router = useRouter();

   const searchParams = useSearchParams();

   const returnTo = searchParams.get('returnTo') || paths.dashboard.root;

   const { isAuthenticated } = useAuthContext();

   const check = useCallback(() => {
      if (isAuthenticated) {
         router.replace(returnTo);
      }
   }, [isAuthenticated, returnTo, router]);

   useEffect(() => {
      check();
   }, [check]);

   return <>{children}</>;
};
export default GuestGuard;
