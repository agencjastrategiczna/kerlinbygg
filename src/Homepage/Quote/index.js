import React, { useState, useRef } from 'react'
import Router from 'next/router'

import * as emailjs from "emailjs-com"

import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


const Quote = () => {

        const [ name, setName ] = useState('')
        const [ telefon, setTelefon ] = useState('')
        const [ email, setEmail ] = useState('')
        const [ opis, setOpis ] = useState('')

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
                <div className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.caption}>
                                                        <h6>Anlita oss</h6>
                                                        <h2>Få en kostnadsfri offert</h2>
                                                        <hr style={{width: '10%', height: '5px'}} />
                                                        <h4>Fyll i formuläret. Vi kommer att kontakta dig.</h4>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                                <div className={style.form}>
                                                        <h2>KOSTANDSFRI OFFERT</h2>
                                                        <hr style={{width: '10%', height: '5px'}} />
                                                                <form ref={form} onSubmit={sendEmail} className={style.form}>
                                                                        <input type="text" name="imie" placeholder="Namn" />
                                                                        <input type="text" name="telefon" placeholder="Telefonnummer" />
                                                                        <input type="text" name="email" placeholder="E-mail" />
                                                                        <textarea type="text" name="opis" placeholder="Beskriv ditt ärende" />

                                                                        {/* <div className={style.buttonWrapper}> */}
                                                                                <button type="submit">Skicka</button>
                                                                        {/* </div> */}
                                                                </form>
                                                </div>
                                        </Col>
                                </Row>

                                <Row>
                                        <Col xs={12}>
                                                <div className={style.callUsWrapper}>
                                                        <h4>ELLER RING OSS</h4>
                                                        <button type="button">RING OSS</button>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default Quote;