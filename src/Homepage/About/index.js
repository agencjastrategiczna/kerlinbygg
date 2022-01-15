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
                                                        <h2>Om företaget</h2>
                                                        <p>
                                                        <b style={{fontWeight: 'bold'}}>Kerlin Bygg</b> <br />
                                                        <br />
                                                                Vi är ett team av specialister med många års erfarenhet och jobbar i hela stor Stockholm som fokuserar på beprövade och moderna lösningar. Vi jobbar med båda sma, flera timmar långa arbeten och större, komplicerade projekt. Vi använder oss av skräddarsydda lösningar. Vi lyssnar på våra kunders behov, ger råd, analyserar och implementerar. Vi håller  tider och gillar inte förseningar. Vi har certifikater och stor kunskap inom renovering och byggtjänster.
                                                        </p>
                                                        <br />
                                                        <div className={style.aboutContentButton}>
                                                                <button type="button">Mer Om Oss</button>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default About;