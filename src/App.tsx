import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import ShowRanFood from './component/ShowRanFood';

const queryClient = new QueryClient();
// const imagePath = 'assets/';
// const extenstion = '.jpeg';

const App = () => {
   const [foods, setFood] = useState({} as any);
   // const [veg, setVeg] = useState([] as any);
   // const [fruit, setFruit] = useState([] as any);
   useEffect(() => {
      axios
         .get('http://localhost:3500/food')
         .then((res) => setFood(res.data))
         .catch((err) => console.log(err));
   }, []);
   // console.log(items.veg);
   // const veg = items.veg;
   // console.log(items.food.veg);
   // useEffect(() => {
   //    setFruit(items.fruit);
   // }, []);
   // console.log(items.fruit);
   console.log(foods.veg);

   return (
      <QueryClientProvider client={queryClient}>
         <main>
            {/* {fruit?.map((item: any) => (
               <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={imagePath + item.slug + extenstion} alt={item.slug} />
               </div>
            ))} */}
            {/* {Object.keys(foods).length !== 0 && <ShowRanFood {{veg,fruit}: foods} />} */}
            {/* {veg && <ShowRanFood veg={veg} />} */}
            {foods &&
               foods.veg.map((item: any) => {
                  return <p key={item.id}>{item.title}</p>;
               })}
         </main>
      </QueryClientProvider>
   );
};

export default App;
