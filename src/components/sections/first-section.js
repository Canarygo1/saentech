import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { useEffect, useState } from "react"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc,getFirestore } from "firebase/firestore";

import AsusDistributor from "../distributors/AsusDistributor"
import BrotherDistributor from "../distributors/brotherDistributor"
import LenovoDistributor from "../distributors/lenovoDistributor"
import MicrosoftDistributor from "../distributors/microsoftDistributor"
import SamsungDistributor from "../distributors/samsungDistributor"
import app from "gatsby-plugin-firebase-v9.0"
import { Link } from "gatsby"
import Slider from "react-slick";


const FirstSection = () => {
  const [images, setImages] = useState([]);
  const images2= [];
  const [selectedId, setSelectedId] = useState(null)
  let productos = [];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  useEffect(async () => {

    async function getImages() {
      const db = getFirestore(app);
      const docRef = doc(db, "galeria", "imagenes");
      const docSnap = await getDoc(docRef);
      let imgName = docSnap.data().url

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
      className="first-section w-full  flex items-end xl:items-start justify-center xl:justify-start h-100 xl:h-110">
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
           <Link to={"contacto"}>Contáctanos</Link>
          </div>
          <div className="bg-white rounded-full text-black py-1 px-4 mx-3">
            <Link to={"#second-section"}>Nuestras Ventajas</Link>

          </div>
        </div>
      </div>
        <div className="border-2 border-primary rounded-full xl:hidden justify-center flex fixed bottom-4 text-black w-60 h-14 xl:hidden flex flex-row">
          <a href="https://goo.gl/maps/ascJ6JSLR8sDrFef6" className="h-full w-1/2 bg-primary border-l-2 rounded-l-full border-primary flex items-center justify-center">
            <StaticImage
              src="./../../images/pin.png"
              width={24}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </a>
          <a href="tel:+34922616266"  className="h-full w-1/2 border-l-2 rounded-r-full border-primary flex items-center justify-center bg-black">
            <StaticImage
              src="./../../images/phone-call.png"
              width={24}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </a>
      </div>
    </div>
    <Slider {...settings} className={"text-white invisible lg:visible md:w-2/3 mt-6 flex flex-row justify-between"}>
        <div>
          <AsusDistributor/>
        </div>
        <div>
            <BrotherDistributor/>
        </div>
        <div>
            <LenovoDistributor/>
        </div>
        <div>
            <MicrosoftDistributor/>
        </div>
        <div>
            <SamsungDistributor/>
        </div>

    </Slider>
  </div>
}

export default FirstSection
