// pages/index.js

import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../image.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useFetch } from '../components/Services/Users';
const Home = () => {
    const {data} = useFetch();
    const [validated, setValidated] = useState(false);
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            navigateStepper(event.target.document.value,event.target.phone.value);
        }
       
        
        };

        const navigateStepper = (doc,phone) => {
            // 👇️ navigate to /
            localStorage.setItem('name', JSON.stringify(data.name));
            localStorage.setItem('lastName', JSON.stringify(data.lastName));
            localStorage.setItem('document', doc);
            localStorage.setItem('phone', phone);
            navigate('/stepper');
          };
    return (

            <Container>
                <div className="row g-0 auth-wrapper">
                    <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">                       
                        <Image src={logo} fluid />;
                    </div>

                    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                        <div className="d-flex flex-column align-content-end">
                            <div className="auth-body mx-auto">
                                <div className='spanGradien'>Seguro Salud Flexible</div>
                                <h1>Creado para ti y tu familia</h1>
                                <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">

                                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend"> <Form.Select aria-label="Default select example">
                                                    <option value="1">DNI</option>
                                                </Form.Select></InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nro. de documento"
                                                    name="document"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Ingresa el numero de documento.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12" controlId="validationCustom03">

                                            <Form.Control type="text" name="phone" placeholder="Celular" required />
                                            <Form.Control.Feedback type="invalid">
                                                Campo requerido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check className='labelCheck'
                                            required
                                            label="Acepto lo Política de Privacidad"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check className='labelCheck'
                                            required
                                            label="Acepto la Política Comunicaciones Comerciales"
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <p className='terms'>Aplican Términos y Condiciones.</p> </Form.Group>
                                    
                                    <Button className='btnCotizar' type="submit">Cotiza aquí</Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

    );
};

export default Home;