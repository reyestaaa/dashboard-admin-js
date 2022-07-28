import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';
import { Button, InputGroup, Container, Form, Col, Row, Card, Table } from "react-bootstrap";

function Add(props) {
    return (

        <Container fluid className="vh-100">
            <Row>
                <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="fw-bold">New Members</h2>
                    </div>

                    <Row className='p-3'>
                        <Col md={12}>
                            <Form>
                                <div className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </div>
                                <div className='mb-3'>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select aria-label="Your Role">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className='mb-3'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Your Number Phone" />
                                </div>
                                <div className='text-end'>
                                    <Link className='btn btn-light me-3 shadow-sm' to='/agents'>
                                        Back
                                    </Link>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>


                    <Footer />

                </main>
            </Row>

        </Container>
    );
}

export default Add;