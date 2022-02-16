import React from "react"
import Layout from "../../components/layout"
import SaentechProDetails from "../../components/saentechProDetails"

function Network(props) {
  let imagesLink = ["https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/network-5.png?alt=media&token=f6248069-5ef8-4b11-9fb1-d51047a521a7",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/network-4.png?alt=media&token=84be603f-ba9a-4c61-af35-3c6af2dc00ff",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/network-3.png?alt=media&token=a0962724-6b98-4af7-a9e4-7e712f1cd85f",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/network-2.png?alt=media&token=a9c95afb-d59f-43a6-af2d-15dc1e04ec1a",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/network-1.png?alt=media&token=73a39fa3-9e0b-4560-90ee-ecef6634a219"]
  let title = "Redes"
  let mainText = "Instalación de redes,cámaras de videovigilancia, " +
    "cableado y equipos de telecomunicaciones."
  return (
    <Layout>
      <SaentechProDetails title={title} mainText={mainText} images={imagesLink}/>
    </Layout>
  )
}

export default Network
