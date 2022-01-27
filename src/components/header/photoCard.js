import React from "react"

function PhotoCard({ url ,key, onDelete}) {

  return (
    <div className={"flex flex-col items-center"}>
    <div key={key} className="h-20 bg-white w-56 rounded border" style={{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('${url}')` }}>
    </div>
      <button className={"mt-2 bg-error rounded-md text-md px-2 py-0.5 border"} onClick={()=>onDelete()}>
        Eliminar
      </button>
    </div>

  )
}

export default PhotoCard
