import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function EminentDistributor() {
  const [selectedId, setSelectedId] = useState(false)
  const link = '../../images/fotos_marca/eminent-logo.png'

  return (
    <motion.div className={"pt-2 flex flex-col items-center"}
                onHoverStart={()=>setSelectedId(true)} onHoverEnd={()=>setSelectedId(false)} >
      <Link to={"https://www.eminent-online.com/es-es/home"} target="_blank">
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
                    <StaticImage src="../../images/icons-distributors/keyboard.png" alt="A kitten" />
                  </div>
                  <p className=" ml h-full flex items-center">Perifericos</p>
                </motion.div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/headphones.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Audio</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/gamepad.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Gaming</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/cctv.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Video-vigilancia</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/wifi-router.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Networking</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/cable.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Cables y accesorios</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>  )
}

export default EminentDistributor
