import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "../../.cache/gatsby-browser-entry"


const IndexPage = () => {

  useEffect(() => {

  })
  return <Layout>
    <Seo title="cookies" />
    <div className={"mx-10 mt-28 md:mt-0 min-h-screen w-full mx-6"}>
      <span className="text-3xl text-white">Política Cookies</span>
      <br />
      <span className={"text-white text-md"}>En esta web recopilamos y utilizamos la información según indicamos en nuestra política de privacidad. Una de las formas en las que recopilamos información es a través del uso de la tecnología llamada “cookies”.<br /><br />
      ¿Qué es una cookie?<br />
      Una “cookie” es una pequeña cantidad de texto que se almacena en tu navegador (como Chrome de Google o Safari de Apple) cuando navegas por la mayoría de los sitios web.<br /><br />

      ¿Qué no es una cookie?<br />
      No es un virus, ni un troyano, ni un gusano, ni spam, ni spyware, ni abre ventanas pop-up.<br /><br />

      ¿Qué información almacena una cookie?<br />
      Las cookies no suelen almacenar información sensible sobre usted, como tarjetas de crédito o datos bancarios, fotografías o información personal, etc. Los datos que guardan son de carácter técnico, estadísticos, preferencias personales, personalización de contenidos, etc.<br />
      El servidor web no le asocia a usted como persona sino a su navegador web. De hecho, si usted navega habitualmente con el navegador Chrome y prueba a navegar por la misma web con el navegador Firefox, verá que la web no se da cuenta que es usted la misma persona porque en realidad está asociando la información al navegador, no a la persona.<br /><br />

      ¿Qué tipo de cookies existen?<br />
      Cookies técnicas: Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, cuándo navega un usuario anónimo y uno registrado, tareas básicas para el funcionamiento de cualquier web dinámica.<br />
      Cookies de análisis: Recogen información sobre el tipo de navegación que está realizando, las secciones que más utiliza, productos consultados, franja horaria de uso, idioma, etc.<br />
      Cookies publicitarias: Muestran publicidad en función de su navegación, su país de procedencia, idioma, etc.<br /><br />

      ¿Qué son las cookies propias y las de terceros?<br />
      Las cookies propias son las generadas por la página que está visitando y las de terceros son las generadas por servicios o proveedores externos como Mailrelay, Facebook, Twitter, Google, etc.<br /><br />

      ¿Qué cookies utiliza esta web?<br />
      Esta web utiliza cookies propias y de terceros. En este sitio web se utilizan las siguientes cookies que se detallan a continuación:<br />

        <ul className={"list-outside"}>
          <li>Cookies propias: Son estrictamente necesarias, sirven para controlar tu sesión de usuario, preferencias y demás detalles del funcionamiento de la web. El sitio web no funcionará correctamente o no tendrás acceso al mismo si no permites al menos estas cookies.</li>
          <li>Cookies de terceros: Esta web utiliza servicios de análisis, concretamente, Google Analytics para ayudar al website a analizar el uso que hacen los usuarios del sitio web y mejorar la usabilidad del mismo, pero en ningún caso se asocian a datos que pudieran llegar a identificar al usuario. Google Analytics, es un servicio analítico de web prestado por Google, Inc., El usuario puede consultar aquí el tipo de cookies utilizadas por Google.</li>
          <li>Las cookies de redes sociales pueden almacenarse en su navegador mientras navega por www.saentech.com por ejemplo, cuando utiliza el botón de compartir contenidos de alguna red social.  A continuación tienes información sobre las cookies de las redes sociales que utiliza esta web en sus propias políticas de cookies:<br />
          Las cookies de redes sociales pueden almacenarse en su navegador mientras navega por www.saentech.com por ejemplo, cuando utiliza el botón de compartir contenidos de alguna red social.  A continuación tienes información sobre las cookies de las redes sociales que utiliza esta web en sus propias políticas de cookies:
            <ul>
            <li>Cookies de Facebook, ver más información en su política de cookies<br /></li>
            <li>Cookies de Twitter, ver más información en su política de cookies<br /></li>
            <li>Cookies de Google+, ver más información en su política de cookies<br /></li>
            <li>Cookies de Linkedin, ver más información en su política de cookies<br /></li>
            <li>Cookies de Youtube, ver más información en su política de cookies<br /></li>
            <li>Cookies de Instagram, ver más información en su política de cookies</li>
            </ul>
          </li>
        </ul>

      ¿Se pueden eliminar las cookies?<br />
      Sí, y no sólo eliminar, también bloquear, de forma general o particular para un dominio específico.<br />
      Para eliminar las cookies de un sitio web debe ir a la configuración de su navegador y allí podrá buscar las asociadas al dominio en cuestión y proceder a su eliminación.<br/><br/>
      <ul>
        <li>Configuración de cookies para Google Chrome</li>
            <li>Configuración de cookies para Apple Safari</li>
            <li>Configuración de cookies para Internet Explorer</li>
            <li>Configuración de cookies para Mozilla Firefox</li>
            <li>Configuración de cookies para Opera</li>
        </ul>

      <br /><br />
      </span>
      <div className={"w-full text-center text-white"}>Esta política de cookies ha sido actualizada por última vez el 18/06/2018</div>
    </div>
  </Layout>
}

export default IndexPage
