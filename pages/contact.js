import style from '../styles/Contact.module.scss';

import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'


import Navbar from '../src/Components/Navbar/index2'
import TopHeader from '../src/Components/TopHeader';
import Footer from '../src/Components/Footer'

const Contact = () => {
        return(
                <div className={style.contact}>
                        <Navbar />
                        <Container>
                                <Row>
                                        <Col xs={12} md={8} className={style.formSection}>
                                                <h2>Formularz kontaktowy</h2>

                                                <Row>
                                                        <Col xs={12}>
                                                                <Form>
                                                                        <Form.Group className="mb-3" controlId="formEmail">
                                                                                <Form.Label>Adres E-mail</Form.Label>
                                                                                <Form.Control type="email" placeholder="Wpisz swój adres e-mail" />
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-3" controlId="formPhonel">
                                                                                <Form.Label>Numer telefonu</Form.Label>
                                                                                <Form.Control type="phone" placeholder="Wpisz numer, na który możemy zadzwonić" />
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-3" controlId="formPhonel">
                                                                                <Form.Label>Temat wiadomości</Form.Label>
                                                                                <Form.Control type="text" placeholder="W czym możemy ci pomóc?" />
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-3" controlId="formPhonel">
                                                                                <Form.Label>Treść Wiadomości</Form.Label>
                                                                                <Form.Control type="textarea" placeholder="Opisz w czym możemy Ci pomóc?" />
                                                                        </Form.Group>

                                                                        <button type="button" className={style.contactFormButton}>
                                                                                Wyślij Wiadomość
                                                                        </button>
                                                                </Form>
                                                        </Col>
                                                </Row>
                                        </Col>
                                        <Col xs={12} md={4} className={style.subSection}>
                                                <h3>Dane kontaktowe</h3>
                                                <ul type="none">
                                                        <li>Telefon: +65 24324 23423 432</li>
                                                        <li>E-mail: kontakt@kerlinbygg.se</li>
                                                        <hr />
                                                        <li>Adres 1</li>
                                                        <li>Adres 2</li>
                                                        <li>Adres 3</li>
                                                </ul>
                                        </Col>
                                </Row>
                        </Container>
                        <Footer />
                </div>
        )
}

export default Contact;