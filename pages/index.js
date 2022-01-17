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
import About from '../src/Homepage/About'
import Footer from '../src/Components/Footer'

import QuotePop from '../src/Components/QuotePop'

import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>KerlinBygg renoveringsföretag Hemsidan</title>
				<meta name="description" content="Renoveringsföretag" />
        <link rel="icon" href="/logo.png" />
      </Head>

    {/* <TopHeader /> */}
		<Navbar />

<Container>
	<section className={style.homepageBanner}>
		<Banner />
	</section>

</Container>

	<section className={style.homepageServices}>
		<Services />
	</section>
	
<Container>
	<section className={style.homepageGallery}>
		<Gallery />
	</section>
	</Container>

	<section className={style.homepageOpinions}>
		<Opinions />
	</section>

<Container>
	<section className={style.homepageAbout}>
		<Container>
			<About />
		</Container>
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
