import style from './style.module.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { Telephone, Mail, Phone } from 'react-bootstrap-icons';




// const TopHeader = () => {
//         return(
//                 <div className={style.topheader}>

//                         {/* Two */}
//                         <Container>
//                                 <Row>
//                                         <Col xs={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
//                                                 <Button className={style.buttonCTA}>
//                                                         WYCENA
//                                                 </Button>
//                                         </Col>
//                                 </Row>
//                         </Container>
//                 </div>
//         )
// }

const TopHeader = () => {
        return(
                <div className={style.topheader}>

                        {/* Two */}
                        <Container>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.content}>
                                                        <ul type="none">
                                                                <li>kontakt@kerlinbygg.se</li>
                                                                <li>+56 345 345 345</li>
                                                        </ul>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default TopHeader;