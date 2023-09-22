import { useEffect, useState } from 'react';

function ShowRanFood({ allFood }: { allFood: any[] }) {
   const imagePath = 'assets/';
   const extenstion = '.jpeg';
   const [ranNumber, setRanNumber] = useState(0);

   const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * max);
   };
   useEffect(() => {
      setRanNumber(getRandomInt(allFood.length));
   }, []);
   console.log(ranNumber);
   console.log(allFood[ranNumber]);
   return (
      <div>
         <h1>Random Food</h1>
         <img src={imagePath + allFood[ranNumber] + extenstion} />
         {/* <img src={imagePath + allFood[getRandomInt].slug + extenstion} alt={item.slug} /> */}
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
