import style from './style.module.scss';

import Image from 'next/image'

import { Container, Row, Col, Button } from 'react-bootstrap'

const AboutContent = () => {
        return(
                <>
                        <Row>
                                <Col sm={12} md={12}>
                                        <div className={style.content}>
                                                <h2>O Firmie</h2>
                                                <Container>
                                                        <Row>
                                                                <Col xs={12} md={8} lg={6}>
                                                                        <p>
                                                                                Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem. Działamy na terenie Sztokholmu i okolic. Podejmujemy się drobnych, kilkugodzinnych prac oraz realizujemy kompleksowe, skomplikowane projekty. Stosujemy rozwiązania szyte na miarę. Słuchamy potrzeb naszych klientów. Doradzamy, analizujemy i realizujemy. Jesteśmy terminowi - nie lubimy opóźnień. Posiadamy certyfikaty i dużą wiedzę w zakresu usług remontowo-budowlanych.
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