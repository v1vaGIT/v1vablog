import React, { useContext, useState } from 'react';
import { Button, Container, Form, Card, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {LOGIN_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            const data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(NEWS_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Button 
                        className='mt-3'
                        variant={"outline-success"}
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    {isLogin ?
                    <div className='d-flex justify-content-center align-items-center mt-3'>Нет аккаунта?&nbsp;<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
                    :
                    <div className='d-flex justify-content-center align-items-center mt-3'>Есть аккаунт?&nbsp;<NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>
                    }   
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;