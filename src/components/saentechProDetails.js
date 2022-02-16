import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function SaentechProDetails({ title="Software" ,mainText="" ,images=[""]}) {
  return (
    <div className={"mx-8 lg:mx-44"}>
    <div className={"h-full w-full min-h-screen text-white w-auto flex flex-col"}>
      <p className="text-3xl">{title}</p>
      <p>{mainText}</p>
      <div>
        Algunos de los servicios realizados:
        <div className="flex flex-wrap mt-8 gap-5">
          {
            images.map((value,i) => {
              return (
                <AnimatePresence>
                <motion.div

                  animate={{ transform:["translateX(-400px)","translateX(-0px)"]}}
                  transition={{ duration: 1 }}
                  className={"w-80 rounded-lg h-56 bg-white"}  style={{
                  backgroundColor:'white',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url('${value}')` }}/>
                </AnimatePresence>
              )
            })
          }
        </div>
      </div>
    </div>
    </div>

  )
}

export default SaentechProDetails
