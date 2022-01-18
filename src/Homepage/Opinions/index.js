import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'


const Opinions = () => {
        return(
                <section className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.title}>
                                                        
                                                        <h2>Omdömen</h2>
                                                </div>
                                        </Col>
                                </Row>
                                <Row>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Kerlin bygg har gjort ett fantastiskt jobb med att renovera mitt hus. Nytt kök, nya fönster, kakling, byggt fönsterbräden och installerat lister mm. Dom har också omvandlat en källare bestående av enbart lekablock till ett mysigt, ombonat gästutrymme. Dom är duktiga, pålitliga och snabba för en rimlig timpennnng. Jag kan varmt rekommenderar dom!
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Ralf
                                                                </div>
                                                        </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Kerlin Bygg har ett gott öga för detaljer och jag är mycket nöjd med dialogen kring olika förslag och alternativ. Jag bor i ett hus med sättningar, ojämna väggar och golv. Här har Kerlin Byggs medarbetare visat på hög yrkesskicklighet och skapat fina övergångar mellan olika golvnivåer, gipsat upp rundtimrade väggar och monterat Ikeastommar som värsta proffsen. Köket har tagit form tack vare innovativa lösningar och god kunskap. Men framförallt är jag sjukt nöjd med min vackra och varma marmorgolv
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Vincent
                                                                </div>
                                                        </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Vi fick hjälp av Kerlin Bygg avseende totalrenovering av kök i bostadsrätt i augusti 2021. Det var vår första erfarenhet av en större renovering och för oss/föreningen var det väldigt viktigt att det blev korrekt och fint utfört enligt branschregler.
Kerlin Bygg gav ett trevligt och bra intryck från första mötet, hantverkarna gjorde ett toppenjobb - köket blev superfint!, och de höll offert samt tidsplan. Vi hade också en fristående besiktning efteråt som godkändes utan konstigheter
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Sören
                                                                </div>
                                                        </div>
                                                </Col>
                                </Row>
                                <Row>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Pålitlig företag med hög servicekänsla. Hela projektet med nytt kök, renovering av innertak och annat fix gick i mål enligt tidplanen och offert. Snyggt arbete med finishing. Bra projektledning! Jag rekommenderar varmt Kerlin Bygg!
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Joel
                                                                </div>
                                                        </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Personliga, punktliga, perfekta. Anpassade sig hela tiden efter mina önskemål och kom med förslag. Flexibla både i utförande och tidsanpassning. Komplett portfölj med tjänster för totalrenovering, ingenting är ett problem.
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Harald
                                                                </div>
                                                        </div>
                                                </Col>
                                                <Col xs={12} md={4}>
                                                        <div className={style.contentItem}>
                                                                <div className={style.stars}>
                                                                        <ul type="none">
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                                <li><StarFill color={'gold'} /></li>
                                                                        </ul>
                                                                </div>
                                                                <div className={style.opinionContent}>
                                                                        <p>
                                                                        Flexibla med starttid efter leverans av kök. God kommunikation och flexibilitet. Bra råd kring planering och genomförande. Kändes tryggt med ett företag med tillgång till många hantverkare som skötte hela projektet från start till slut!
                                                                        </p>
                                                                </div>
                                                                <div className={style.opinionPerson}>
                                                                        ~ Daniel
                                                                </div>
                                                        </div>
                                                </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default Opinions;