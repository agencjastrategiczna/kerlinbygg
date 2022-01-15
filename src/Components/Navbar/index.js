import React, { useState } from "react";
import Link from 'next/link'


import style from './style.module.scss'

import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

import { List } from 'react-bootstrap-icons'

const Content = () => {
        return(
                <Container>
                        <div className={style.mobileNavContent}>
                                <ul type="none">
                                        <li><Link href="/">HEM</Link></li>
                                        <li><Link href="referenser">REFERENSER</Link></li>
                                        <li><Link href="omoss">OM OSS</Link></li>
                                        <li><Link href="kontakt">KONTAKT</Link></li>
                                </ul>
                        </div>
                </Container>
        )
}

const MobileNav = () => {
        const [showAll, setShowAll] = useState(false);
        
        const toggleAll = () => {
                setShowAll(val => !val);
               
              };
        
        return(
                <div className={style.mNavbarWrapper}>
                        <List size={50} onClick={toggleAll} />
                                {showAll ? <Content />  : ""}
                </div>
        )
}

/*


*/


const Navbar = () => {
        return(
                <div className={style.navbar}>
                        <Container>
                                <Row>
                                        <Col xs={12}>
                                                <div className={style.logoWrapper}>
                                                        <div className={style.logo}>
                                                                <Image src="logo.png" width={'100%'} height={'100%'} />
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>

                                <div className={style.desktopNavbar}>
                                        <Row>
                                                <Col xs={12} md={12} lg={12}>
                                                        <div className={style.dNavbarWrapper}>
                                                                <ul type="none">
                                                                <li><Link href="/">STRONA GŁÓWNA</Link></li>
                                                                <li><Link href="projects">REALIZACJE</Link></li>
                                                                <li><Link href="about">O NAS</Link></li>
                                                                <li><Link href="contact">KONTAKT</Link></li>
                                                                </ul>
                                                        </div>
                                                </Col>
                                        </Row>
                                </div>

                                <div className={style.mobileNavbar}>
                                        <Row>
                                                <Col xs={12} md={12} lg={12}>
                                                        <MobileNav />
                                                </Col>
                                        </Row>
                                </div>
                        </Container>
                </div>
        )
}

export default Navbar;