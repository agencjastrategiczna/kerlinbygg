import style from '../styles/Projects.module.scss';

import Head from 'next/head'


import { Image } from 'react-bootstrap'

import a  from '../public/images/projekty/1.png';
import b  from '../public/images/projekty/2.png';
import c  from '../public/images/projekty/3.png';
import d  from '../public/images/projekty/4.png';
import e  from '../public/images/projekty/5.png';
import f  from '../public/images/projekty/6.png';



import { Container, Row, Col } from 'react-bootstrap'


import TopHeader from '../src/Components/TopHeader'
import Header from '../src/Components/Header'

import Navbar from '../src/Components/Navbar/index2'
import Footer from '../src/Components/Footer';


const Title = () => {
        return(
                <Container className={style.title}>
                        <Row>
                                <Col sm={12}>
                                                <hr />
                                        <h2>Galleri</h2>
                                </Col>
                        </Row>
                        <Row>
                                <Col sm={12}>
                                        <p>Våra projekt</p>
                                </Col>
                        </Row>
                </Container>
        )
}


const Projects = () => {
        return(
                <div className={style.projects}>
                        <Head>
                                <title>Referenser | KerlinBygg</title>
                                <meta name="description" content="O Nas" />
                                <link rel="icon" href="/logo.png" />
                        </Head>
                        <Navbar />
                        <Title />

                        <Container>
                                <Row>
                                        <Col xs={12} md={4}>
                                                <Image src={a} alt="a" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src={b} alt="a" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src={c} alt="a" thumbnail />
                                        </Col>
                                </Row>
                                <Row>
                                        <Col xs={12} md={4}>
                                                <Image src={d} alt="a" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src={e} alt="a" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src={f} alt="a" thumbnail />
                                        </Col>
                                </Row>
                        </Container>
                        <Footer />
                </div>
        )
}

export default Projects;