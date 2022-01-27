import React from "react"

function Textfield({ label, htmlFor, placeholder,id, }) {
  return (
    <div>
      <label className="block text-white text-sm font-bold mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="shadow appearance-none border border-primary rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id} type="text" name={label} placeholder={placeholder}/>
    </div>
  )
}

export default Textfield
