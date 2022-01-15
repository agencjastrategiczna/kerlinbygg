import React, { useState, useRef } from 'react'
import Router from 'next/router'

import * as emailjs from "emailjs-com"

import style from '../styles/Contact.module.scss';

import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'


import Navbar from '../src/Components/Navbar/index2'
import TopHeader from '../src/Components/TopHeader';
import Footer from '../src/Components/Footer'

const Contact = () => {

        const form = useRef();


                const sendEmail = (e) => {
                        e.preventDefault();
                    
                        emailjs.sendForm('gmail', 'kontakt', form.current, 'user_oVTo0H255qAQzNLn05qWm')
                          .then((result) => {
                              console.log(result.text);
                              Router.push('/thank-you')

                          }, (error) => {
                              console.log(error.text);
                          });
                };


        return(
                <div className={style.contact}>
                        <Navbar />
                        <Container>
                                <Row>
                                        <Col xs={12} md={8} className={style.formSection}>
                                                <h2>Formularz kontaktowy</h2>

                                                <Row>
                                                        <Col xs={12}>
                                                                <form ref={form} onSubmit={sendEmail} className={style.form}>
                                                                                <input type="email" name="email" placeholder="Wpisz swój adres e-mail" />



                                                                                <input name="telefon" type="phone" placeholder="Wpisz numer, na który możemy zadzwonić" />


                                                                                <input name="temat" type="text" placeholder="W czym możemy ci pomóc?" />



                                                                                <input type="textarea" name="opis" placeholder="Opisz w czym możemy Ci pomóc?" />

                                                                        <button type="submit" className={style.contactFormButton}>
                                                                                Wyślij Wiadomość
                                                                        </button>
                                                                </form>
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