
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
                        <h1>Firma remonotowa</h1>
                        <h3>Małe i duże remonty na wyciągnięcie ręki</h3>
                        <p>
                                KerlinBygg to firma remotnowa działająca w obrębie Nynäshamn. Świadczymy zarówno małe jak i kompleksowe usługi remontowe. Wypełnij formularz i odbierz darmową wycenę.
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