import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
import app from 'gatsby-plugin-firebase-v9.0'

export const uploadFromBlobAsync = async ({ blobUrl, name }) => {
  if (!blobUrl || !name) return null
  try {
    const storage = getStorage(app);
    const storageRef = ref(storage, name);

    uploadBytes(storageRef, blobUrl).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    return ""
  } catch (error) {
    throw error
  }
}
