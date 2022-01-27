import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { useEffect, useState } from "react"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import * as xml2js from 'xml2js';


const FirstSection = () => {
  const [images, setImages] = useState([]);
  const images2= [];
  const [selectedId, setSelectedId] = useState(null)
  let productos = [];

  useEffect(async () => {

    async function getImages() {
      const db = getFirestore();
      const docRef = doc(db, "galeria", "imagenes");
      const docSnap = await getDoc(docRef);
      let imgName = docSnap.data().url
      console.log(docSnap.data())

      for (let i = 0; i < imgName.length; i++) {
        const storage = getStorage();
        const starsRef = await ref(storage, imgName[i]);
        const url = await getDownloadURL(starsRef)
        images2.push(
          <div>
            <img src={url} alt="A kitten" className={"h-36 md:h-auto"} />
          </div>,
        );
      }
      setImages(images2)
    }

    getImages()

  },[])
  return <div className={"flex flex-col justify-center items-center"}>
    <div className={"visible w-9/12 "}>
      <Carousel showThumbs={false} showStatus={false}>
        {images}
      </Carousel>
    </div>
    <Separator dataHeigth="100px" dataWidth="1px" />
    <div
      className="first-section w-full text-white flex items-end xl:items-start justify-center xl:justify-start h-100 xl:h-110">
      <div className="w-auto flex flex-col content-first-section fit-content hidden xl:flex">
        <Separator dataHeigth="270px" dataWidth="1px" />
        <span className="my-2">
        Lanza tu negocio con los
      </span>
        <span className="my-4">
        mejores productos
      </span>
        <span className="text-white text-xl my-5">
        Para todo el mundo desde pequenos hasta grandes clientes
      </span>
        <div className="flex text-lg">
          <div className="bg-primary rounded-full text-black py-1 px-4 mx-3">
            Contáctanos
          </div>

          <div className="bg-white rounded-full text-black py-1 px-4 mx-3">
            Nuestras Ventajas
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-primary rounded-2xl text-black py-3 px-4 flex xl:hidden justify-center fixed bottom-4">
        Contáctanos
      </div>
    </div>
    <div className={"md:w-2/3 mt-6 flex flex-row justify-between"}>
      <motion.div className={"pt-2"} onMouseEnter={()=>setSelectedId("Asus")} >
        <StaticImage src="../../images/marcas/Asus.png" alt="A kitten" />
      </motion.div>
      <motion.div className={"pt-2"} onMouseEnter={()=>setSelectedId("Brother")} >
        <StaticImage src="../../images/marcas/Brother.png" alt="A kitten" />
      </motion.div>
      <motion.div className={"pt-2"} onMouseEnter={()=>setSelectedId("Lenovo")} >
        <StaticImage src="../../images/marcas/Lenovo.png" alt="A kitten" />
      </motion.div>
      <motion.div className={"pt-2"} onMouseEnter={()=>setSelectedId("Microsoft")} >
        <StaticImage src="../../images/marcas/Microsoft.png" alt="A kitten" />
      </motion.div>
      <motion.div className={"w-28 pt-2"} onMouseEnter={()=>setSelectedId("Samsung")} >
        <StaticImage className={"object-cover"} src="../../images/marcas/Samsung.png" alt="A kitten" />
      </motion.div>
    </div>
    <AnimatePresence>
      {selectedId  && (
        <motion.div
          animate={{ width: "100%"}}
          transition={{ duration: 0.5 }}
          layoutId={selectedId} className={"text-lightgrey border rounded border-primary h-56  w-auto my-4 flex flex-col items-center"}>
          <motion.h2>{selectedId}</motion.h2>
          <motion.p className="text-md">Disponemos de un amplo catalago de la marca {selectedId}</motion.p>
          <motion.div className="flex flex-row gap-2 ">
            <div className="w-auto flex flex-row text-primary text-lg ">
              <div className="w-12 ">
                <StaticImage src="../../images/components/laptop.png" alt="A kitten" />
              </div>
              <p className=" ml h-full flex items-center">Portátiles</p>
            </div>
            <div className="w-auto flex flex-row text-primary text-lg ">
              <div className="w-12 ">
                <StaticImage src="../../images/components/motherboard.png" alt="A kitten" />
              </div>
              <p className=" h-full flex items-center">Placas Base</p>
            </div>
            <div className="w-auto flex flex-row text-primary text-lg ">
              <div className="w-12 ">
                <StaticImage src="../../images/components/power-supply.png" alt="A kitten" />
              </div>
              <p className=" h-full flex items-center">Fuentes de Alimentación</p>
            </div>
          </motion.div>
          <motion.button className=" border border-primary rounded w-20  mb-6" onClick={()=>setSelectedId(null)}>Cerrar</motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
}

export default FirstSection
