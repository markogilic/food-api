import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowRanFood from './component/ShowRanFood';

const queryClient = new QueryClient();

const App = () => {
   const [foods, setFood] = useState({} as any);
   // const [veg, setVeg] = useState([] as any);
   // const [fruit, setFruit] = useState([] as any);
   const [allFood, setAllFood] = useState([] as any);
   useEffect(() => {
      axios
         .get('http://localhost:3500/food')
         .then((res) => setFood(res.data))
         .catch((err) => console.log(err));
   }, []);
   // console.log(items.veg);
   // const veg = items.veg;
   // console.log(items.food.veg);
   useEffect(() => {
      if (Object.keys(foods).length !== 0) {
         // setFruit(foods.fruit);
         // setVeg(foods.veg);
         foods.fruit.map((item: any) => {
            setAllFood((prev: any) => [...prev, item.slug]);
         });
         foods.veg.map((item: any) => {
            setAllFood((prev: any) => [...prev, item.slug]);
         });
      }
   }, [foods]);
   // console.log(items.fruit);
   // console.log(foods);
   // console.log(Object.keys(foods).length !== 0);
   // console.log(fruit);
   // const chekObject = function (obj: any) {
   //    return Object.keys(obj).length !== 0;
   // };

   // console.log(fruit[0].title);

   return (
      <QueryClientProvider client={queryClient}>
         <main>
            {allFood.length !== 0 && <ShowRanFood allFood={allFood} />}
            {/* {fruit?.map((item: any) => (
               <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={imagePath + item.slug + extenstion} alt={item.slug} />
               </div>
            ))} */}
            {/* {Object.keys(foods).length !== 0 && <ShowRanFood {{veg,fruit}: foods} />} */}
            {/* {veg && <ShowRanFood veg={veg} />} */}
            {/* {foods &&
               foods.veg.map((item: any) => {
                  return <p key={item.id}>{item.title}</p>;
               })} */}
            {/* {chekObject(foods) &&
               foods.veg.map((item: any) => {
                  return (
                     <div key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={imagePath + item.slug + extenstion} alt={item.slug} />
                     </div>
                  );
               })} */}
            {/* {veg?.map((item: any) => (
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
