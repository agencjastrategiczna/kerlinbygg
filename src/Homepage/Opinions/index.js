import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
const Opinions = () => {
        return(
                <section className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.imageWrapper}>
                                                        <Image src="recologo.svg" alt="Reco.se" />
                                                </div>
                                        </Col>

                                        <Col xs={12} md={6}>
                                                <div className={style.contentWrapper}>
                                                        <h5 style={{fontWeight: 'lighter'}}>Opinie</h5>
                                                        <h3 style={{fontWeight: 'bold'}}>Sprawdź co mówią o Nas klienci</h3>

                                                        <button type="button">Sprawdź Rekomendacje</button>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default Opinions;