import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { dish } = useContext(Context)
    return (
        <ListGroup>
            {dish.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === dish.selectedType.id}
                    onClick={() => dish.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;