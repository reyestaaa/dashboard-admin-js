import React from 'react'
import { Container, Row, Col, Card, ListGroup, Table, Button, Dropdown, SplitButton, InputGroup, Form, DropdownButton } from 'react-bootstrap'
// import "./style.css"

import 'react-timelines/lib/css/style.css'
import Footer from '../../Components/Footer'

import Task from "../dashboard/component/taskDistribution"

import Speedometer  from "./component/speedometer"

let maps = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0'
let img = "../../image/Ellipse.png"

export default function dashboard() {
  return (
    <Container fluid>
        <Row>
            <Col md={9} className="border-end border-1 border-dark">
                <Row className='mt-5'>
                    {/* Spedometer */}
                    <Col md={4}>
                        <Speedometer title="Completed Task"></Speedometer>
                    </Col>
                    <Col md={4}>
                        <Speedometer title="Task in Progress"></Speedometer>
                    </Col>
                    <Col md={4}>
                        <Speedometer title="Overdue Task"></Speedometer>
                    </Col>

                    {/* Task Distribution */}
                    {/* <Timeline /> */}
                    <Task />

                </Row>
            </Col>

            <Col md={3} className="side-scroll">
                
                <img src="./image/logokaleender-removebg-preview.png" className="img-fluid"/>

                <div className="text-side text-center mb-5">
                    <h3 className="fw-bold">Website Redesign</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima ea ab.</p>
                </div>

                <div className="maps d-flex justify-content-center mb-5">
                    <iframe src={maps} height={300} width={290}/>
                </div>

                <div className='list-user'>
                    <Card className='shadow border-0'>
                        <ListGroup className=''>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

            </Col>

            <Col md={12} className=" border-top border-dark mt-2">

                <div className='p-2 text-light bg-secondary d-flex align-items-center'>
                    <i class='bx bx-cloud-download bx-md'></i>
                    <h3 className='fw-bold ms-3'>Assigned Task</h3>
                </div>

                <div className='d-flex justify-content-between mt-3 p-3'>

                    <div className='d-flex align-items-center'>
                        <InputGroup className="w-50">
                            <Form.Control aria-label="Text input with dropdown button" />

                            <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <p className='ms-4 mt-3 fw-bold'>Record Per Page</p>
                    </div>

                    <div className='d-flex align-items-center'>
                        <p className='mt-3 fw-bold'>Search:</p>
                        <input type="search" class="form-control ms-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                </div>
                <div className='tablevl'>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Next Action</th>
                            <th>Assigned To</th>
                            <th>Crated By</th>
                            <th>Update By</th>
                            <th>Last Updated</th>
                            <th>Status</th>
                            <th>Priorty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Accounts Documnets</td>
                            <td>Close</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>27/08/2022</td>
                            <td>Pending</td>
                            <td>Low</td>
                            
                            <td>
                                <Button className='me-3' variant='danger'>
                                    Doness
                                </Button>
                                <Button className='me-3' variant='primary'>
                                    Done
                                </Button>
                                <Button variant='success'>
                                    Dones
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Accounts Documnets</td>
                            <td>Close</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>27/08/2022</td>
                            <td>Pending</td>
                            <td>Low</td>
                            
                            <td>
                                <Button className='me-3' variant='danger'>
                                    Doness
                                </Button>
                                <Button className='me-3' variant='primary'>
                                    Done
                                </Button>
                                <Button variant='success'>
                                    Dones
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Accounts Documnets</td>
                            <td>Close</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>Admin</td>
                            <td>27/08/2022</td>
                            <td>Pending</td>
                            <td>Low</td>
                            
                            <td>
                                <Button className='me-3' variant='danger'>
                                    Doness
                                </Button>
                                <Button className='me-3' variant='primary'>
                                    Done
                                </Button>
                                <Button variant='success'>
                                    Dones
                                </Button>
                            </td>
                        </tr>
                    </tbody>

                </Table>
                </div>
                
            </Col>
        </Row>
        <Footer />
    </Container>
  )
}
