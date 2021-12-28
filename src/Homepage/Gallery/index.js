import style from './style.module.scss'
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'

import Link from 'next/link'

const Gallery = () => {
        return(
                <div className={style.container}>
                        <Container>
                                <Row>
                                        <div className={style.titleWrapper}>
                                                <h5 style={{fontWeight: 'lighter'}}>Nasze realizacje</h5>
                                                <h3 style={{fontWeight: 'bold'}}>GALERIA WYKONANYCH PRAC</h3>
                                        </div>
                                </Row>

                                <Row>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/1.png" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/2.png" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/3.png" thumbnail />
                                        </Col>
                                </Row>

                                <Row>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/4.png" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/5.png" thumbnail />
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <Image src="/images/projekty/6.png" thumbnail />
                                        </Col>

                                </Row>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.galleryButton}>
                                                        <Link href="/projects">
                                                        <button>
                                                                Pokaż Więcej Realizacji
                                                        </button>
                                                        </Link>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Gallery;