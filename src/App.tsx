import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
   return (
         <QueryClientProvider client={queryClient}>
            <main>
               Food API
            </main>
         </QueryClientProvider>
   );
};

export default App;
