import * as React from "react"

const Footer = () => (
  <div className="w-full mb-20 text-md text-darkBlue text-opacity-50 flex flex-col sm:flex-row align-middle justify-between px-10">
    <span>Copyright © 2020 tempy.club</span>
    <div className='flex justify-between w-1/5 flex-col sm:flex-row'>
      <span>Privacy Policy</span>
      <span>Terms of Use</span>
      <span>GDPR</span>
    </div>
  </div>
)

export default Footer
