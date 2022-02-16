import React from "react"
import Layout from "../../components/layout"
import SaentechProDetails from "../../components/saentechProDetails"

function AudioVisual(props) {
  let imagesLink = ["https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-1.png?alt=media&token=b456f739-4668-4ece-8d3b-69d59939debc",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-2.png?alt=media&token=2360f6e0-0cb4-4020-8106-75f751219923", "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-3.png?alt=media&token=8db2b4fc-040d-4836-8fc8-8b067538fd8a",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-4.png?alt=media&token=5733c9ce-2bc4-4831-954f-813abce995dd", "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-5.png?alt=media&token=04e0de6b-dbb9-4747-a0a0-c7c205303dc0",
  "https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/audiovisual-6.png?alt=media&token=f0a53366-3011-40c0-bc37-8c42445028b8"]
  let title = "Audiovisuales"
  let mainText = "Montajes de salas y sistemas audiovisuales y/o videoconferencias."
  return (
    <Layout>
      <SaentechProDetails title={title} mainText={mainText} images={imagesLink}/>
    </Layout>
  )
}

export default AudioVisual
