import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      console.log("Usuario no loggeado")
      navigate("/app/login")
    }
  });
  return <Component {...rest} />



}

export default PrivateRoute
