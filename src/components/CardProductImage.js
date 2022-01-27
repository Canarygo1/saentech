import React from "react"

function CardProductImage({ url }) {
  return (
    <div className="card bg-secondary mt-6" style={{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('${url}')` }}>
    </div>
  )
}

export default CardProductImage
