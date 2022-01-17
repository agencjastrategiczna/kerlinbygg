import React, { useState, useRef } from 'react'
import Router from 'next/router'

import * as emailjs from "emailjs-com"

import style from '../styles/Contact.module.scss';

import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'


import Navbar from '../src/Components/Navbar/index2'
import TopHeader from '../src/Components/TopHeader';
import Footer from '../src/Components/Footer'

import Head from 'next/head'


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
                      <Head>
                                <title>Kontakta | KerlinBygg</title>
                                <meta name="description" content="Renoveringsföretag" />
                                <link rel="icon" href="/logo.png" />
                        </Head>
                        <Navbar />
                        <Container>
                                <Row>
                                        <Col xs={12} md={8} className={style.formSection}>
                                                <h2>Kontaktformulär</h2>

                                                <Row>
                                                        <Col xs={12}>
                                                                <form ref={form} onSubmit={sendEmail} className={style.form}>
                                                                                <input type="email" name="email" placeholder="Var god skriv in din e-mail" />



                                                                                <input name="telefon" type="phone" placeholder="Ange ett nummer som vi kan ringa" />


                                                                                <input name="temat" type="text" placeholder="Ämne" />



                                                                                <input type="textarea" name="opis" placeholder="Meddelandeinnehåll" />

                                                                        <button type="submit" className={style.contactFormButton}>
                                                                                Skicka
                                                                        </button>
                                                                </form>
                                                        </Col>
                                                </Row>
                                        </Col>
                                        <Col xs={12} md={4} className={style.subSection}>
                                                <h3>Kontaktuppgifter</h3>
                                                <ul type="none">
                                                        <li><b>Telefonnummer:</b> 076-929 19 95</li>
                                                        <li><b>E-mail:</b> kontakt@kerlinbygg.se</li>
                                                        <hr />
                                                        <li>Centralgatan 91,</li>
                                                        <li>Nynëshamn</li>
                                                </ul>
                                        </Col>
                                </Row>
                        </Container>
                        <Footer />
                </div>
        )
}

export default Contact;