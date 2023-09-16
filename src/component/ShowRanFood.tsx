function ShowRanFood(veg: any) {
   console.log(veg);
   return (
      <div>
         {/* <h1>Random Fruit</h1>
         {fruit.map((item: any) => {
            return <p key={item.id}>{item}</p>;
         })} */}

         <h1>Random Veg</h1>
         {veg.map((item: any) => {
            return <p key={item.id}>{item}</p>;
         })}
      </div>
   );
}

export default ShowRanFood;
