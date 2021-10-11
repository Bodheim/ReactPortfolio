import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const mystyle = {
    backgroundColor: '#BEFFC7',
  };

  return (
    <>
      <Navbar class="navbar" style={{ backgroundColor: '#46b1c9' }}>
        <Navbar.Brand className="ps-2 ms-3">Abby Castelow</Navbar.Brand>
        <Nav>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            style={mystyle}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Projects')}
            className={
              currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
            }
            style={mystyle}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
            style={mystyle}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
            }
            style={mystyle}
          >
            Resume
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NavTabs;
