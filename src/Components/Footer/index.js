import style from './style.module.scss'
import { Link } from 'next/link'
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



import { Pin } from 'react-bootstrap-icons'

const Footer = () => {
        return(
                <div className={style.footer}>
                        <Container>
                                <Row>
                                        <Col xs={12} lg={4}>
                                                <div className={style.footerLogo}>
                                                        <Image src='logo.png' alt="Szawka" thumbnail />
                                                </div>
                                                <h2>KerlinBygg</h2>
                                                <h3>Renoveringsföretag</h3>
                                                <p>
                                                        Vi är ett team av specialister med många års erfarenhet och jobbar i hela stor Stockholm som fokuserar på beprövade och moderna lösningar. Vi jobbar med båda sma, flera timmar långa arbeten och större, komplicerade projekt. Vi använder oss av skräddarsydda lösningar. Vi lyssnar på våra kunders behov, ger råd, analyserar och implementerar. Vi håller  tider och gillar inte förseningar. Vi har certifikater och stor kunskap inom renovering och byggtjänster.
                                                </p>
                                        </Col>
                                </Row>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.footerCopyright}>
                                                        <a style={{marginLeft: '5px'}}  href="https://www.kerlinbygg.se">KerlinBygg</a> © 2022. Alla rättigheter förbehålls. Powered by  <a style={{marginLeft: '5px'}} href="https://www.pantherstrategy.com"> Panther Strategy</a>.
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Footer;