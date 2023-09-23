import { useState, useEffect } from 'react';
import axios from 'axios';
// import ShowRanFood from './component/ShowRanFood';

// const imagePath = 'assets/';
// const extension = '.jpeg';

const App = () => {
   const [foods, setFood] = useState({});
   // const [veg, setVeg] = useState([] as any);
   // const [fruit, setFruit] = useState([] as any);

   useEffect(() => {
       console.log('YO. FIRE');

       axios
           .get('http://localhost:3456/food')
           .then((res) => {
               setFood(res.data);
           })
           .catch((err) => console.log(err));

       // // declare the async data fetching function
       // const fetchData = async () => {
       //     // get the data from the api
       //     const data = await fetch('http://localhost:3456/food');
       //     // convert the data to json
       //     const json = await data.json();
       //
       //     console.log(json);
       //     // set state with the result
       //     // setData(json);
       // }
       //
       // // call the function
       // fetchData()
       //     // make sure to catch any error
       //     .catch(console.error);

   }, []);

   return (
      // <QueryClientProvider client={queryClient}>
         <main>
            {/* {fruit?.map((item: any) => (
               <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={imagePath + item.slug + extension} alt={item.slug} />
               </div>
            ))} */}
            {/* {Object.keys(foods).length !== 0 && <ShowRanFood {{veg,fruit}: foods} />} */}
            {/* {veg && <ShowRanFood veg={veg} />} */}
            {foods &&
               foods.veg.map((item) => <p key={item.id}>{item.title}</p>)}
         </main>
      // </QueryClientProvider>
   );
};

export default App;
