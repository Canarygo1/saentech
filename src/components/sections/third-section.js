import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import * as xml2js from "xml2js"
import CardProductImage from "../CardProductImage"

const ThirdSection = () => {
  let [productos,setProductos] = useState([]);

  useEffect(() => {
    async function getXML() {
      const getData = await axios.get("http://2001176:Teide02@pedidos.saentech.com/ogonlineapp/preciosxml/",
        {
          withCredentials: true
        })
      let response = await parseXml(getData.data)

      let localproductos = [...response.Catalogo.Producto]
      localproductos.sort(function(a,b) {
        let regex = new RegExp("None$");
        if (
          regex.test(a.Imagen) || regex.test(b.Imagen)
        ){
          console.log(a.Image)
          return 1
        }
        return 0.5 - Math.random()
      })
      localproductos =
      setProductos([...localproductos]);
      console.log(productos)

    }
    getXML();
  }, [])
  function parseXml(xml) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
  let background = "http://pedidos.saentech.com/ogonlineapp/imagenlobj/ACCESORIO%20022/alfombrilla-satycon-azul.jpg/";
  return (
    <div className="w-full  flex flex-col text-center text-white text-7xl bg-blue bg-opacity-10 pt-14" id={"third"}>
      <span className="leading-snug md:leading-normal mx-3 md:mx-0">Miles de productos al alcance de tu mano</span>
      <div className="mt-10 text-2xl flex flex-col">
        <span>Disponemos de mas de 500 metros cuadrados de almacen</span>
        <span>Tenemos productos de ultima genereacion</span>
      </div>
      <div className="self-center bg-primary rounded-full fit-content text-lg py-1 px-4 mx-3 mt-10">
        Conócenos
      </div>
     <div className="flex flex-wrap section-products justify-center">
        <div className="flex flex-col mr-6">
        <CardProductImage url={productos.length ===0 ?"":productos[0].Imagen}></CardProductImage>
        <CardProductImage url={productos.length ===0 ?"":productos[1].Imagen}></CardProductImage>
        <CardProductImage url={productos.length ===0 ?"":productos[2].Imagen}></CardProductImage>
        </div>
        <div className="flex flex-col mr-6 mt-28">
          <CardProductImage url={productos.length ===0 ?"":productos[3].Imagen}></CardProductImage>
          <CardProductImage url={productos.length ===0 ?"":productos[4].Imagen}></CardProductImage>
        </div>
        <div className="flex flex-col mr-6 mt-36">
          <CardProductImage url={productos.length ===0 ?"":productos[5].Imagen}></CardProductImage>
          <CardProductImage url={productos.length ===0 ?"":productos[6].Imagen}></CardProductImage>
        </div>
        <div className="flex flex-col mr-6 mt-44">
          <CardProductImage url={productos.length ===0 ?"":productos[7].Imagen}></CardProductImage>
          <CardProductImage url={productos.length ===0 ?"":productos[8].Imagen}></CardProductImage>
        </div>
        <div className="flex flex-col mt-24">
          <CardProductImage url={productos.length ===0 ?"":productos[9].Imagen}></CardProductImage>
          <CardProductImage url={productos.length ===0 ?"":productos[10].Imagen}></CardProductImage>

        </div>
      </div>
    </div>
  )
}

export default ThirdSection
