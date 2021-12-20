import React from 'react'

function Errors({message}) {
    return (    
      <div className="bg-red-700 bg-opacity-80 text-gray-100 p-4 my-2 rounded-xl">
        <span className="py-2 px-3 bg-red-700 rounded-3xl mr-3">❕</span>
        {message}
      </div>
        
    )
}

export default Errors
