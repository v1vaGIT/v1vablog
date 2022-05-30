import React, { useContext, useState } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Form, FormControl, Button, NavLink } from "react-bootstrap";
import { LOGIN_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import CreateNews from "./modals/createNews";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  const [newsVisible, setNewsVisible] = useState(false)
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-center">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>

          {user.isAuth ? (
            <NavDropdown title="Профиль" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                
                <NavLink to={PROFILE_ROUTE}>Профиль</NavLink>
                
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNewsVisible(true)}>
                Добавить новость
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logOut()}>
                Выйти
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => navigate(LOGIN_ROUTE)}>
                Авторизация
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
        <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)}/>
      </Container>
    </Navbar>
  );
});

export default NavBar;
