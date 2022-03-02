import * as React from "react"

const Footer = () => (
  <div className="w-full mb-20 text-md text-white text-opacity-50 flex flex-col md:flex-row md:justify-between items-center px-10">
    <span>Copyright © 2022 Saentech</span>
    <div className='flex flex-col w-full items-center md:items-start w-1/5'>
      <span>Política de Privacidad</span>
      <span>Términos de uso</span>
      <span>GDPR</span>

    </div>
  </div>
)

export default Footer
