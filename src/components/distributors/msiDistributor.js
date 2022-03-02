import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function MsiDistributor() {
  const [selectedId, setSelectedId] = useState(false)
  const link = '../../images/fotos_marca/msi-logo.png'

  return (
    <motion.div className={"pt-2 flex flex-col items-center"}
                onHoverStart={()=>setSelectedId(true)} onHoverEnd={()=>setSelectedId(false)} >
      <Link to={"https://es.msi.com/"} target="_blank">
        <StaticImage className={"w-32 h-12 "} objectFit={"contain"} src={link}   alt={""}/>
      </Link>
      <div className={"w-auto h-auto"}>
        <AnimatePresence>
          {selectedId  && (
            <motion.div
              animate={{ scale:["0","100%"]}}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 ,scale:["100%","20%"]}}
              layoutId={selectedId} className={"text-lightgrey  h-auto  w-auto my-4 flex flex-col items-center"}>
              <motion.div className="grid grid-cols-2 gap-2 wrap">
                <motion.div
                  className="w-auto flex flex-col items-center justify-self-center text-primary text-sm ">
                  <div className="w-12 " >
                    <StaticImage src="../../images/components/laptop.png" alt="A kitten" />
                  </div>
                  <p className=" ml h-full flex items-center">Portátiles</p>
                </motion.div>
                <motion.div
                  className="w-auto flex flex-col items-center justify-self-center text-primary text-sm ">
                  <div className="w-12 " >
                    <StaticImage src="../../images/icons-distributors/gamepad.png" alt="A kitten" />
                  </div>
                  <p className=" ml h-full flex items-center">Gaming</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>  )
}

export default MsiDistributor

