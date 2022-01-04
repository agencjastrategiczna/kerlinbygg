import style from './style.module.scss';
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
        return(
                <section className={style.about}>
                        <Container>
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.aboutLogoWrapper}>
                                                        <div className={style.logo}>
                                                                <Image src="/logo.png" />
                                                        </div>
                                                </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                                <div className={style.aboutContentWrapper}>
                                                        <h2>O FIRMIE</h2>
                                                        <p>
                                                        Zakład Remontowo –Budowlany KerlinBygg funkcjonuje na rynku od 2008 roku. Specjalizujemy się w przeprowadzaniu prac remontowo – budowlanych dla firm i osób prywatnych na tereanach Szwecji. Wykonujemy remonty oraz prace budowlane w obiektach: handlowo-usługowych, administracyjnych, biurowych, użyteczności publicznej, w mieszkaniach oraz domach jednorodzinnych, i innych.
                                                        Zdobyte doświadczenie oraz Nasze kompetencje pozwalają nam na profesjonalną realizacje nowych projektów, dbając jednocześnie o solidność i terminowość w wykonaniu prac .
                                                        </p>
                                                        <div className={style.aboutContentButton}>
                                                                <button type="button">Więcej O Nas</button>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default About;