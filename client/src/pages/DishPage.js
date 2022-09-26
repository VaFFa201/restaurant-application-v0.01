import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { addToBasket } from '../http/dishAPI';
import { fetchOneDish } from '../http/dishAPI';

const DishPage = () => {
    const [dish, setDish] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDish(id).then(data => setDish(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('dishId', id)
        formData.append('count', 1)
        formData.append('status', 'WAITING')
        addToBasket(formData).then(() => alert(`Товар ` + dish.name + ` был добавлен в вашу корзину!`))
    }


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + dish.img} />
                </Col>
                <Col md={8}>
                    <Row className="d-flex flex-column align-items-center">
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, border: '3px solid lightgray' }}
                        >
                            <h2>{dish.name}</h2>
                            <h3>{dish.price} руб.</h3>
                            <h4>{dish.description}</h4>
                            <Button
                                variant={"outline-dark"}
                                onClick={add}
                            >Добавить в корзину</Button>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DishPage;