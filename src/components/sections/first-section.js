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
import AcerDistributor from "../distributors/AcerDistributor"
import AlcatelDistributor from "../distributors/alcatelDistributor"
import AppleDistributor from "../distributors/AppleDistributor"
import CecotecDistributor from "../distributors/cecotecDistributor"
import CrossCallDistributor from "../distributors/crossCallDistributor"
import CrucialDistributor from "../distributors/crucialDistributor"
import EminentDistributor from "../distributors/eminentDistributor"
import FellowDistributor from "../distributors/fellowesDistributor"
import GigasetDistributor from "../distributors/gigasetDistributor"
import HpDistributor from "../distributors/HpDistributor"
import InjooDistributor from "../distributors/injooDistributor"
import KingstonDistributor from "../distributors/kingstonDistributor"
import LogitechDistributor from "../distributors/LogitechDistributors"
import LLinkDistributor from "../distributors/L-linkDitributor"
import MsiDistributor from "../distributors/msiDistributor"
import PolyDistributor from "../distributors/polyDistributor"
import SeagateDistributor from "../distributors/segeateDistributor"
import Toshibaistributor from "../distributors/toshibaDistributor"
import TpLinkDistributor from "../distributors/Tp-Link"
import XiaomiDistributor from "../distributors/xiaomiDistributor"
import CarrouselSlider from "../carrouselSlider"



const FirstSection = () => {
  const [images, setImages] = useState([]);
  const images2= [];
  const [selectedId, setSelectedId] = useState(null)
  let productos = [];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    // cssEase: "linear"
  };

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useEffect(async () => {

    async function getImages() {
      const db = getFirestore(app);
      const docRef = doc(db, "galeria", "imagenes");
      const docSnap = await getDoc(docRef);
      let imgName = shuffle(docSnap.data().url);

      for (let i = 0; i < imgName.length; i++) {
        const storage = getStorage();
        const starsRef = await ref(storage, imgName[i]);
        const url = await getDownloadURL(starsRef)
        images2.push(
            <img src={url} alt="A kitten" className={"h-44 max-h-44 xl:h-64 xl:max-h-64 md:h-auto object-contain"}/>
        );
      }
      setImages(images2)
    }

    getImages()

  },[])
  return <div className={"flex flex-col justify-center items-center"}>
    <div className={"visible w-9/12 "}>
      <CarrouselSlider >
        {images}
      </CarrouselSlider>
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
        Para todo el mundo desde pequeños hasta grandes clientes
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
        <div className="border-2 border-primary  rounded-full   xl:hidden justify-center flex fixed bottom-4 text-black w-full h-14 xl:hidden flex flex-row">
          <a href="https://goo.gl/maps/ascJ6JSLR8sDrFef6" className="h-full w-1/2 bg-primary border-l-2 rounded-l-full border-primary flex items-center justify-center">
            <StaticImage
              src="./../../images/pin.png"
              width={24}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </a>
          <a href="tel:+34922616266"  className="h-full w-1/2  border-l-2 rounded-r-full border-primary flex items-center justify-center bg-black">
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
      <div>
            <AcerDistributor/>
        </div>
      <div>
        <AlcatelDistributor/>
      </div>
      <div>
        <AppleDistributor/>
      </div>
      <div>
        <HpDistributor/>
      </div>
      <div>
        <CrucialDistributor/>
      </div>
      <div>
            <CecotecDistributor/>
        </div>
      <div>
        <InjooDistributor/>
      </div>

      <div>
        <EminentDistributor/>
      </div>
      <div>
        <CrossCallDistributor/>
      </div>
      <div>
        <FellowDistributor/>
      </div>
      <div>
        <GigasetDistributor/>
      </div>
      <div>
        <KingstonDistributor/>
      </div>
      <div>
        <LogitechDistributor/>
      </div>
      <div>
        <LLinkDistributor/>
      </div>
      <div>
        <MsiDistributor/>
      </div>
      <div>
        <PolyDistributor/>
      </div>
      <div>
        <SeagateDistributor/>
      </div>
      <div>
        <Toshibaistributor/>
      </div>
      <div>
        <TpLinkDistributor/>
      </div>
      <div>
        <XiaomiDistributor/>
      </div>
    </Slider>
  </div>
}

export default FirstSection
