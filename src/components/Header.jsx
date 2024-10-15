import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
   <Navbar className="bg-transparent">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} beatFade className='me-3y' />
             {' '}
             Media player
          
            </Navbar.Brand>
          </Link>
        </Container>
        
      </Navbar>
      <hr />
   </>
  )
}

export default Header
