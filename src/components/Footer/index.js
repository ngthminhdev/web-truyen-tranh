import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import './Footer.css'

function Footer() {
  return (
    <Container fluid>
        <Row className='d-flex justify-content-center align-items-center text-center' style={{backgroundColor: 'rgb(220, 53, 69)', minHeight: '50px'}}>
            <Col>
                <Link to ='/' className='none'>Điều Khoản</Link>
            </Col>
            <Col>
                <Link to ='/' className='none'>Chính Sách</Link>
            </Col>
            <Col>
                <Link to ='/' className='none'>Liên Hệ</Link>
            </Col>
        </Row>
        <Row className='d-flex align-items-center text-center' style={{backgroundColor: 'rgb(220, 53, 69)'}}>
            <div style={{color: '#fff', paddingBottom: '15px', fontSize: '13px  '}}>
                <AiOutlineCopyrightCircle/> Minh Nguyễn 2022 | Email: ngthminh2409@gmail.com
            </div>
        </Row>
    </Container>
  )
}

export default Footer