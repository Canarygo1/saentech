import React, { useCallback, useEffect, useState } from "react"
import AdminHeader from "../../components/header/adminHeader"
import PhotoCard from "../../components/header/photoCard"
import { useDropzone } from 'react-dropzone'
import { uploadFromBlobAsync } from "../../util/firebase"
import { StaticImage } from "gatsby-plugin-image"
import { doc, getDoc, getFirestore, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import app from 'gatsby-plugin-firebase-v9.0'


function Home(props) {
  const db = getFirestore(app);
  const docImages = doc(db, "galeria", "imagenes");

  const [images, setImages] = useState([{ name:"1.jpeg",url:"" },{ name:"2.jpeg",url:"" },{ name:"3.jpeg",url:"" },{ name:"4.jpeg",url:"" }]);
  const [changes, setChanges]=useState(false);
  useEffect(()=>{

  getImages();
  },[]);

  async function getImages(){
    setImages([]);
    const docSnap = await getDoc(docImages);
    let imgName = docSnap.data().url
    console.log(imgName);
    for (let i = 0; i < imgName.length; i++) {
      const storage = getStorage(app);
      const starsRef = await ref(storage, imgName[i]);
      const url = await getDownloadURL(starsRef)
      let image = { name:imgName[i], url:url}
      setImages(oldArray=>[...oldArray,image])
    }
  }

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0]
    if (!file) {
      return
    }
    try {
      console.log(file.name)
      await uploadFromBlobAsync({
        blobUrl: file,
        name: file.name,
      })
      await updateDoc(docImages, {
        url: arrayUnion(file.name)
      });
      await getImages();
    } catch (e) {
      console.log(e)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


  async function deleteItem(value) {
    const docRef = doc(db, "galeria", "imagenes");

    setChanges(true)
    setImages(images.filter(e => e.name !== value))
    console.log("Borrado" + value)

    await updateDoc(docImages, {
      url: arrayRemove(value)
    });


  }

  return (
    <AdminHeader>
      <div className={"text-blackFont"}>
        Inicio
        <div className="bg-black h-px rounded border mt-2"></div>
      </div>
      <div className="w-full min-h-96 h-auto bg-black rounded-lg border mt-8 bg-lightgrey">
        <div className="px-6 pt-4 min-h-full h-auto mb-6">
          <div className="flex flex-row items-center h-1/6">
            <a className={"text-lg text-blackFont"}>Galeria</a>
            <button className="bg-primary ml-3 text-white font-bold text-md px-2.5 py-1 rounded">
              Guardar
            </button>
            {changes?<a className="text-error text-md ml-3">Cambios sin guardar</a>:null}
          </div>
        <div className="flex flex-row h-5/6">
          <div className="w-2/3 h-auto grid grid-cols-2 gap-2 mt-9">
            {images.map((value)=>{
              return (<PhotoCard key={"value"} url={value.url} onDelete={()=>deleteItem(value.name)}/>)
            })}
          </div>
          <div className="bg-white text-blackFont text-md border-white rounded-lg w-1/3 h-3/4 ">
            <div className="w-full h-full flex flex-col items-center" {...getRootProps()}>
              <input {...getInputProps()} />
              <StaticImage className="w-1/2 max-h-3/4" src={"../../images/cloud-computing.png"} alt={"Subir imagen"}/>
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Arrastra y suelta archivos aquí</p>
              )}

            </div>
          </div>
        </div>
        </div>
      </div>
    </AdminHeader>
  )
}

export default Home
