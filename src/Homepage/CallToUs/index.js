import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'

import { Telephone } from 'react-bootstrap-icons'
const CallToUs = () => {
        return(
                <div className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={8}>
                                                <div className={style.contentWrapper}>
                                                        <h3>ZAMÓW DARMOWĄ WYCENĘ</h3>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                                <div className={style.buttonWrapper}>
                                                        <button type="button">FORMULARZ WYCENY</button>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default CallToUs;