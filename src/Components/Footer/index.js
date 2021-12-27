import style from './style.module.scss'
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import { Pin, Link } from 'react-bootstrap-icons'

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
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus sapien, auctor ut lacus vel, mollis tincidunt nibh. Nunc ac pharetra est, a placerat nisl. Praesent finibus commodo metus interdum mollis. Nam ullamcorper dictum nunc, vel aliquet nisl finibus vitae. Maecenas tempor lorem in pellentesque porttitor
                                                </p>
                                        </Col>
                                        <Col xs={12} lg={4}>
                                                <h2>Dane kontaktowe</h2>
                                                <ul type="none">
                                                        <li><Pin color='red' /> +54 3242 342 432</li>
                                                        <li><Pin color='red' /> kontakt@kerlinbygg.se</li>
                                                        <li><Pin color='red' /> Nynesham, 23-2312 Szwecja</li>
                                                </ul>
                                                <hr />
                                                <h2>Menu</h2>
                                                        <ul type="none">
                                                                <li><Link color='red' /> Strona główna</li>
                                                                <li><Link color='red' /> Projekty</li>
                                                                <li><Link color='red' /> Wycena</li>
                                                                <li><Link color='red' /> Site Map</li>
                                                        </ul>
                                        </Col>
                                        <Col xs={12} lg={4}>
                                                <h2>Darmowa wycena</h2>
                                                <p>
                                                        Szukasz firmy remontowej? Wypełnij formularz i zamów darmową wycenę swojego zlecenia. 
                                                </p>
                                                <Button>Zamów wycenę</Button>
                                        </Col>
                                </Row>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.footerCopyright}>
                                                        <a href="https://www.kerlinbygg.se">KerlinBygg</a> © 2022. Alla rättigheter förbehålls. Powered by  <a href="https://www.pantherstrategy.com"> Panther Strategy</a>.
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Footer;