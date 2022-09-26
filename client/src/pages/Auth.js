import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { MENU_ROUTE } from "../utils/consts";
import { logIn } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data = await logIn(login, password);
            user.setUser(user)
            user.setIsAuth(true)
            if (login === "admin@mail.ru") {
                user.setIsAdmin(true)
            }
            history(MENU_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите login столика..."
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Button
                        className='mt-3'
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Войти
                    </Button>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;