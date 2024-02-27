import { React, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useFetch } from '../components/Services/Plans';
const Steppers = () => {

    const data = useFetch();
    const [goSteps, setGoSteps] = useState(0);
    const saveToLocalStorage = (key, value) => {
        try {
            // Convertimos el valor a JSON antes de guardarlo en el localStorage
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
            setGoSteps(1)
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return (
        <div
            style={{
                height: "100vh",
            }}
        >
            <Container>
                <Stepper activeStep={goSteps}>
                    <Step onClick={() => setGoSteps(0)} label="Planes y coberturas" />
                    <Step onClick={() => setGoSteps(1)} label="Resumen" />
                </Stepper>
                {goSteps === 0 && (
                    <div>
                        <div>
                            <h1>{localStorage.getItem('name').replace(/['"]+/g, '')} ¿Para quién deseas cotizar?</h1>
                            <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
                            <Row xs={1} md={2} className="g-4 pb-4">

                                <Col>
                                    <Card>
                                        <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M41.9381 13.3212C42.0742 12.6316 41.9807 11.9163 41.6719 11.2849C41.3631 10.6534 40.856 10.1404 40.2281 9.82435L22.4344 0.927474C21.9885 0.706398 21.4976 0.59137 21 0.59137C20.5023 0.59137 20.0114 0.706398 19.5656 0.927474L1.77186 9.82435C1.14397 10.1404 0.636868 10.6534 0.328068 11.2849C0.0192679 11.9163 -0.0742378 12.6316 0.0618556 13.3212L2.55373 25.7768C3.57803 30.903 6.47851 35.4623 10.6875 38.5625L11.4581 39.125C11.5044 37.9928 11.687 36.8703 12.0019 35.7819C8.64393 33.1325 6.33989 29.3733 5.5031 25.1787L2.99998 12.7325C2.99177 12.6881 2.9981 12.6422 3.01803 12.6017C3.03796 12.5611 3.07043 12.5281 3.11061 12.5075L20.9044 3.6106C20.9336 3.59648 20.9656 3.58915 20.9981 3.58915C21.0306 3.58915 21.0626 3.59648 21.0919 3.6106L38.8856 12.5C38.9258 12.5206 38.9583 12.5536 38.9782 12.5942C38.9981 12.6347 39.0044 12.6806 38.9962 12.725L36.5044 25.1825C36.2104 26.6475 35.7355 28.0703 35.0906 29.4181C35.8844 30.1578 36.5897 30.9871 37.1925 31.8894C38.2565 29.9789 39.0157 27.9141 39.4425 25.7694L41.9381 13.3212Z" fill="url(#paint0_linear_6994_137449)" />
                                            <path d="M31.2994 29.2025L28.3687 27.5844C29.3166 27.0684 30.1078 26.3063 30.6588 25.3784C31.2099 24.4504 31.5005 23.3911 31.5 22.3119V19.9381C31.5 18.3468 30.8679 16.8207 29.7426 15.6955C28.6174 14.5703 27.0913 13.9381 25.5 13.9381C23.9087 13.9381 22.3826 14.5703 21.2574 15.6955C20.1321 16.8207 19.5 18.3468 19.5 19.9381V22.3119C19.4995 23.3911 19.7901 24.4504 20.3412 25.3784C20.8922 26.3063 21.6834 27.0684 22.6313 27.5844L19.7006 29.2025C17.8231 30.2389 16.2577 31.7596 15.1672 33.6062C14.0767 35.4528 13.501 37.5579 13.5 39.7025V42.5C13.5 42.8978 13.658 43.2793 13.9393 43.5606C14.2206 43.842 14.6022 44 15 44H36C36.3978 44 36.7794 43.842 37.0607 43.5606C37.342 43.2793 37.5 42.8978 37.5 42.5V39.7081C37.5 37.5626 36.9248 35.4563 35.8342 33.6086C34.7437 31.7609 33.1777 30.2394 31.2994 29.2025Z" fill="url(#paint1_linear_6994_137449)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_6994_137449" x1="0.000976562" y1="0.59137" x2="19.4619" y2="48.3152" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.272135" stop-color="#34263B" />
                                                    <stop offset="0.658079" stop-color="#13172C" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_6994_137449" x1="14.1279" y1="16.2974" x2="38.2816" y2="35.5807" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.35" stop-color="#F7052D" />
                                                    <stop offset="0.85" stop-color="#CA5AFA" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <Card.Body>
                                            <Card.Title>Para mí</Card.Title>
                                            <Card.Text>
                                                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.2281 9.82441L22.4344 0.927535C21.9885 0.706459 21.4976 0.591431 21 0.591431C20.5023 0.591431 20.0114 0.706459 19.5656 0.927535L1.77186 9.82441C1.14397 10.1405 0.636868 10.6534 0.328068 11.2849C0.0192679 11.9164 -0.0742378 12.6316 0.0618556 13.3213L2.55373 25.7769C3.57803 30.903 6.47851 35.4624 10.6875 38.5625L19.1025 44.7782C19.6529 45.1884 20.321 45.41 21.0075 45.41C21.694 45.41 22.3621 45.1884 22.9125 44.7782L23.9756 43.9925C23.2684 43.283 22.6472 42.4925 22.125 41.6375L21.1312 42.3707C21.0961 42.3971 21.0533 42.4114 21.0094 42.4114C20.9654 42.4114 20.9226 42.3971 20.8875 42.3707L12.4725 36.155C11.7979 35.6563 11.1583 35.1119 10.5581 34.5257C10.8205 32.9483 11.4363 31.4508 12.3595 30.1451C13.2826 28.8395 14.4891 27.7596 15.8887 26.9863L18 25.8125C19.1415 26.3107 20.3891 26.5168 21.6301 26.4122C22.8712 26.3075 24.0667 25.8954 25.1086 25.2131C26.1506 24.5308 27.0062 23.5998 27.5983 22.5041C28.1904 21.4083 28.5003 20.1824 28.5 18.9369V16.5632C28.5 14.574 27.7098 12.6664 26.3033 11.2599C24.8968 9.85334 22.9891 9.06316 21 9.06316C19.0109 9.06316 17.1032 9.85334 15.6967 11.2599C14.2902 12.6664 13.5 14.574 13.5 16.5632V18.9369C13.4991 20.7456 14.1547 22.4932 15.345 23.855L14.4375 24.3594C11.5371 25.962 9.32157 28.5682 8.20686 31.6888C6.88671 29.7216 5.9679 27.5131 5.50311 25.19L2.99998 12.7325C2.99177 12.6881 2.9981 12.6422 3.01803 12.6017C3.03796 12.5612 3.07042 12.5282 3.11061 12.5075L20.9044 3.61066C20.9336 3.59654 20.9656 3.58921 20.9981 3.58921C21.0306 3.58921 21.0626 3.59654 21.0919 3.61066L38.8856 12.5C38.9258 12.5207 38.9583 12.5537 38.9782 12.5942C38.9981 12.6347 39.0044 12.6806 38.9962 12.725L36.9656 22.8725C37.9484 23.1936 38.888 23.6344 39.7631 24.185L41.9381 13.31C42.0715 12.6221 41.9767 11.9094 41.6681 11.2802C41.3594 10.6511 40.8538 10.1399 40.2281 9.82441ZM16.5 16.5632C16.5 15.3697 16.9741 14.2251 17.818 13.3812C18.6619 12.5373 19.8065 12.0632 21 12.0632C22.1935 12.0632 23.3381 12.5373 24.182 13.3812C25.0259 14.2251 25.5 15.3697 25.5 16.5632V18.9369C25.5 20.1304 25.0259 21.275 24.182 22.1189C23.3381 22.9628 22.1935 23.4369 21 23.4369C19.8065 23.4369 18.6619 22.9628 17.818 22.1189C16.9741 21.275 16.5 20.1304 16.5 18.9369V16.5632Z" fill="url(#paint0_linear_6994_137449)" />
                                            <path d="M40.425 27.575C38.9565 26.1067 37.0856 25.1067 35.0488 24.7017C33.012 24.2966 30.9009 24.5046 28.9823 25.2994C27.0637 26.0941 25.4239 27.4399 24.2702 29.1666C23.1165 30.8933 22.5007 32.9233 22.5007 35C22.5007 37.0767 23.1165 39.1067 24.2702 40.8334C25.4239 42.5601 27.0637 43.9059 28.9823 44.7006C30.9009 45.4954 33.012 45.7034 35.0488 45.2983C37.0856 44.8933 38.9565 43.8933 40.425 42.425C41.4001 41.45 42.1736 40.2924 42.7014 39.0184C43.2291 37.7444 43.5007 36.379 43.5007 35C43.5007 33.621 43.2291 32.2556 42.7014 30.9816C42.1736 29.7076 41.4001 28.55 40.425 27.575ZM39 36.5H34.5V41H31.5V36.5H27V33.5H31.5V29H34.5V33.5H39V36.5Z" fill="url(#paint1_linear_6994_137449)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_6994_137449" x1="0.000976562" y1="0.591431" x2="25.0678" y2="53.4398" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.272135" stop-color="#34263B" />
                                                    <stop offset="0.658079" stop-color="#13172C" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_6994_137449" x1="23.0501" y1="26.1481" x2="40.3526" y2="43.4506" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.35" stop-color="#F7052D" />
                                                    <stop offset="0.85" stop-color="#CA5AFA" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <Card.Body>
                                            <Card.Title>Para alguien más</Card.Title>
                                            <Card.Text>
                                                Realiza una cotización para uno de tus familiares o cualquier persona.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                {data.map((plan, index) => (

                                    <Col className="p-4" key={index}>
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>{plan.name}</Card.Title>
                                                <Card.Text>
                                                    Costo del plan
                                                </Card.Text>
                                                <Card.Text>
                                                    Costo del plan <br></br>
                                                    <span>${plan.price} al mes</span>
                                                </Card.Text>
                                                <hr></hr>
                                                <Card.Text>
                                                    <ul>
                                                        {plan.description.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => saveToLocalStorage('plan', plan)}>Seleccionar Plan</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}


                            </Row>

                        </div>

                    </div>
                )}
                {goSteps === 1 && (
                    <div>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Precios calculados para:</Card.Title>
                                        <Card.Text><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z" fill="#141938" />
                                            <path d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z" fill="#141938" />
                                            <path d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z" fill="#141938" />
                                            <path d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z" fill="#141938" />
                                        </svg> {localStorage.getItem('name').replace(/['"]+/g, '')} {localStorage.getItem('lastName').replace(/['"]+/g, '')}
                                        </Card.Text>
                                        <Card.Text>
                                            Responsable de pago
                                            <br></br>DNI:{localStorage.getItem('document')}
                                            <br></br>Celular:{localStorage.getItem('phone')}
                                        </Card.Text>
                                        <Card.Text>
                                            Plan elegido
                                            <br></br>{JSON.parse(localStorage.getItem('plan')).name}
                                            <br></br>costo del plan: ${JSON.parse(localStorage.getItem('plan')).price}  al mes
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <button onClick={() => setGoSteps(2)}>Next</button>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Steppers;