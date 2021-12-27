import Head from 'next/head'
import style from '../styles/Home.module.css'

import TopHeader from '../src/Components/TopHeader'
import Navbar from '../src/Components/Navbar/index2.js'
import Banner from '../src/Components/Banner'
import Services from '../src/Homepage/Services'
import Gallery from '../src/Homepage/Gallery'
import CallToUs from '../src/Homepage/CallToUs'
import Opinions from '../src/Homepage/Opinions'
import Quote from '../src/Homepage/Quote'

import Footer from '../src/Components/Footer'

import QuotePop from '../src/Components/QuotePop'

import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>KerlinBygg</title>
        <meta name="description" content="Firma remontowa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <TopHeader />
		<Navbar />

<Container>
	<section className={style.homepageBanner}>
		<Banner />
	</section>

	<section className={style.homepageServices}>
		<Services />
	</section>

	<section className={style.homepageGallery}>
		<Gallery />
	</section>

	<section className={style.homepageGallery}>
		<CallToUs />
	</section>

	<section className={style.homepageGallery}>
		<Opinions />
	</section>

	<section className={style.homepageQuote}>
		<Quote />
	</section>

	
</Container>
	<section className={style.homepageFooter}>
		<Footer />
	</section>

    </div>
  )
}
