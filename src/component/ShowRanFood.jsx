import { useEffect, useState } from 'react';

function ShowRanFood({ foods, foodLIst }) {
   const imagePath = 'assets/';
   const extension = '.jpeg';

   const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
   };

   return (
      <div className="random-food">
         <h1>The serviette</h1>
         {foodLIst && (
            <img
               src={imagePath + foodLIst[getRandomInt(foodLIst.length)] + extension}
               alt={foodLIst[getRandomInt(foodLIst.length)]}
            />
         )}
      </div>
   );
}

export default ShowRanFood;
