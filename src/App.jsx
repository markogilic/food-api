import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ShowRanFood from './component/ShowRanFood';
import NavBar from './component/NavBar';
import SearchFood from './component/SearchFood';
// import ShowRanFood from './component/ShowRanFood';

// const imagePath = 'assets/';
// const extension = '.jpeg';

const App = () => {
   const [foods, setFood] = useState({});
   const [foodLIst, setFoodList] = useState([]);

   // const [veg, setVeg] = useState([] as any);
   // const [fruit, setFruit] = useState([] as any);

   useEffect(() => {
      console.log('YO. FIRE');

      axios
         .get('http://localhost:3500/food')
         .then((res) => {
            setFood(res.data);
            const data = res.data;
            return data;
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
   useEffect(() => {
      if (Object.keys(foods).length !== 0) {
         foods.veg.map((item) => {
            setFoodList((prev) => [...prev, item.slug]);
         });
         foods.fruit.map((item) => {
            setFoodList((prev) => [...prev, item.slug]);
         });
      }
   }, [foods]);

   return (
      // <QueryClientProvider client={queryClient}>
      <main>
         {Object.keys(foods).length !== 0 && (
            <>
               <NavBar />
               <ShowRanFood foodLIst={foodLIst} />
               <SearchFood foodLIst={foodLIst} />
            </>
         )}
      </main>
      // </QueryClientProvider>
   );
};

export default App;
