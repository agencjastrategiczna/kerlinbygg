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
                                                <h3>Firma remotnowa</h3>
                                                <p>
                                                Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem. Działamy na terenie Sztokholmu i okolic. Podejmujemy się drobnych, kilkugodzinnych prac oraz realizujemy kompleksowe, skomplikowane projekty. Stosujemy rozwiązania szyte na miarę. Słuchamy potrzeb naszych klientów. Doradzamy, analizujemy i realizujemy. Jesteśmy terminowi - nie lubimy opóźnień. Posiadamy certyfikaty i dużą wiedzę w zakresu usług remontowo-budowlanych.  
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