import style from './style.module.scss';

import Image from 'next/image'

import { Container, Row, Col, Button } from 'react-bootstrap'

const AboutContent = () => {
        return(
                <>
                        <Row>
                                <Col sm={12} md={12}>
                                        <div className={style.content}>
                                                <h2>Om Företag</h2>
                                                <Container>
                                                        <Row>
                                                                <Col xs={12} md={8} lg={6}>
                                                                        <p>
                                                                                Vi är ett team av specialister med många års erfarenhet och jobbar i hela stor Stockholm som fokuserar på beprövade och moderna lösningar. Vi jobbar med båda sma, flera timmar långa arbeten och större, komplicerade projekt. Vi använder oss av skräddarsydda lösningar. Vi lyssnar på våra kunders behov, ger råd, analyserar och implementerar. Vi håller  tider och gillar inte förseningar. Vi har certifikater och stor kunskap inom renovering och byggtjänster.
                                                                        </p>
                                                                </Col>
                                                        </Row>
                                                </Container>
                                        </div>
                                </Col>
                                <Col sm={12} md={6}>
                                        
                                </Col>
                        </Row>

                </>
        )
}

export default AboutContent;