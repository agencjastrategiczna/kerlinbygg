import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css'
import '../styles/Home.module.css'

import '../styles/style.css'

import '../public/style.css'

import { useEffect } from "react";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
