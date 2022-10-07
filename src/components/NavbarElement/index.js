import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Button, Container, Col, Row, Modal, Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'



function NavbarElement() {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  }

  return (
    <Container fluid>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header>
            <Modal.Title>Tìm kiếm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className='d-flex'>
                    <Form.Control placeholder='Nhập tên truyện...' style={{borderTopRightRadius:'0px', borderBottomRightRadius:'0px'}}/>
                    <Button variant='danger' style={{borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px'}}><BsSearch/></Button>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleModal} variant='danger'>Đóng</Button>
        </Modal.Footer>
    </Modal>
      <Row className="d-flex justify-content-center align-items-center text-center" style={{backgroundColor: '#dc3545', height: '64px'}}>
        <Col>
          <Button variant='outline-danger' style={{color: 'white', fontWeight: 'bold', fontSize: '20px'}} onClick={()=> navigate('/')}>
            Trang Chủ
          </Button>
        </Col>
        <Col>
          <Button variant='outline-danger' style={{color: 'white', fontSize: '16px'}} onClick={handleModal}>
              <BsSearch/> TÌM KIẾM
          </Button>
        </Col>
        <Col>
          <Button variant='outline-danger' style={{color: 'white', fontSize: '16px'}}>
            THỂ LOẠI
          </Button>
        </Col>
        <Col >
          <Button variant='outline-danger' style={{color: 'white', fontSize: '16px'}}>
            LỊCH SỬ
          </Button>
        </Col>
        <Col>
          <Button variant='outline-danger' style={{color: 'white', fontSize: '16px'}}>
            ĐANG THEO DÕI
          </Button>
        </Col>
        <Col>
          <Button variant='warning' style={{fontSize: '16px'}} onClick={()=> navigate('/login')}>
            ĐĂNG NHẬP
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NavbarElement