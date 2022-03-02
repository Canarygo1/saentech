import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function AlcatelDistributor() {
  const [selectedId, setSelectedId] = useState(false)
  const link = '../../images/fotos_marca/apple-logo.png'

  return (
    <motion.div className={"pt-2 flex flex-col items-center"}
                onHoverStart={()=>setSelectedId(true)} onHoverEnd={()=>setSelectedId(false)} >
      <Link to={"https://www.apple.com/es/"} target="_blank">
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
                  <p className=" ml h-full flex items-center">MacBooks</p>
                </motion.div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/smartwatch.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Apple Watch</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/computer-desktop.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Macs</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/tablet.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Ipads</p>
                </div>
                <div className="w-auto flex flex-col items-center text-primary text-sm ">
                  <div className="w-12 ">
                    <StaticImage src="../../images/icons-distributors/smartphone.png" alt="A kitten" />
                  </div>
                  <p className=" h-full flex items-center">Iphone</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>  )
}

export default AlcatelDistributor
