import { Button, InputGroupm, Container, Form, Col, Row, Card } from "react-bootstrap";

function Login(){
    return(
        <section className="vh-100 log">
            <Container className="py-5 h-100">
                <Row className=" d-flex justify-content-center align-items-center h-100">
                    <Col md={6} lg={6} xl={5}>
                        <Card className="shadow p-4 card-login" style={{marginTop: ""}}>
                            <Card.Body>
                                <div className="text-center mb-4 mt-4">
                                    <h2 className="fw-bold mb-3">Log In to APRODITE</h2>
                                    <p className="text-muted">Enter your email and password below</p>
                                </div>
                                <Form>
                                    
                                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <Form.Label className="fw-bold text-muted">EMAIL </Form.Label>
                                        <Form.Control type="email" placeholder="Email address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                                        <Form.Label className="fw-bold text-muted">PASSWORD</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-4 text-end">
                                        <a href="#!" class="text-body text-decoration-none">Forgot password?</a>
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        <Button type="submit" className="btn-login p-2 btn-lg fw-bold mb-4 shadow">
                                            Log In
                                        </Button>
                                        <p>
                                            Don’t have an account? 
                                            <a href="#!" className="text-decoration-none">Sign Up</a>
                                        </p> 
                                    </div>

                                </Form>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login;