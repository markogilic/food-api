import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axios from 'axios';

const queryClient = new QueryClient();
const imagePath = 'assets/';
const extenstion = '.jpeg';

const App = () => {
   const [items, setItems] = useState([]);
   const [veg, setVeg] = useState({} as any);
   useEffect(() => {
      axios
         .get('http://localhost:3500/food')
         .then((res) => setItems(res.data))
         .catch((err) => console.log(err));
   }, []);
   console.log(items);
   useEffect(() => {
      setVeg(items.veg);
   }, []);
   console.log(veg);
   return (
      <QueryClientProvider client={queryClient}>
         <main>
            {/* {veg.map((item: any) => (
               <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={imagePath + item.slug + extenstion} alt={item.slug} />
               </div>
            ))} */}
         </main>
      </QueryClientProvider>
   );
};

export default App;
