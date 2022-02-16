import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

function MicrosoftDistributor() {
  const [selectedId, setSelectedId] = useState(false)
  const link = '../../images/marcas/Microsoft.png'

  return (
    <motion.div className={"pt-2 flex flex-col items-center"}
                onHoverStart={()=>setSelectedId(true)} onHoverEnd={()=>setSelectedId(false)} >
      <div className={"w-32 "}>
        <StaticImage src={link}   alt={""}/>
      </div>
      <div className={"w-auto h-auto"}>
        <AnimatePresence>
          {selectedId  && (
            <motion.div
              animate={{ scale:["0","100%"]}}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 ,scale:["100%","20%"]}}
              layoutId={selectedId}  className={"text-lightgrey  h-auto  w-auto my-4 flex flex-col items-center"}>
              <motion.div className="grid grid-cols-2 gap-2 wrap">
                <motion.div
                  className="w-auto flex flex-col items-center justify-self-center text-primary text-sm ">
                  <div className="w-12 " >
                    <StaticImage src="../../images/components/laptop.png" alt="A kitten" />
                  </div>
                  <p className=" ml h-full flex items-center">Portátiles</p>
                </motion.div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/tablet.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Tablets</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>  )
}

export default MicrosoftDistributor
