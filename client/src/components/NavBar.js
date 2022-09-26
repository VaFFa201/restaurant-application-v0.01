import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, MENU_ROUTE, BASKET_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {

    const { user } = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={MENU_ROUTE}>Меню</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        {user.isAdmin ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => history(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            variant={"outline-light"}
                            className="mr-2"
                            onClick={() => history(BASKET_ROUTE)}
                        >
                            Корзина
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;