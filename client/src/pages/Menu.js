import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DishList from '../components/DishList';
import TypeBar from '../components/TypeBar';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { fetchTypes } from '../http/dishAPI';
import { fetchDish } from '../http/dishAPI';

const Menu = observer(() => {

    const { dish } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => dish.setTypes(data))
        fetchDish(null).then(data => dish.setDishes(data))
    }, [])

    useEffect(() => {
        fetchTypes().then(data => dish.setTypes(data))
        fetchDish(dish.selectedType.id).then(data => dish.setDishes(data))
    }, [dish.selectedType])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9} >
                    <DishList />
                </Col>
            </Row>
        </Container>
    );
});

export default Menu;