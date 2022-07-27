import React from 'react';
import Sidebar from "../../Components/Sidebar";
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';


function Index(props) {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="fw-bold">Members</h2>
                        <div className='d-flex'>
                              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                              <Link to="/agents/add" className='btn btn-primary btn-member ms-4 fw-bold p-2'>
                                NEW MEMBER <i class='bx bxs-plus-circle ms-2'></i>
                              </Link>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 p-3">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">Developer</th>
                                <th scope="col">Role</th>
                                <th scope="col">Phone number</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='d-flex'>
                                        <img src="./image/pros.png" class="img-fluid me-3" alt="..." />
                                        <p>JONAS AMSO</p>
                                    </th>
                                    <td>UI/UX</td>
                                    <td>018201280</td>
                                    <td><button type="button" class="btn btn-outline-primary">Edit</button></td>
                                </tr>
                                <tr>
                                    <th className='d-flex'>
                                        <img src="./image/pros.png" class="img-fluid me-3" alt="..." />
                                        <p>JONAS AMSO</p>
                                    </th>
                                    <td>FRONT END</td>
                                    <td>1092019</td>
                                    <td ><button type="button" class="btn btn-outline-primary">Edit</button></td>
                                </tr>
                                <tr>
                                    <th className='d-flex'>
                                        <img src="./image/pros.png" class="img-fluid me-3" alt="..." />
                                        <p>JONAS AMSO</p>
                                    </th>
                                    <td colspan="2">BACKEND</td>
                                    <td><button type="button" class="btn btn-outline-primary">Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
export default Index;