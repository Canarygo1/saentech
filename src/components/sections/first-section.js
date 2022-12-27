import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react"
import AsusDistributor from "../distributors/AsusDistributor"
import BrotherDistributor from "../distributors/brotherDistributor"
import LenovoDistributor from "../distributors/lenovoDistributor"
import MicrosoftDistributor from "../distributors/microsoftDistributor"
import SamsungDistributor from "../distributors/samsungDistributor"
import { Link } from "gatsby"
import Slider from "react-slick";
import "animate.css/animate.min.css";

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
import { getAllCarrouselImages } from "../../api/api"



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
    speed: 4000,
    autoplaySpeed: 1500,
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
    let imgUrl = await getAllCarrouselImages();
      for (let i =0;i< imgUrl.length;i++){
          images2.push(
              <img src={imgUrl[i]} alt="" className={"h-100 max-h-100 xl:h-full w-full xl:max-h-160 md:h-160 object-contain"}/>
          );
    }
    setImages(images2)
    }

    getImages()

  },[])
  return <div className={"flex flex-col justify-center items-center"}>
    <div className={"visible w-11/12"}>
      <CarrouselSlider >
        {images}
      </CarrouselSlider>
    </div>
    <Separator dataHeigth="100px" dataWidth="1px" />
    <div
      className="mr-8 first-section w-full  flex items-end xl:items-start justify-center xl:justify-start h-100 xl:h-110">
      <div className="w-auto flex flex-col content-first-section text-white fit-content hidden xl:flex">
        <Separator dataHeigth="270px" dataWidth="1px" />
        <span className="my-2 ">
        Lanza tu negocio con los
      </span>
        <span className="my-4">
        mejores productos
      </span>
        <span className="text-white text-xl my-5">
        Mayorista canario de productos tecnológicos para<br/> negocios grandes y pequeños.
      </span>
        <div className="flex text-lg items-start mt-4">
            <Link className={'bg-primary rounded-lg text-black py-2 px-28 text-white'} to={"contacto"}>Contáctanos</Link>
        </div>
        <div className={'flex gap-2 mt-8'}>
            <div className={'flex flex-row gap-2 h-16 m-0 justify-center items-center'}>
              <div className={'h-5/6 bg-white w-0.5'}></div>
              <div className={'flex h-full flex-col  justify-evenly'}  >
                <p className={'text-3xl m-0 font-bold '}>500m²<span>+</span></p>
                <p className={'text-sm m-0'}>Miles de productos</p>
              </div>
            </div>
          <div className={'flex flex-row gap-2 h-16 m-0 justify-center items-center'}>
            <div className={'h-5/6 bg-white w-0.5'}></div>
            <div className={'flex h-full flex-col  justify-evenly'}  >
              <p className={'text-3xl m-0 font-bold '}>Stock propio</p>
              <p className={'text-sm m-0'}>Disponibles para recogida en 24h</p>
            </div>
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
