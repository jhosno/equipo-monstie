import React, { useState, useEffect } from "react";
import Errors from "./Errors";

const Form = ({ monsties, setmonsties, monstie, setmonstie }) => {
  const [nick, setnick] = useState("");
  const [breed, setbreed] = useState("");
  const [rarity, setrarity] = useState("");
  const [trends, settrends] = useState("");

  const [error, seterror] = useState(false);
  useEffect(() => {
    if (Object.keys(monstie).length > 0) {
      setnick(monstie.nick);
      setbreed(monstie.breed);
      setrarity(monstie.rarity);
      settrends(monstie.trends);
    }
  }, [monstie]);
  //generar ID único
  const idGenerator = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  //handleSubmit recibe la variable e/event que es el resultado del form
  const handleSubmit = (e) => {
    //para evitar que la página se recargué al anviar el form
    e.preventDefault();

    const addMonstie = {
      nick,
      breed,
      rarity,
      trends,
    };
    //ahora preguntamos sí los campos están vacíos
    //Para eso usamos las variables de useState que representan cada uno de los inputs
    if ([nick, breed, rarity, trends].includes("")) {
      //los metemos en un array y con la function includes, preguntamos si hay alhuna variable vacía

      //Ahora que ya validamos debemos mostrarle al usuario que faltana campos
      seterror(true);
      return;
    }
    seterror(false);

    if (monstie.id) {
      //Edit
      console.log("Update");
      addMonstie.id = monstie.id;
      const updateMonstie = monsties.map((monstieState) =>
        monstieState.id === addMonstie.id ? addMonstie : monstieState
      );
      setmonsties(updateMonstie);
      setmonstie({});
    } else {
      //Create
      console.log("Add");
      addMonstie.id = idGenerator();
      //Agregamos el nuevo objeto con los valores del monstie
      setmonsties([...monsties, addMonstie]);
    }

    //resetea el form
    setnick("");
    setbreed("");
    setrarity("");
    settrends("");
  };
  return (
    
    <div className="md:w-1/2 lg:w-2/5 mb-5">
      <h2 className="text-green-700 font-bold text-center text-xl  p-5">
        Agrega tu nuevo monstie
      </h2>
      <form
        className="bg-gray-50 p-8 m-5 ml-10 rounded-2xl"
        //sin parentesis porque entonces llamas directamente la función y  se va a ejecutar automáticamente a cada rato
        onSubmit={handleSubmit}
      >
        <div className="my-6">
          <label
            htmlFor="nick"
            className="block text-gray-700 font-semibold uppercase"
          >
            Nickname
          </label>
          <input
            type="text"
            name="nick"
            value={nick}
            id="nick"
            onChange={(e) => setnick(e.target.value)}
            className="w-full  p-2 border-2 rounded-lg"
          />
        </div>
        {/* <div className="my-6">
            <label htmlFor="species" 
            className="block text-gray-700 font-semibold uppercase"
            >Especie</label>
            <input type="text" name="species" id="species" 
            className="w-full  p-2 border-2 rounded-lg"/>
          </div> */}
        <div className="my-6">
          <label
            htmlFor="breed"
            className="block text-gray-700 font-semibold uppercase"
          >
            Raza
          </label>
          <input
            type="text"
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setbreed(e.target.value)}
            className="w-full  p-2 border-2 rounded-lg"
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="rarity"
            className="block text-gray-700 font-semibold uppercase"
          >
            Rareza
          </label>
          <input
            type="number"
            min="1"
            max="9"
            name="rarity"
            value={rarity}
            id="rarity"
            onChange={(e) => setrarity(e.target.value)}
            className="w-full  p-2 border-2 rounded-lg"
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="trend"
            className="block text-gray-700 font-semibold uppercase"
          >
            Tendencia de ataque
          </label>
          <select
            name="trends"
            id="trends"
            value={trends}
            onChange={(e) => settrends(e.target.value)}
            className="w-full  p-2 border-2 rounded-lg"
          >
            <option value="">Selecciona una opción</option>
            <option value="power">Potente</option>
            <option value="speed">Ágil</option>
            <option value="technique">Técnico</option>
          </select>
        </div>
        {error ? <Errors message="You must be fill all inputs" /> : null}
        <div className="flex justify-items-end">
          <input
            className="bg-green-900 rounded-md shadow-3xl border-3 border-white text-green-100 py-2 px-4 font-semibold uppercase 
          hover:text-green-900 hover:bg-green-300 cursor-pointer"
            type="submit"
            value={monstie.id ? "✏ Edit" : "➕ Agregar"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
