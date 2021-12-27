import React, { useState } from "react";
import Link from 'next/link'

import style from './style2.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

import { List } from 'react-bootstrap-icons'


const Content = () => {
        return(
                <Container>
                        <div className={style.content}>
                                <ul type="none">
                                        <li><Link href="/">STRONA GŁÓWNA</Link></li>
                                        <li><Link href="projects">REALIZACJE</Link></li>
                                        <li><Link href="about">O NAS</Link></li>
                                        <li><Link href="contact">KONTAKT</Link></li>
                                </ul>
                        </div>
                </Container>
        )
}

const Desktop = () => {
        return(
                <div className={style.desktop}>
                        <ul type="none">
                                <li><Link href="/">STRONA GŁÓWNA</Link></li>
                                <li><Link href="projects">REALIZACJE</Link></li>
                                <li><Link href="about">O NAS</Link></li>
                                <li><Link href="contact">KONTAKT</Link></li>
                        </ul>
                </div>  
        )
}




const Mobile = () => {
        const [showAll, setShowAll] = useState(false);
        
        const toggleAll = () => {
                setShowAll(val => !val);
               
              };
        
        return(
                <div className={style.mobile}>
                        <List size={50} onClick={toggleAll} />
                                {showAll ? <Content />  : ""}
                </div>
        )
}


const Navbar = () => {

        return(
                <section className={style.container}>
                        <Container>
                                <Row>
                                        <Col xs={8} md={2}>
                                                <div className={style.logoWrapper}>
                                                        <Image src="logo.png" width={'100%'} height={'100%'} />
                                                </div>
                                        </Col>

                                        <Col xs={4} md={8}>
                                                {/* Mobile */}
                                                <Mobile />

                                                {/* Desktop */}
                                                <Desktop />

                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}

export default Navbar;