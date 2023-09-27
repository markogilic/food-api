import React from 'react';

function LoadingImg({ result }) {
   return (
      <div className="src-img">
         <img src={`assets/${result}.jpeg`} alt={result} />
      </div>
   );
}

export default LoadingImg;
