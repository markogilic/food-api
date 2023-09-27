import React from 'react';
import { useState, useRef } from 'react';
import LoadingImg from './LoadingImg';

function SearchFood({ foodLIst }) {
   const [search, setSearch] = useState('');
   const [result, setResult] = useState('');
   const inputRef = useRef(null);
   const handleChange = (e) => {
      setSearch(e.target.value);
   };
   //    const filteredFood = foodLIst.filter((item) => {
   //       return item.includes(search);
   //    });
   const filteredFood = () => {
      const food = foodLIst.filter((item) => {
         return item.includes(search);
      });
      setResult(food[0]);
      inputRef.current.value = '';
   };

   return (
      <>
         <h2>Search Food</h2>
         <div className="search">
            {result === undefined ? <h2>No food match</h2> : <LoadingImg result={result} />}

            <div className="src-form">
               <input
                  type="text"
                  placeholder="Type some food"
                  onChange={handleChange}
                  ref={inputRef}
               />
               <button onClick={filteredFood}> Search</button>
            </div>
         </div>
      </>
   );
}

export default SearchFood;
