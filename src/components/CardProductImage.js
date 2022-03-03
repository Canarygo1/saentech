import React from "react"

function CardProductImage({
                            url, name = "", classValue="card", onClick = () => {
  }
                          }) {
  return (
    <div className={`flex flex-col justify-end shadow-lg items-center bg-white px-2 ${classValue}`} onClick={() => onClick()}>
      <div className="w-full h-52 bg-secondary mt-6 " style={{
        backgroundColor: "white",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('${url}')`
      }}>
      </div>
      {name === "" || name === undefined ? null :

        <div className="bg-white min-w-full h-20  border-white rounded-lg shadow-lg text-black text-xs line-clamp-2">
          {name}
        </div>
      }

    </div>
  )
}

export default CardProductImage
