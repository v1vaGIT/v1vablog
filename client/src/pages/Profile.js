import React from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

const Profile = () => {
  return (
    <Container className="container rounded bg-white mt-5 mb-5">
      <Row>
        <Col md="3" className="border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-1">
          <Image className="rounded-circle mt-5 profileImage" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></Image>
            <span class="font-weight-bold">Edogaru</span>
            <span class="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </Col>
        <Col md="5" className="border-right">
          <div className="p-3 py-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h4>Настройка профиля</h4>
            </div>
            <Row className="mt-2">
              <Col md="6">
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label className="labels">Имя</Form.Label>
                    <Form.Control type="text" placeholder="Введите имя" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Col md="6">
                <Form>
                  <Form.Group controlId="formBasicSurname">
                    <Form.Label className="labels">Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Введите фамилию" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md="12">
                <Form>
                  <Form.Group controlId="formBasicNumber">
                    <Form.Label className="labels">Номер телефона (без +7)</Form.Label>
                    <Form.Control type="text" placeholder="Введите номер" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Col md="12">
                <Form>
                  <Form.Group controlId="formBasicBirthday">
                    <Form.Label className="labels">Дата рождения</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Укажите дату рождения"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Col md="12">
                <Form>
                  <Form.Group controlId="formBasicGender">
                    <Form.Label className="labels">Пол</Form.Label>
                    <Form.Select>
                      <option>Не выбрано</option>
                      <option>Мужской</option>
                      <option>Женский</option>
                      <option>Иной</option>
                    </Form.Select>
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <div className="mt-5 text-center">
              <Button className="profile-button" type="submit">Сохранить</Button>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="p-3 py-5">
          
          <div className="d-flex justify-content-between align-items-center experience"><span>Придумайте никнейм</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;nickname</span></div>
          <Col md="12">
                <Form>
                  <Form.Group controlId="formBasicNumber">
                    <Form.Label className="labels">Ваш никнейм самый крутой!</Form.Label>
                    <Form.Control type="text" placeholder="Мой никнейм" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Form>
              </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
