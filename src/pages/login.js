import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import firebase from "firebase/compat"


const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <div className="flex flex-col justify-center h-screen bg-blue-700 items-center">
      <form className="bg-white  w-full md:w-auto rounded-lg px-20 pt-6 pb-8 mb-4">
        <div className={"flex flex-row items-center justify-center"}>
        <StaticImage
          className={""}
          src="./../../images/logo.png"
          width={63}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Constraseña
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password} onChange={e=>setPassword(e.target.value)}
            id="password" type="password" placeholder="******************"/>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
  async function login(){
    try {
      await firebase.login(email, password)
    }catch (error){
      alert(error)
    }
  }
}

export default Login
