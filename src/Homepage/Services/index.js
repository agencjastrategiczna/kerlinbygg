
import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'

import { Building, Hammer, Pencil } from 'react-bootstrap-icons'

const Services = () => {
        return(
                <div className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.serviceTitle}>
                                                        <h2 style={{fontWeight: 'bold'}}>
                                                                Våra tjänster
                                                                <hr style={{width: '10%', height: '5px', color: '#CFA36E'}} />
                                                        </h2>
                                                </div>
                                        </Col>
                                </Row>

                                <Row>
                                        <Col xs={12} md={4}>
                                                <div className={style.serviceWrapper}>
                                                        <div className={style.icon}>
                                                                <Hammer color={'black'} size={50} />
                                                        </div>
                                                        <h3>Små jobb</h3>
                                                        <p>
                                                        Justera dörrar, montera gardinstänger och persienner, borra i väggen, laga en läckande diskho, trasigt skåp, garageport och mycket mer. Vi kan utföra några mindre reparationer på ett och samma besök.                           </p>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <div className={style.serviceWrapper}>
                                                        <div className={style.icon}>
                                                                <Building color={'black'} size={50} />
                                                        </div>
                                                        <h3>Heltäckande lösningar</h3>
                                                        <p>
                                                                Behöver du en större köksrenovering? Eller kanske du gör om badrummet från grunden? Vill du ha ett team av specialister som ger dig exakt det du behöver? Vi erbjuder helhetslösningar från A till Ö.
                                                        </p>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <div className={style.serviceWrapper}>
                                                        <div className={style.icon}>
                                                                <Pencil color={'black'} size={50} />
                                                        </div>
                                                        <h3>Skräddarsydd</h3>
                                                        <p>
                                                                Har du en idé och letar du efter någon som kan implementera den? Tillsammans kommer vi att välja den bästa lösningen, designa den åt dig och utföra. Hos oss händer ingenting utan din vetskap.
                                                        </p>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Services;