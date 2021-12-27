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
        return(
                <div className={style.container}>
                        <Wrapper>
                                <Container>
                                <h2 className={style.quoteTitle}>Zamów bezpłatną wycenę</h2>
                                <hr style={{width: '40px'}} /> 
                                <h5 className={style.quoteSubtitle}>Wypełnij formularz, a my skontaktujemy się z Tobą.</h5>
                                <input type="text" className={style.inputPrimary} placeholder="Adres e-mail" />
                                <input type="text" className={style.inputPrimary} placeholder="Numer telefonu" />
                                <input type="text" className={style.inputPrimary} placeholder="Imię" />
                                <textarea rows="4" cols="5" className={style.inputArea} placeholder="Opisz swoje zlecenie" />

                                <button type="submit" className={style.formSubmit}>Wyślij Zapytanie</button>
                                </Container>
                        </Wrapper>
                </div>
        )
}

export default Quote;