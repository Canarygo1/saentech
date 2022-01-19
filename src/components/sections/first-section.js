import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { useEffect, useState } from "react"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import axios from "axios"



const FirstSection = () => {
  const [images, setImages] = useState([]);
  const images2= [];

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
            <img src={url} alt="A kitten" className={"h-36 md:h-auto "} />
          </div>,
        );

      }
      setImages(images2)
    }
    async function getXML(){
    const getData = await axios.get("http://2001176:Teide02@pedidos.saentech.com/ogonlineapp/preciosxml/",
      {
        headers: {
        },
      });
      console.log(getData.headers)
    }

    // getImages()
    getXML()

  },[])
  return <div className={"flex flex-col justify-center items-center"}>
    <div className={"visible w-9/12 "}>
      <Carousel showThumbs={false} showStatus={false}>
        {images}
      </Carousel>
    </div>

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
      <div>

      </div>

    </div>
    <div className={"w-2/3 mt-6 flex flex-row justify-between"}>
      <div>
        <StaticImage src="../../images/marcas/Asus.png" alt="A kitten" />
      </div>
      <div>
        <StaticImage src="../../images/marcas/Brother.png" alt="A kitten" />
      </div>
      <div>
        <StaticImage src="../../images/marcas/Lenovo.png" alt="A kitten" />
      </div>
      <div>
        <StaticImage src="../../images/marcas/Microsoft.png" alt="A kitten" />
      </div>
      <div className={"w-28"}>
        <StaticImage className={"object-cover"} src="../../images/marcas/Samsung.png" alt="A kitten" />
      </div>
    </div>
  </div>
}

export default FirstSection
