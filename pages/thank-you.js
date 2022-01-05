import Link from 'next/link'


import style from '../styles/Thankyou.module.scss'

import { Container, Row, Col } from 'react-bootstrap'


import Navbar from '../src/Components/Navbar/index2.js'
import Footer from '../src/Components/Footer'


const ThankYou = () => {
        return(
                <>
                <Navbar />
                <Container>
                        <div className={style.container}>
                                <Row>
                                        <Col>
                                                <div className={style.contentWrapper}>
                                                        <h1>DZIĘKUJEMY ZA KONTAKT</h1>
                                                        <h4>Skontaktujemy Się Z Tobą W Ciągu 24H :)</h4>

                                                        <Link href="/">
                                                                <button type="button">Wróć do strony głównej</button>
                                                        </Link>
                                                </div>
                                        </Col>
                                </Row>
                        </div>
                </Container>
                <Footer />
                </>
        )
}

export default ThankYou;