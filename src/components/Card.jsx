import React from "react";

function Card({monstie}) {
    const {nick, breed, rarity, attack} = monstie
    const HandleEdit = (e) =>{

    }
  return (
    <div className="bg-gray-50 p-8 m-5 ml-10 rounded-2xl">
      <p className="text-green-700 font-black  text-lg tracking-wide uppercase">
        nick:{" "}
        <span className="text-gray-800 font-semibold capitalize ">{nick}</span>
      </p>
      <p className="text-green-700 font-black  text-lg tracking-wide uppercase">
        Raza:{" "}
        <span className="text-gray-800 font-semibold capitalize ">{breed}</span>
      </p>
      <p className="text-green-700 font-black  text-lg tracking-wide uppercase">
        Rareza:{" "}
        <span className="text-gray-800 font-semibold capitalize ">{rarity}</span>
      </p>
      <p className="text-green-700 font-black  text-lg tracking-wide uppercase">
        Ataque:{" "}
        <span className="text-gray-800 font-semibold capitalize ">{attack}</span>
      </p>
      <div className="flex justify-between mt-4">
        <button 
          className="cursor-pointer py-3 px-5 bg-green-800 text-green-100 uppercase font-bold tracking-wide rounded-md hover:bg-green-100 hover:text-green-800"
          onClick={HandleEdit}
          >
          ✏ Edit
        </button>
        <button className="cursor-pointer py-3 px-5  text-red-600 uppercase font-bold tracking-wide rounded-md hover:bg-red-600 hover:text-red-100">
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
