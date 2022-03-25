import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function GigasetDistributor() {
  const [selectedId, setSelectedId] = useState(false)
  const link = '../../images/fotos_marca/Gigaset-logo.png'

  return (
    <motion.div className={"pt-2 flex flex-col items-center"}
                onHoverStart={()=>setSelectedId(true)} onHoverEnd={()=>setSelectedId(false)} >
      <Link to={"https://www.gigaset.com/es_es/"} target="_blank">
        <StaticImage className={"w-32 h-12 "} objectFit={"cover"} src={link}   alt={""}/>
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
                    <StaticImage src="../../images/icons-distributors/phone.png" alt="A kitten" />
                  </div>
                  <p className=" ml h-full flex items-center">Telefonía</p>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>  )
}

export default GigasetDistributor
