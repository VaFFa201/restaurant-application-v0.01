import React, { useState, useContext, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown } from "react-bootstrap";
import { Context } from './../../index';
import { fetchTypes, createDish } from '../../http/dishAPI';
import { observer } from 'mobx-react-lite';

const CreateDish = observer(({ show, onHide }) => {
    const { dish } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => dish.setTypes(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDish = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('typeId', dish.selectedType.id)
        createDish(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить блюдо
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{dish.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dish.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => dish.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание устройства"

                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDish}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDish;