import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreateDish from "../components/modals/CreateDish";
import CreateType from "../components/modals/CreateType";
import CreateUser from './../components/modals/CreateUser';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [dishVisible, setDishVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDishVisible(true)}
            >
                Добавить блюдо
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUserVisible(true)}
            >
                Добавить столик
            </Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDish show={dishVisible} onHide={() => setDishVisible(false)} />
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)} />
        </Container>
    );
};

export default Admin;