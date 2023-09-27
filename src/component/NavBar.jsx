import React from 'react';

function NavBar() {
   return (
      <div className="nav-bar">
         <div className="logo">
            <h1>The serviette</h1>
         </div>
         <div className="nav-links">
            <ul>
               <li>Home</li>
               <li>Random</li>
               <li>Search</li>
            </ul>
         </div>
      </div>
   );
}

export default NavBar;
