import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DISH_ROUTE } from '../utils/consts';

const DishItem = ({ dish }) => {
    const history = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={() => history(`${DISH_ROUTE + '/' + dish.id}`)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"} >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + dish.img} />
                <Row className='mt-1 d-flex justify-content-between align-items-center'>
                    <Col>
                        {dish.name}
                    </Col>
                    <Col>
                        {dish.price + 'руб.'}
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default DishItem;