import React from "react"
import Layout from "../../components/layout"
import SaentechProDetails from "../../components/saentechProDetails"

function Software(props) {
  let imagesLink = ["https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/Software-1.png?alt=media&token=12b8a3ac-1ac1-4586-b4f0-e9b2ca326cd6",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/Software-2.png?alt=media&token=e598dc4f-a52d-4efe-bbc0-22a401ea3348",
    "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/Software-3.png?alt=media&token=851c8167-25c1-4914-bae2-0dcc65fcbe23"]
  let title = "Software"
  let mainText = "Soluciones de Software vertical, horizontal y a medida para " +
    "mejorar el rendimiento de las empresas."
  return (
    <Layout>
      <SaentechProDetails tittle={title} mainText={mainText} images={imagesLink}/>
    </Layout>
  )
}

export default Software
