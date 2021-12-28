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
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus sapien, auctor ut lacus vel, mollis tincidunt nibh. Nunc ac pharetra est, a placerat nisl. Praesent finibus commodo metus interdum mollis. Nam ullamcorper dictum nunc, vel aliquet nisl finibus vitae. Maecenas tempor lorem in pellentesque porttitor
                                                </p>
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