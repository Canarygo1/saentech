import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";

export const uploadFromBlobAsync = async ({ blobUrl, name }) => {
  if (!blobUrl || !name) return null
  try {
    const storage = getStorage();
    const storageRef = ref(storage, name);

    uploadBytes(storageRef, blobUrl).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    return ""
  } catch (error) {
    throw error
  }
}
