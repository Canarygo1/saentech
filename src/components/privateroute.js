import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth"
import app from 'gatsby-plugin-firebase-v9.0'

const PrivateRoute = ({ component: Component, location, ...rest }) => {

  const auth = getAuth(app);
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
