/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const { path } = useSelector(state => state.urlPath);

  const { userInfo } = useSelector(state => state.userLogin);

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      {path !== '/student/test/start' && (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>WPU - OpenApi</Navbar.Brand>
            </LinkContainer>
            {userInfo && (
              <>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    {userInfo && userInfo.category === 'MEMBER' && (
                      <>
                        <LinkContainer to="/apitable">
                          <Nav.Link>
                            <i className="fas fa-list" />
                            &nbsp;LIST API
                          </Nav.Link>
                        </LinkContainer>
                      </>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </>
            )}
            <Nav>
              {userInfo ? (
                <NavDropdown title={userInfo.name.toUpperCase()} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <i className="fas fa-user" />
                      &nbsp;PROFIL
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/login">
                    <NavDropdown.Item onClick={logOutHandler}>
                      <i className="fas fa-sign-out-alt" />
                      &nbsp;KELUAR
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-sign-in-alt" />
                      &nbsp;Masuk
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fas fa-user-plus" />
                      &nbsp;Daftar
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
