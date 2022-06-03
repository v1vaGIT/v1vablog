import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createNews, fetchNews} from "../../http/newsAPI";
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
//const {news} = useContext(Context)

const CreateNews = observer(({show, onHide}) => {
    const {news} = useContext(Context)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const addNews = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('text', text)
        createNews(formData).then(data => {
            onHide();
            fetchNews().then(data => news.setNews(data))
        });
        
        
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите заголовок"}
                    />
                    <Form.Control
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder={"Введите текст"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addNews}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateNews;