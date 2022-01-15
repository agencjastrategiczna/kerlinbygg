import React, { useState, useRef } from 'react'
import Router from 'next/router'

import * as emailjs from "emailjs-com"

import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

const Wrapper = (props) => {
        return(
                <div className={style.wrapper}>
                        {props.children}
                </div>
        )
}

const Quote = () => {
        const [ name, setName ] = useState('')
        const [ telefon, setTelefon ] = useState('')
        const [ email, setEmail ] = useState('')
        const [ opis, setOpis ] = useState('')

        const form = useRef();


                const sendEmail = (e) => {
                        e.preventDefault();
                    
                        emailjs.sendForm('gmail', 'lead', form.current, 'user_oVTo0H255qAQzNLn05qWm')
                          .then((result) => {
                              console.log(result.text);
                              Router.push('/thank-you')

                          }, (error) => {
                              console.log(error.text);
                          });
                };


        return(
                <div className={style.container}>
                        <Wrapper>
                                <Container>
                                <h2 className={style.quoteTitle}>Beställ en kostnadsfri offert</h2>
                                <hr style={{width: '40px'}} /> 
                                <h5 className={style.quoteSubtitle}>Fyll i formuläret så kontaktar vi dig.</h5>
                                <form ref={form} onSubmit={sendEmail}>
                                        <input type="text" className={style.inputPrimary} name="email" placeholder="E-mail"/>
                                        <input type="text" className={style.inputPrimary} name="telefon" placeholder="Telefonnummer" />
                                        <input type="text" className={style.inputPrimary} name="imie" placeholder="Namn" />
                                        <textarea rows="4" cols="5" className={style.inputArea} name="opis" placeholder="Beskriv ditt ärende" />
                        
                                        <button type="submit" className={style.formSubmit}>Sicka</button>
                                </form>
                                </Container>
                        </Wrapper>
                </div>
        )
}

export default Quote;

/*

                                <h2 className={style.quoteTitle}>Zamów bezpłatną wycenę</h2>
                                <hr style={{width: '40px'}} /> 
                                <h5 className={style.quoteSubtitle}>Wypełnij formularz, a my skontaktujemy się z Tobą.</h5>
                                <input type="text" className={style.inputPrimary} placeholder="Adres e-mail" onChange={e => setEmail(e.target.value)} />
                                <input type="text" onChange={e => setTelefon(e.target.value)} className={style.inputPrimary} placeholder="Numer telefonu" />
                                <input type="text" onChange={e => setName(e.target.value)} className={style.inputPrimary} placeholder="Imię" />
                                <textarea rows="4" onChange={e => setOpis(e.target.value)} cols="5" className={style.inputArea} placeholder="Opisz swoje zlecenie" />
                
                                <button type="submit" className={style.formSubmit} onclick={sendQuote}>Wyślij Zapytanie</button>

*/