import { Button, InputGroupm, Container, Form, Col, Row, Card } from "react-bootstrap";


function Login(){
    return(
        <div className="vh-100 colog">
        <Container>
            <Row className="row-contact">
                <Col md={6}>
                    <Card className="shadow p-4" style={{marginTop: "120px"}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        // <div className="vh-100 colog">
            
        //     {/* <div className="container colog">
        //         <div className="row ">
        //             <div className="col-md-6">
        //                 <div className="card p-4 shadow" >
        //                     <div className="card-body">
        //                         <div className=" bd-highlight">
        //                             <h4>Hi, Welcome</h4>
        //                         </div>
        //                         <div className="form-group" style={{marginTop:"25px"}}>
        //                             <label>Email</label>
        //                             <input type="text" id="basic-addon1"  className="form-control fa-envelope"></input>
        //                         </div>
        //                         <div className="form-group" style={{marginTop:"10px"}}>
        //                             <label>Password</label>
        //                             <input type={"password"} className="form-control"></input>
        //                         </div >

        //                         <Button style={{marginTop:"30px", width:"100%"}}>Sign in</Button>

        //                         <div style={{marginTop:"20px"}} className="forgot align-items-center ">
        //                             <p>forgot password?</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> */}
        // </div>
    )
}

export default Login;