import * as React from "react"
import { useEffect, useState } from "react"
import * as xml2js from "xml2js"
import CardProductImage from "../CardProductImage"
import DetailProduct from "../detailProduct"
import { doc, getDocs, getFirestore, collection, getDoc } from "firebase/firestore"
import app from "gatsby-plugin-firebase-v9.0"

const ThirdSection = () => {
  let [products, setProducts] = useState([])
  let [detailProduct, setDetailProduct] = useState()
  let [detailIsOpen, setDetailIsOpen] = useState(false)

  function randomArray(length) {
    const n = length

    const arr = []

    if (n == 0) {
      console.log(null)
    }

    do {

      const randomNumber = Math
        .floor(Math.random() * 99) + 1

      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber)
      }

    } while (arr.length < n)
    return arr
  }

  useEffect(() => {
    async function getXML() {
      console.log("Test");
      let localproductos = [];
      const db = getFirestore(app);
      let randomArrayForQuery = randomArray(19, 99)
      console.log(randomArrayForQuery);
      for (let i = 0; i < randomArrayForQuery.length; i++) {
        const docRef = doc(db, "productos", randomArrayForQuery[i].toString());
        const docSnap = await getDoc(docRef)
        localproductos.push(docSnap.data())
        console.log(docSnap.data())
      }

      // const querySnapshot = await getDocs(collection(db, "productos"));
      // querySnapshot.forEach((doc) => {
      //   localproductos.push(doc.data());
      //   // console.log(`${doc.id} => ${doc.data()}`);
      // });
      localproductos = setProducts([...localproductos])
      // setProducts([...localproductos])

    }

    getXML()
  }, [])
  const openDetail = (product) => {
    console.log(product)
    setDetailProduct(product)
    setDetailIsOpen(true)
  }
  const closeDetail = () => {
    setDetailIsOpen(false)
    setDetailProduct({})
  }

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

  let background = "http://pedidos.saentech.com/ogonlineapp/imagenlobj/ACCESORIO%20022/alfombrilla-satycon-azul.jpg/"
  return (
    <div>
      <div className="w-full  flex flex-col text-center text-white  text-7xl  bg-opacity-10 pt-14" id={"third"}>
        <span className="leading-snug md:leading-normal mx-3 md:mx-0">Miles de productos al alcance de tu mano</span>
        <div className="mt-10 text-2xl flex flex-col">
          <span>Disponemos de mas de 500 metros cuadrados de almacén</span>
          <span>Tenemos productos de última generación</span>
        </div>
        <div className="self-center bg-primary rounded-full fit-content text-lg py-1 px-4 mx-3 mt-10">
          Conocenos
        </div>
        <div>
        </div>
        <div className="flex flex-wrap lg:ml-4 mt-4 items-center section-products justify-center gap-4 mx-2">

          <CardProductImage url={products.length === 0 ? "" : products[1].Url}
                            name={products.length === 0 ? "" : products[1].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[1])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[2].Url}
                            name={products.length === 0 ? "" : products[2].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[2])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[3].Url}
                            name={products.length === 0 ? "" : products[3].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[3])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[4].Url}
                            name={products.length === 0 ? "" : products[4].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[4])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[5].Url}
                            name={products.length === 0 ? "" : products[5].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[5])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[6].Url}
                            name={products.length === 0 ? "" : products[6].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[6])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[7].Url}
                            name={products.length === 0 ? "" : products[7].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[7])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[8].Url}
                            name={products.length === 0 ? "" : products[8].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[8])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[9].Url}
                            name={products.length === 0 ? "" : products[9].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[9])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[10].Url}
                            name={products.length === 0 ? "" : products[10].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[10])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[11].Url}
                            name={products.length === 0 ? "" : products[11].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[11])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[12].Url}
                            name={products.length === 0 ? "" : products[12].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[12])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[13].Url}
                            name={products.length === 0 ? "" : products[13].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[13])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[14].Url}
                            name={products.length === 0 ? "" : products[14].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[14])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[15].Url}
                            name={products.length === 0 ? "" : products[15].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[15])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[16].Url}
                            name={products.length === 0 ? "" : products[16].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[16])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[17].Url}
                            name={products.length === 0 ? "" : products[17].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[17])}
          />
          <CardProductImage url={products.length === 0 ? "" : products[18].Url}
                            name={products.length === 0 ? "" : products[18].NombreCorto}
                            onClick={products.length === 0 ? () => {
                            } : () => openDetail(products[18])}
          />
        </div>
      </div>
      {detailIsOpen ? <DetailProduct product={detailProduct} onClose={() => closeDetail()} /> : null}
    </div>
  )
}

export default ThirdSection
