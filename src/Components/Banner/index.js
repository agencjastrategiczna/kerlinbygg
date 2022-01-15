
import style from './style.module.scss'

//Boostrap
import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Building, Hammer } from 'react-bootstrap-icons'

//components
import Quote from './form/index'

const BannerImage = () => {
        return(
                <div className={style.bannerContent}>
                        {/* <Image src='logo.png' width={100} height={100} alt="KerlinBygg" /> */}
                        <Building width={70} height={70} />
                        <h1>Renoveringsföretag</h1>
                        <h3>Små och stora jobb</h3>
                        <p>
                                KerlinBygg är ett renoveringsföretag som jobbar i Storstockholm. Vi jobbar med båda små, större projekt. 
                                Fyll i formuläret och få en kostnadsfri offert.                        
                        </p>
                </div>
        )
}



const Banner = () =>{
        return(
                <div className={style.banner}>
                        
                                <Row>
                                        <Col xs={12} md={6}>
                                                <div className={style.bannerImageWrapper}>
                                                        <BannerImage />
                                                </div>
                                        </Col>

                                        <Col xs={12} md={6}>
                                                <div className={style.bannerImage}>
                                                        <Quote />
                                                </div>
                                        </Col>
                                </Row>
                        
                </div>
        )
}

export default Banner;