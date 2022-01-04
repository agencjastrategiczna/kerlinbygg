import { React, useState} from 'react'
import { GraphQLClient, gql } from 'graphql-request'


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

        const sendQuote = () => {
                const endpoint = 'https://api-eu-central-1.graphcms.com/v2/ckxz4eve92n1c01z2af4f38me/master'
                
                const mutation = gql`
                mutation {
                        createLeads(data: { imie: "Ze streony Imie", email: "zestronyface@fs.com", numertelefonu: 1000,   opiszlecenia: "Zlecenie ze strony"}) {
                                id,
                                imie
                        }
                }`
        }

        return(
                <div className={style.container}>
                        <Wrapper>
                                <Container>
                                <h2 className={style.quoteTitle}>Zamów bezpłatną wycenę</h2>
                                <hr style={{width: '40px'}} /> 
                                <h5 className={style.quoteSubtitle}>Wypełnij formularz, a my skontaktujemy się z Tobą.</h5>
                                <input type="text" className={style.inputPrimary} placeholder="Adres e-mail" onChange={e => setEmail(e.target.value)} />
                                <input type="text" onChange={e => setTelefon(e.target.value)} className={style.inputPrimary} placeholder="Numer telefonu" />
                                <input type="text" onChange={e => setImie(e.target.value)} className={style.inputPrimary} placeholder="Imię" />
                                <textarea rows="4" onChange={e => setOpis(e.target.value)} cols="5" className={style.inputArea} placeholder="Opisz swoje zlecenie" />
                
                                <button type="submit" className={style.formSubmit}>Wyślij Zapytanie</button>
                                </Container>
                        </Wrapper>
                </div>
        )
}

export default Quote;