import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css'
import '../styles/Home.module.css'

import '../styles/style.css'

import '../public/style.css'

import { useEffect } from "react";

import TagManager from 'react-gtm-module';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    TagManager.initialize({ gtmId: 'GTM-KLBCDLS' });


  }, []);

  return <Component {...pageProps} />
}

export default MyApp
