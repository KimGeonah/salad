import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer_outer">
            <Container>
                <Row className="footer">

                    <Col className='info' md={10}>
                        <h3>슬림쿡 : 일상에서 만나는 가벼움</h3>

                        <ul>
                            <li><span>회사명</span> 주식회사 옳은</li>
                            <li><span>주소</span> 서울 강남구 봉은사로37길 7-9 2F</li>
                            <li><span>통신판매번호</span> 제2022-서울강남-05940호</li>
                        </ul>
                        <p>© 2023 슬림쿡. All rights reserved.</p>
                    </Col>

                    <Col className='time' md={2}>
                        <h3>CS CENTER</h3>
                        <ul>
                            <li>1600-3413</li>
                            <li>평일 10:00 ~ 17:00</li>
                            <li>점심시간 13:00 ~ 14:00</li>
                            <li>주말 및 공휴일 휴무</li>
                        </ul>
                    </Col>



                </Row>


            </Container>
        </footer>
    );
};

export default Footer;
