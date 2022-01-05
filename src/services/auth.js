import { getAuth, onAuthStateChanged } from "firebase/auth"

export const isLoggedIn = () => {
  const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)

    } else {
      console.log("Usuario no loggeado")

    }
  });
   return false;
}

