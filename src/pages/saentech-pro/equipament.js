import React from "react"
import Layout from "../../components/layout"
import SaentechProDetails from "../../components/saentechProDetails"

function Equipament(props) {
  let imagesLink = ["https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-1.png?alt=media&token=5c2323e8-de60-4ec2-b2f3-cadf21ba8d6b",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-2.png?alt=media&token=586c499d-f1b6-433a-a7da-e22ec04101c2",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-3.png?alt=media&token=f9565bad-a6d7-406d-96ee-4322a9822a6b",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-4.png?alt=media&token=7b35f1f1-0ee1-40a7-b95e-719030de39d4",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-5.png?alt=media&token=400e8375-90a4-44c5-8923-b038700e0fac",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/equipament-6.png?alt=media&token=558f16bd-01c8-4a31-96e8-d1e3f9c64a70"]
  let title = "Equipamiento"
  let mainText = "Equipos informáticos y de impresión adecuados a cada entorno de trabajo."
  return (
    <Layout>
      <SaentechProDetails title={title} mainText={mainText} images={imagesLink}/>
    </Layout>
  )
}

export default Equipament
