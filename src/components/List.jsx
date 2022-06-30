import React from "react";
import Card from "./Card";

function List({ monsties, setmonstie, deleteMonstie }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-5">
      <h2 className="text-green-700 font-bold text-center text-xl  p-5">
        Monsties
      </h2>
      {monsties.length >   0 ? (
        <div>
          {monsties.map((monstie) => (
            <Card
              key={monstie.id}
              monstie={monstie}
              setmonstie={setmonstie}
              deleteMonstie={deleteMonstie}
            />
          ))}
        </div>
      ) : (
        <div className="bg-yellow-700 bg-opacity-80 text-gray-100 p-4 my-2 rounded-xl">
        <span className="py-2 px-3 bg-yellow-700 rounded-3xl mr-3">🤷‍♀️</span>
        No tienes monsties registrados todavía
      </div>
      )}
    </div>
  );
}
export default List;
