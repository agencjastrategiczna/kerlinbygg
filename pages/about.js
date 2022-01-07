import Head from 'next/head'


import style from '../styles/About.module.scss';

import { Container } from 'react-bootstrap'

import TopHeader from '../src/Components/TopHeader'
import Navbar from '../src/Components/Navbar/index2'
import AboutContent from '../src/AboutContent/index.js'
import Footer from '../src/Components/Footer'

const About = () => {


        return(

                <div className={style.about}>
                        <Head>
                                <title>O Nas</title>
                                <meta name="description" content="O Nas" />
                                <link rel="icon" href="/logo.png" />
                        </Head>
                        <Navbar />
						{/* Content */}
						<Container>
                                <AboutContent />
                        </Container>

                <Footer />
                </div>
        )
}

export default About;