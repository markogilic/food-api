import { useEffect, useState } from 'react';

function ShowRanFood({ allFood }) {
   const imagePath = 'assets/';
   const extension = '.jpeg';
   const [ranNumber, setRanNumber] = useState(0);

   const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
   };

   useEffect(() => {
      setRanNumber(getRandomInt(allFood.length));
   }, []);


   return (
      <div>
         <h1>Random Food</h1>
         {/* <img src={imagePath + allFood[getRandomInt].slug + extension} alt={item.slug} /> */}
         {/* <h1>Random Fruit</h1>
         {fruit.map((item: any) => {
            return <p key={item.id}>{item}</p>;
         })} */}

         {/* <h1>Random Veg</h1>
         {veg.map((item: any) => {
            return <p key={item.id}>{item}</p>;
         })} */}
      </div>
   );
}

export default ShowRanFood;
