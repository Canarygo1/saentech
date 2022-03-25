import axios from "axios"

export const  getAllSection = async () => {
  const { data } = await axios.get('https://strapi-saentech-xsn8m.ondigitalocean.app/api/secciones?populate=*')
  return data;
}
export const getAllCarrouselImages = async () =>{
  const { data } = await axios.get('https://strapi-saentech-xsn8m.ondigitalocean.app/api/carrousel-imagenes?populate=*')
  const imgUrls = [];
  for (let i = 0;i<data.data.length;i++){
    imgUrls.push(data.data[i].attributes.Foto.data[0].attributes.url)
  }
console.log(imgUrls)
  return imgUrls
}
export const getAllCatalogos = async () =>{
  const { data } = await axios.get('https://strapi-saentech-xsn8m.ondigitalocean.app/api/catalogos?populate=*')
  let parseResponse = [];
  for (let i =0;i<data.data.length;i++){
    parseResponse.push({
      logo:data.data[i].attributes.logo.data.attributes.url,
      link:data.data[i].attributes.Link,
      web:data.data[i].attributes.Web,
      archivo:data.data[i].attributes.Archivo.data&&data.data[i].attributes.Archivo.data.attributes.url,
    })
  }

  return parseResponse
}
