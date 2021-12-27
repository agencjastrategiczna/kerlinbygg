import style from './style.module.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { Telephone, Mail, Phone } from 'react-bootstrap-icons';


const TopHeader = () => {
        return(
                <div className={style.topheader}>

                        {/* Two */}
                        <Container>
                                <Row>
                                        <Col xs={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                                <Button className={style.buttonCTA}>
                                                        WYCENA
                                                </Button>
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )
}

export default TopHeader;