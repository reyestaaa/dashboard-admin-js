import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
// import "./style.css"

import 'react-timelines/lib/css/style.css'

import Speedometer  from "./component/speedometer"

// import Timeline from 'react-calendar-timeline'
// import 'react-calendar-timeline/lib/Timeline.css'
// import moment from 'moment'

// const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }, { id: 3, title: 'group 3' }, { id: 4, title: 'group 4' }]

// const items = [
//   {
//     id: 1,
//     group: 1,
//     title: 'USER FLOW',
//     start_time: moment(),
//     end_time: moment().add(1, 'hour')
//   },
//   {
//     id: 2,
//     group: 2,
//     title: 'UI/UX FIX',
//     start_time: moment().add(-0.5, 'hour'),
//     end_time: moment().add(0.5, 'hour')
//   },
//   {
//     id: 3,
//     group: 1,
//     title: 'BACKEND ',
//     start_time: moment().add(6, 'hour'),
//     end_time: moment().add(3, 'hour')
//   },
//   {
//     id: 4,
//     group: 3,
//     title: 'ANKJER AA 3',
//   },
//   {
//     id: 5,
//     group: 4,
//     title: 'REPORT',
//     start_time: moment().add(2, 'hour'),
//     end_time: moment().add(3, 'hour')
//   }
// ]

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
                    <h2>Task Distribution</h2>
                    {/* <Timeline
                        groups={groups}
                        items={items}
                        defaultTimeStart={moment().add(-12, 'hour')}
                        defaultTimeEnd={moment().add(12, 'hour')}
                    /> */}

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
        </Row>
    </Container>
  )
}
