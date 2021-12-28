import React from "react";
import Card from './Card';

function List({monsties}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-5">
      <h2 className="text-green-700 font-bold text-center text-xl  p-5">
        Estos son los monsties de tu equipo
      </h2>
        {monsties.map((monstie) =>(
          <Card 
            monstie={monstie}
            
          />  
        ))}
    </div>
  );
  }
export default List;
