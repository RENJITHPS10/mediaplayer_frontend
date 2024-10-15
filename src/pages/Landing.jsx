import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { width } from '@fortawesome/free-solid-svg-icons/faVideo';
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5'>
        <Row>

          <Col md={6}>
            <h2>Welcome to <span className='text-warning'>Media player</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perferendis dolorem ex reiciendis nesciunt quas, iure commodi quo animi dignissimos asperiores culpa vero quam omnis sit, impedit nostrum, et quos!</p>
            <Link to={'/home'}>  <button className='btn btn-warning mt-5'>Get started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} >
            <img src="https://cdn.dribbble.com/users/727480/screenshots/5253872/media/a031df46606a1de6be93bc3b5f2152d0.gif" alt="" className='w-100 rounded-pill' />

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='py-5'>

          <Col md={1}></Col>
          <Col md={10}>
            <h2 className='text-center'>Features</h2>

            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }} className='rounded-5'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/e3/ea/78/e3ea780936fa4fd667123bd663afe05e.gif" className='p-3 rounded-5' style={{ width: '100%', height: '300px' }} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>

              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }} className='rounded-5'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/a0/dc/75/a0dc75610ef8e1b2f56ffe79d94f2469.gif" className='p-3 rounded-5' style={{ width: '100%', height: '300px' }} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card></Col>
              <Col md={4}>
                <Card style={{ width: '100%' }} className='rounded-5'>
                  <Card.Img variant="top" src="https://img1.picmix.com/output/stamp/thumb/4/4/9/7/1807944_72a30.gif" className='p-3 rounded-5' style={{ width: '100%', height: '300px' }} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card></Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>

      </Container>

      <Container>
        <Row className='justify-content-center'> 
          <Col md={11} className='border border-light border-2 rounded p-4'>
            <Row>
              <Col md={6}>
                <h2 className='text-warning'>Simple fast and powerful</h2>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt saepe aliquam nisi ex ea quidem minima, itaque dolorem temporibus sint repudiandae eos illo deleniti natus dolorum aliquid nihil a at!</p>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt saepe aliquam nisi ex ea quidem minima, itaque dolorem temporibus sint repudiandae eos illo deleniti natus dolorum aliquid nihil a at!</p>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt saepe aliquam nisi ex ea quidem minima, itaque dolorem temporibus sint repudiandae eos illo deleniti natus dolorum aliquid nihil a at!</p>
              </Col>
              <Col md={6}>
                <iframe width="100%" height="438" src="https://www.youtube.com/embed/ZdMZ40GSVmc?autoplay=1" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing
