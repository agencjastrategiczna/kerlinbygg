import style from './style.module.scss';
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
        return(
                <section className={style.about}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.aboutLogoWrapper}>
                                                        <div className={style.logo}>
                                                                <Image src="/logo.png" />
                                                        </div>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                                <div className={style.aboutContentWrapper}>
                                                        <h2>O FIRMIE</h2>
                                                        <p>
                                                        <b style={{fontWeight: 'bold'}}>Kerlin Bygg</b> <br />
                                                        <br />
                                                                Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem. Działamy na terenie Sztokholmu i okolic. Podejmujemy się drobnych, kilkugodzinnych prac oraz realizujemy kompleksowe, skomplikowane projekty. Stosujemy rozwiązania szyte na miarę. Słuchamy potrzeb naszych klientów. Doradzamy, analizujemy i realizujemy. Jesteśmy terminowi - nie lubimy opóźnień. Posiadamy certyfikaty i dużą wiedzę w zakresu usług remontowo-budowlanych.
                                                        </p>
                                                        <br />
                                                        <div className={style.aboutContentButton}>
                                                                <button type="button">Więcej O Nas</button>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default About;