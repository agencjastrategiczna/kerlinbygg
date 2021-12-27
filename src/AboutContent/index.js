import style from './style.module.scss';

import Image from 'next/image'

import { Row, Col, Button } from 'react-bootstrap'

const AboutContent = () => {
        return(
                <>
                        <Row>
                                <Col sm={12} md={12}>
                                        <div className={style.content}>
                                                <h2>O Firmie</h2>
                                                <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus convallis felis, at pulvinar tellus. Mauris fermentum nulla eros, at interdum velit rhoncus quis. Proin orci nisl, fringilla eu suscipit ut, pretium et ante. Vestibulum vitae quam id nibh egestas iaculis vel non ante. Nam bibendum odio sit amet justo pellentesque, vitae faucibus velit posuere. Maecenas sollicitudin auctor justo, hendrerit ultrices mauris semper ac. Donec mollis tempus congue. Vestibulum gravida feugiat diam quis rutrum. Sed ac nisl facilisis sapien sagittis commodo dignissim ac lacus. Maecenas facilisis metus ac ante efficitur, nec accumsan augue auctor. Proin vehicula neque nulla, at tempus nibh mollis eget. Proin ultrices elit lectus, sed iaculis odio dapibus in. Ut porta finibus tortor sit amet sodales.
                                                </p>

                                                <button type="button">Zamów wycenę</button>
                                        </div>
                                </Col>
                                <Col sm={12} md={6}>
                                        
                                </Col>
                        </Row>

                </>
        )
}

export default AboutContent;