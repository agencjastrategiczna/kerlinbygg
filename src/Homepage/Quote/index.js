import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


const Quote = () => {
        return(
                <div className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.caption}>
                                                        <h6>Zatrudnij nas</h6>
                                                        <h2>Odbierz darmową wycenę</h2>
                                                        <hr style={{width: '10%', height: '5px'}} />
                                                        <h4>Wypełnij formularz. Skontaktujemy się z Tobą.</h4>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                                <div className={style.form}>
                                                        <h2>FORMULARZ WYCENY</h2>
                                                        <hr style={{width: '10%', height: '5px'}} />

                                                                <input type="text" placeholder="Imię, Nazwisko" />
                                                                <input type="text" placeholder="Numer Telefonu" />
                                                                <input type="text" placeholder="Adres E-mail" />
                                                                <textarea type="text" placeholder="Krótki opis zlecenia" />

                                                                <div className={style.buttonWrapper}>
                                                                        <button type="submit">Wyślij zapytanie</button>
                                                                </div>
                                                </div>
                                        </Col>
                                </Row>

                                <Row>
                                        <Col xs={12}>
                                                <div className={style.callUsWrapper}>
                                                        <h4>LUB PO PROSTU ZADZWOŃ DO NAS</h4>
                                                        <button type="button">ZADZWOŃ</button>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Quote;