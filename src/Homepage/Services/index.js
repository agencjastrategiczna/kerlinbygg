
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
                                                                Usługi
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
                                                        <h3>Drobne Prace</h3>
                                                        <p>
                                                        Regulacja drzwi, montaż karniszy i rolet, wiercenie w ścianie, naprawa cieknącego zlewu, zepsutej szafki, bramy garażowej i wiele więcej. Za jedną wizytą możemy przeprowadzić kilka drobnych napraw. 
                                                        </p>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <div className={style.serviceWrapper}>
                                                        <div className={style.icon}>
                                                                <Building color={'black'} size={50} />
                                                        </div>
                                                        <h3>Kompleksowe rozwiązania</h3>
                                                        <p>
                                                        Potrzebujesz gruntowego remontu kuchnii? A może przerabiasz łazienkę od podstaw? Zależy ci na zespole specjalistów, którzy dostarczą Ci dokładnie tego, czego potrzebujesz? Oferujemy kompleksowe rozwiązania od A do Z.      </p>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <div className={style.serviceWrapper}>
                                                        <div className={style.icon}>
                                                                <Pencil color={'black'} size={50} />
                                                        </div>
                                                        <h3>Szyte Na Miarę</h3>
                                                        <p>
                                                        Masz w głowie wizję swojego projektu i szukasz kogoś, kto go realizuje? Wspólnie wybierzemy najlepsze rozwiązanie, zaprojektujemy je dla Ciebie, a następnie przystąpimy do realizacji. U nas nic nie dzieje się bez Twojej wiedzy.                                                        
                                                        </p>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Services;